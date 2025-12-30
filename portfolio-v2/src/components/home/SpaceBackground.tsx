'use client';

import { useEffect, useState, useMemo } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export default function SpaceBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Dramatically reduced star count - use CSS animations instead of Framer Motion
  const stars = useMemo<Star[]>(() => {
    const _stars: Star[] = [];

    // Far stars (tiny, fewer)
    for (let i = 0; i < 40; i++) {
      _stars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 5,
      });
    }

    // Mid stars
    for (let i = 40; i < 60; i++) {
      _stars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.5,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 3,
      });
    }

    // Near stars (brighter, fewer)
    for (let i = 60; i < 75; i++) {
      _stars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 2,
        opacity: Math.random() * 0.2 + 0.8,
        duration: Math.random() * 2 + 1.5,
        delay: Math.random() * 2,
      });
    }

    return _stars;
  }, []);

  // Pre-compute styles to avoid recreation
  const starStyles = useMemo(() => {
    return stars.map(star => ({
      left: `${star.x}%`,
      top: `${star.y}%`,
      width: star.size,
      height: star.size,
      opacity: star.opacity,
      animationDuration: `${star.duration}s`,
      animationDelay: `${star.delay}s`,
    }));
  }, [stars]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep space gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(15, 23, 42, 0.3) 0%, transparent 60%)',
        }}
      />

      {/* Static nebula clouds - no animation, just ambient */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          left: '80%',
          top: '15%',
          width: 400,
          height: 400,
          background: 'rgba(59, 130, 246, 0.04)',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          left: '15%',
          top: '65%',
          width: 350,
          height: 350,
          background: 'rgba(139, 92, 246, 0.03)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Stars using CSS animations instead of Framer Motion */}
      {stars.map((star, index) => (
        <div
          key={star.id}
          className="absolute rounded-full star-twinkle"
          style={{
            ...starStyles[index],
            backgroundColor: star.id >= 60
              ? 'rgba(255, 255, 255, 1)'
              : star.id >= 40
              ? 'rgba(200, 220, 255, 0.9)'
              : 'rgba(180, 200, 255, 0.7)',
            boxShadow: star.id >= 60
              ? `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.5)`
              : 'none',
          }}
        />
      ))}

      {/* Static constellation - SVG without animations */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        {/* Big dipper pattern */}
        <line x1="70%" y1="15%" x2="75%" y2="18%" stroke="rgba(100, 150, 255, 0.3)" strokeWidth="0.5" />
        <line x1="75%" y1="18%" x2="80%" y2="16%" stroke="rgba(100, 150, 255, 0.3)" strokeWidth="0.5" />
        <line x1="80%" y1="16%" x2="85%" y2="20%" stroke="rgba(100, 150, 255, 0.3)" strokeWidth="0.5" />
        <line x1="85%" y1="20%" x2="83%" y2="25%" stroke="rgba(100, 150, 255, 0.3)" strokeWidth="0.5" />
        <circle cx="70%" cy="15%" r="1.5" fill="rgba(150, 180, 255, 0.6)" />
        <circle cx="75%" cy="18%" r="1.5" fill="rgba(150, 180, 255, 0.6)" />
        <circle cx="80%" cy="16%" r="1.5" fill="rgba(150, 180, 255, 0.6)" />
        <circle cx="85%" cy="20%" r="1.5" fill="rgba(150, 180, 255, 0.6)" />
        <circle cx="83%" cy="25%" r="1.5" fill="rgba(150, 180, 255, 0.6)" />
      </svg>

      {/* Distant galaxy - static */}
      <div
        className="absolute opacity-40"
        style={{
          right: '10%',
          top: '15%',
          width: '60px',
          height: '25px',
          background: 'radial-gradient(ellipse, rgba(200, 180, 255, 0.15) 0%, transparent 70%)',
          transform: 'rotate(-30deg)',
          filter: 'blur(2px)',
        }}
      />

      {/* Small distant astronaut - CSS animation for performance */}
      <div
        className="absolute opacity-40 astronaut-float"
        style={{
          right: '15%',
          top: '25%',
          transform: 'scale(0.5)',
        }}
      >
        <svg width="32" height="40" viewBox="0 0 32 40">
          <rect x="8" y="0" width="16" height="14" rx="4" fill="#f0f0f0" />
          <rect x="10" y="3" width="12" height="8" rx="2" fill="#4a90d9" opacity="0.9" />
          <rect x="6" y="14" width="20" height="16" rx="2" fill="#e8e8e8" />
          <rect x="4" y="16" width="4" height="12" rx="1" fill="#cccccc" />
          <rect x="0" y="16" width="6" height="4" rx="2" fill="#e8e8e8" />
          <rect x="26" y="16" width="6" height="4" rx="2" fill="#e8e8e8" />
          <rect x="8" y="30" width="6" height="10" rx="1" fill="#e8e8e8" />
          <rect x="18" y="30" width="6" height="10" rx="1" fill="#e8e8e8" />
        </svg>
      </div>
    </div>
  );
}
