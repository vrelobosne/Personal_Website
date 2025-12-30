'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

/**
 * 3D Spinning Globe Component
 *
 * A colorful, blocky low-poly globe that rotates automatically.
 * Uses Three.js via React Three Fiber for WebGL rendering.
 */

function RotatingGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Rotate the globe continuously
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group>
      {/* Main Globe */}
      <Sphere ref={meshRef} args={[2, 16, 16]}>
        <meshStandardMaterial
          color="#06B6D4"
          wireframe={false}
          flatShading
          metalness={0.3}
          roughness={0.4}
        />
      </Sphere>

      {/* Inner glow sphere */}
      <Sphere args={[1.9, 16, 16]}>
        <meshBasicMaterial
          color="#8B5CF6"
          transparent
          opacity={0.3}
          wireframe
        />
      </Sphere>

      {/* Outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.05, 16, 32]} />
        <meshStandardMaterial
          color="#EC4899"
          emissive="#EC4899"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Diagonal ring */}
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.3, 0.03, 16, 32]} />
        <meshStandardMaterial
          color="#F59E0B"
          emissive="#F59E0B"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

export default function Globe3D() {
  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#06B6D4" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
        <spotLight position={[0, 10, 0]} intensity={0.8} color="#EC4899" />

        {/* The 3D Globe */}
        <RotatingGlobe />

        {/* Allow user interaction */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
