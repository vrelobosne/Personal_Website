'use client';

import { useRef, useLayoutEffect, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { ASCII_EARTH } from './EarthMapData';

/**
 * LEGO Voxel Earth - True 3D Grid
 * Mapped using an ASCII representation of Earth for accuracy.
 */

// 128x64 ASCII Map generated from Earth Topography
const MAP_WIDTH = 128;
const MAP_HEIGHT = 64;

const tempObject = new THREE.Object3D();
const tempColor = new THREE.Color();
// Reusable objects for animation loop - prevents memory leak
const animDummy = new THREE.Object3D();
const tempPos = new THREE.Vector3();
const originVector = new THREE.Vector3(0, 0, 0);

function getBiomeColor(code: string): string {
  switch (code) {
    case '0': return '#1E88E5'; // Ocean
    case '1': return '#388E3C'; // Green Land (Darker Forest)
    case '2': return '#FBC02D'; // Desert (Gold/Sand)
    case '3': return '#E3F2FD'; // Ice
    case '4': return '#5D4037'; // Mountain
    default: return '#1E88E5';
  }
}

interface GlobalPowerGridProps {
  landVoxels: { position: THREE.Vector3 }[];
  blockSize: number;
}

function GlobalPowerGrid({ landVoxels, blockSize }: GlobalPowerGridProps) {
  const towerRef = useRef<THREE.InstancedMesh>(null);
  const electricityRef = useRef<THREE.InstancedMesh>(null);

  // Conservative settings for clean look
  const NUM_TOWERS = 20;
  const CONNECTIONS_PER_TOWER = 2;
  const PARTICLES_PER_LINE = 2;

  const { towers, lines, particles } = useMemo(() => {
    if (landVoxels.length === 0) return { towers: [], lines: [], particles: [] };

    // Select tower positions
    const _towers: THREE.Vector3[] = [];
    const usedIndices = new Set<number>();

    let attempts = 0;
    while (_towers.length < NUM_TOWERS && attempts < 2000) {
      attempts++;
      const idx = Math.floor(Math.random() * landVoxels.length);
      if (!usedIndices.has(idx)) {
        usedIndices.add(idx);
        const pos = landVoxels[idx].position.clone().multiplyScalar(1.04);
        _towers.push(pos);
      }
    }

    // Generate connections
    const _lines: THREE.Vector3[][] = [];
    const _particles: { path: THREE.Vector3[], offset: number, speed: number }[] = [];

    _towers.forEach((startPos, i) => {
      const neighbors = _towers
        .map((pos, idx) => ({ pos, idx, dist: startPos.distanceTo(pos) }))
        .filter(n => n.idx !== i)
        .sort((a, b) => a.dist - b.dist)
        .slice(0, CONNECTIONS_PER_TOWER);

      neighbors.forEach(n => {
        const endPos = n.pos;
        const dist = startPos.distanceTo(endPos);

        // Gentle arc
        const midPoint = startPos.clone().add(endPos).multiplyScalar(0.5).normalize()
          .multiplyScalar(startPos.length() + (dist * 0.08));

        const curve = new THREE.QuadraticBezierCurve3(startPos, midPoint, endPos);
        const points = curve.getPoints(20);
        _lines.push(points);

        // Add electricity particles
        for (let p = 0; p < PARTICLES_PER_LINE; p++) {
          _particles.push({
            path: points,
            offset: Math.random(),
            speed: 0.15 + Math.random() * 0.2
          });
        }
      });
    });

    return { towers: _towers, lines: _lines, particles: _particles };
  }, [landVoxels]);

  // Animate electricity particles
  useFrame((state, delta) => {
    if (!electricityRef.current) return;

    particles.forEach((particle, i) => {
      particle.offset += delta * particle.speed;
      if (particle.offset > 1) particle.offset = 0;

      const totalPoints = particle.path.length - 1;
      const exactIndex = particle.offset * totalPoints;
      const idx = Math.floor(exactIndex);
      const t = exactIndex - idx;

      if (idx < totalPoints) {
        const p1 = particle.path[idx];
        const p2 = particle.path[idx + 1];
        tempPos.lerpVectors(p1, p2, t);

        animDummy.position.copy(tempPos);

        // Pulsing glow effect
        const pulse = Math.sin(state.clock.elapsedTime * 5 + i * 0.5) * 0.3 + 0.7;
        animDummy.scale.setScalar(blockSize * 0.8 * pulse);

        animDummy.updateMatrix();
        if (electricityRef.current) {
          electricityRef.current.setMatrixAt(i, animDummy.matrix);
        }
      }
    });
    if (electricityRef.current) {
      electricityRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  // Position towers
  useLayoutEffect(() => {
    if (!towerRef.current) return;

    towers.forEach((pos, i) => {
      tempObject.position.copy(pos);
      tempObject.lookAt(originVector);
      tempObject.rotateX(-Math.PI / 2);
      tempObject.updateMatrix();
      towerRef.current!.setMatrixAt(i, tempObject.matrix);
    });

    towerRef.current.instanceMatrix.needsUpdate = true;
  }, [towers]);

  return (
    <group>
      {/* Simple tower markers */}
      <instancedMesh ref={towerRef} args={[undefined, undefined, towers.length]} frustumCulled={false}>
        <boxGeometry args={[blockSize * 0.6, blockSize * 2.5, blockSize * 0.6]} />
        <meshStandardMaterial
          color="#555555"
          roughness={0.7}
          emissive="#ffaa00"
          emissiveIntensity={0.3}
        />
      </instancedMesh>

      {/* Power lines - very thin */}
      {lines.map((points, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={points.length}
              array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
              itemSize={3}
              args={[new Float32Array(points.flatMap(p => [p.x, p.y, p.z])), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#ffaa00" opacity={0.4} transparent />
        </line>
      ))}

      {/* Electricity particles */}
      <instancedMesh ref={electricityRef} args={[undefined, undefined, particles.length]} frustumCulled={false}>
        <sphereGeometry args={[1, 4, 4]} />
        <meshBasicMaterial
          color="#ffff00"
          toneMapped={false}
        />
      </instancedMesh>
    </group>
  );
}

interface VoxelEarthProps {
  autoRotate?: boolean;
  isDarkMode?: boolean;
}

function VoxelEarth({ autoRotate = false, isDarkMode = false }: VoxelEarthProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const rotationGroupRef = useRef<THREE.Group>(null);

  // Voxel Settings - Optimized for performance
  const radius = 20; // Reduced for better performance
  const blockSize = 0.11; // Larger blocks = fewer total voxels

  const { data, count, landVoxels } = useMemo(() => {
    const _data: { position: THREE.Vector3; color: string }[] = [];
    const _landVoxels: { position: THREE.Vector3 }[] = [];

    // Iterate 3D Grid
    for (let x = -radius; x <= radius; x++) {
      for (let y = -radius; y <= radius; y++) {
        for (let z = -radius; z <= radius; z++) {

          const distSq = x * x + y * y + z * z;
          const rSq = radius * radius;
          // Thinner shell for better performance
          if (distSq <= rSq && distSq > rSq - (radius * 3.5)) {

            const vector = new THREE.Vector3(x, y, z).normalize();
            const phi = Math.acos(vector.y);
            const theta = Math.atan2(vector.x, vector.z);

            // UV Coordinates [0, 1]
            let u = (theta + Math.PI) / (2 * Math.PI);
            let v = phi / Math.PI; // Fix: Do not invert Y, map North (0) to Top (0)

            // Map to ASCII Grid
            const mapX = Math.floor(u * MAP_WIDTH) % MAP_WIDTH;
            const mapY = Math.floor(v * MAP_HEIGHT);
            // Clamp mapY to be safe
            const safeY = Math.min(Math.max(0, mapY), MAP_HEIGHT - 1);

            const charIndex = safeY * MAP_WIDTH + mapX;
            // Clean newline characters from imported map if necessary
            const cleanMap = ASCII_EARTH.replace(/\n/g, '');
            const biomeCode = cleanMap[charIndex] || '0';

            const pos = new THREE.Vector3(x, y, z).multiplyScalar(blockSize);
            const color = getBiomeColor(biomeCode);

            // Store land voxels for power grid (Biome 1, 2, 4 are land-ish)
            if (['1', '2', '4'].includes(biomeCode)) {
              _landVoxels.push({ position: pos });
            }

            _data.push({
              position: pos,
              color: color
            });
          }
        }
      }
    }
    return { data: _data, count: _data.length, landVoxels: _landVoxels };
  }, []);

  useLayoutEffect(() => {
    if (!meshRef.current) return;

    let i = 0;
    for (const d of data) {
      tempObject.position.copy(d.position);
      tempObject.rotation.set(0, 0, 0);
      tempObject.updateMatrix();
      meshRef.current.setMatrixAt(i, tempObject.matrix);

      tempColor.set(d.color);
      meshRef.current.setColorAt(i, tempColor);
      i++;
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  }, [data]);

  useFrame((state, delta) => {
    // Spin if autoRotate is enabled
    if (rotationGroupRef.current && autoRotate) {
      rotationGroupRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={rotationGroupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]} frustumCulled={false}>
        {/* Box geometry slightly larger than grid spacing to ensure overlap and no gaps */}
        <boxGeometry args={[blockSize * 1.05, blockSize * 1.05, blockSize * 1.05]} />
        <meshStandardMaterial
          roughness={0.8} // Matte
          metalness={0.0} // Plastic/Clay look
        />
      </instancedMesh>
      {/* Power grid with electricity flow */}
      <GlobalPowerGrid landVoxels={landVoxels} blockSize={blockSize} />
    </group>
  );
}

function VoxelSpaceShuttle() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const blockSize = 0.07;

  const { data, count } = useMemo(() => {
    const _data: { position: THREE.Vector3; color: string }[] = [];

    // Main fuselage (white) - horizontal orientation, longer body
    // Bottom layer
    for (let y = 0; y < 7; y++) {
      _data.push({
        position: new THREE.Vector3(0, y, 0).multiplyScalar(blockSize),
        color: '#f5f5f5'
      });
      // Make body wider (2 blocks wide)
      if (y >= 1 && y <= 5) {
        _data.push({
          position: new THREE.Vector3(1, y, 0).multiplyScalar(blockSize),
          color: '#f5f5f5'
        });
        _data.push({
          position: new THREE.Vector3(-1, y, 0).multiplyScalar(blockSize),
          color: '#f5f5f5'
        });
      }
    }

    // Nose cone (black thermal tiles style)
    _data.push({
      position: new THREE.Vector3(0, 7, 0).multiplyScalar(blockSize),
      color: '#1a1a1a'
    });

    // Cockpit windows (blue)
    _data.push({
      position: new THREE.Vector3(0, 6, 1).multiplyScalar(blockSize),
      color: '#4a90d9'
    });
    _data.push({
      position: new THREE.Vector3(0, 5, 1).multiplyScalar(blockSize),
      color: '#4a90d9'
    });

    // Delta wings (left and right) - characteristic shuttle shape
    // Left wing
    for (let i = 0; i < 4; i++) {
      _data.push({
        position: new THREE.Vector3(-2 - i, 2 - Math.floor(i / 2), 0).multiplyScalar(blockSize),
        color: '#e8e8e8'
      });
    }
    _data.push({
      position: new THREE.Vector3(-2, 3, 0).multiplyScalar(blockSize),
      color: '#e8e8e8'
    });

    // Right wing
    for (let i = 0; i < 4; i++) {
      _data.push({
        position: new THREE.Vector3(2 + i, 2 - Math.floor(i / 2), 0).multiplyScalar(blockSize),
        color: '#e8e8e8'
      });
    }
    _data.push({
      position: new THREE.Vector3(2, 3, 0).multiplyScalar(blockSize),
      color: '#e8e8e8'
    });

    // Vertical tail fin (iconic shuttle feature)
    _data.push({
      position: new THREE.Vector3(0, 2, -1).multiplyScalar(blockSize),
      color: '#f0f0f0'
    });
    _data.push({
      position: new THREE.Vector3(0, 3, -1).multiplyScalar(blockSize),
      color: '#f0f0f0'
    });
    _data.push({
      position: new THREE.Vector3(0, 4, -1).multiplyScalar(blockSize),
      color: '#f0f0f0'
    });
    // NASA logo hint (red stripe)
    _data.push({
      position: new THREE.Vector3(0, 3, -2).multiplyScalar(blockSize),
      color: '#cc3333'
    });

    // Engine nozzles (3 main engines - orange/dark)
    _data.push({
      position: new THREE.Vector3(0, -1, 0).multiplyScalar(blockSize),
      color: '#ff6600'
    });
    _data.push({
      position: new THREE.Vector3(1, 0, 0).multiplyScalar(blockSize),
      color: '#ff6600'
    });
    _data.push({
      position: new THREE.Vector3(-1, 0, 0).multiplyScalar(blockSize),
      color: '#ff6600'
    });

    // Cargo bay doors (dark line on top)
    _data.push({
      position: new THREE.Vector3(0, 4, 1).multiplyScalar(blockSize),
      color: '#333333'
    });
    _data.push({
      position: new THREE.Vector3(0, 3, 1).multiplyScalar(blockSize),
      color: '#333333'
    });

    // USA text hint (blue stripe on wings)
    _data.push({
      position: new THREE.Vector3(-2, 2, 1).multiplyScalar(blockSize),
      color: '#1a4a8a'
    });
    _data.push({
      position: new THREE.Vector3(2, 2, 1).multiplyScalar(blockSize),
      color: '#1a4a8a'
    });

    return { data: _data, count: _data.length };
  }, []);

  useLayoutEffect(() => {
    if (!meshRef.current) return;
    let i = 0;
    for (const d of data) {
      tempObject.position.copy(d.position);
      tempObject.rotation.set(0, 0, 0);
      tempObject.updateMatrix();
      meshRef.current.setMatrixAt(i, tempObject.matrix);
      tempColor.set(d.color);
      meshRef.current.setColorAt(i, tempColor);
      i++;
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  }, [data]);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} frustumCulled={false}>
      <boxGeometry args={[blockSize * 1.05, blockSize * 1.05, blockSize * 1.05]} />
      <meshStandardMaterial roughness={0.8} metalness={0.1} />
    </instancedMesh>
  );
}

function VoxelMoon() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const orbitGroupRef = useRef<THREE.Group>(null);
  const radius = 6;
  const blockSize = 0.085;

  const { data, count } = useMemo(() => {
    const _data: { position: THREE.Vector3; color: string }[] = [];
    for (let x = -radius; x <= radius; x++) {
      for (let y = -radius; y <= radius; y++) {
        for (let z = -radius; z <= radius; z++) {
          const distSq = x * x + y * y + z * z;
          const rSq = radius * radius;
          if (distSq <= rSq && distSq > rSq - (radius * 3.5)) {
            _data.push({
              position: new THREE.Vector3(x, y, z).multiplyScalar(blockSize),
              color: '#cccccc' // Moon Gray
            });
          }
        }
      }
    }
    return { data: _data, count: _data.length };
  }, []);

  useLayoutEffect(() => {
    if (!meshRef.current) return;
    let i = 0;
    for (const d of data) {
      tempObject.position.copy(d.position);
      tempObject.rotation.set(0, 0, 0);
      tempObject.updateMatrix();
      meshRef.current.setMatrixAt(i, tempObject.matrix);
      tempColor.set(d.color);
      meshRef.current.setColorAt(i, tempColor);
      i++;
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [data]);

  useFrame((state, delta) => {
    if (orbitGroupRef.current) {
      orbitGroupRef.current.rotation.y += delta * 0.2; // Orbit Speed
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05; // Moon Spin Speed
    }
  });

  return (
    <group ref={orbitGroupRef} rotation={[0, 0, Math.PI / 6]}>
      <group position={[3.2, 0, 0]}> {/* Orbit Distance - Balanced for normal container */}
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]} frustumCulled={false}>
          <boxGeometry args={[blockSize * 1.05, blockSize * 1.05, blockSize * 1.05]} />
          <meshStandardMaterial roughness={0.9} metalness={0.0} color="#cccccc" />
        </instancedMesh>
        {/* Space Shuttle on moon surface */}
        <group position={[0.6, 0.12, 0]} rotation={[0, Math.PI / 4, -0.1]}>
          <VoxelSpaceShuttle />
        </group>
      </group>
    </group>
  );
}


interface EarthGlobeProps {
  interactive?: boolean;
  autoRotate?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function EarthGlobe({
  interactive = false,
  autoRotate = false,
  className = '',
  onClick,
}: EarthGlobeProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkDarkMode);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', checkDarkMode);
    };
  }, []);

  return (
    <div
      className={`absolute inset-0 ${className}`}
      onClick={onClick}
      style={{ width: '100%', height: '100%' }}
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 40 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
        performance={{ min: 0.5 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
        resize={{ scroll: false, offsetSize: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.0} />
        <directionalLight position={[-10, 5, -5]} intensity={0.5} />

        <group scale={1.0}> {/* Reset scale */}
          <VoxelEarth autoRotate={autoRotate} isDarkMode={isDarkMode} />
          {isDarkMode && <VoxelMoon />}
        </group>


        {interactive && (
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            autoRotate={false}
          />
        )}
      </Canvas>
    </div>
  );
}
