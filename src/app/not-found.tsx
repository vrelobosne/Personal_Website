'use client';

import Link from 'next/link';
import SpaceBackground from '@/components/home/SpaceBackground';

/**
 * Custom 404 Page - Lost in Space
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Space Background */}
      <SpaceBackground />

      {/* Main floating astronaut */}
      <div className="absolute astronaut-drift" style={{ top: '30%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <svg width="120" height="150" viewBox="0 0 32 40" className="drop-shadow-2xl">
          {/* Helmet */}
          <rect x="8" y="0" width="16" height="14" rx="4" fill="#f0f0f0" />
          <rect x="10" y="3" width="12" height="8" rx="2" fill="#4a90d9" opacity="0.9" />
          {/* Reflection on visor */}
          <rect x="11" y="4" width="4" height="3" rx="1" fill="rgba(255,255,255,0.3)" />
          {/* Body */}
          <rect x="6" y="14" width="20" height="16" rx="2" fill="#e8e8e8" />
          {/* Backpack */}
          <rect x="4" y="16" width="4" height="12" rx="1" fill="#cccccc" />
          {/* Arms */}
          <rect x="0" y="16" width="6" height="4" rx="2" fill="#e8e8e8" />
          <rect x="26" y="16" width="6" height="4" rx="2" fill="#e8e8e8" />
          {/* Legs */}
          <rect x="8" y="30" width="6" height="10" rx="1" fill="#e8e8e8" />
          <rect x="18" y="30" width="6" height="10" rx="1" fill="#e8e8e8" />
          {/* Details */}
          <circle cx="16" cy="20" r="2" fill="#ff6b6b" opacity="0.8" />
        </svg>
      </div>

      {/* Content */}
      <div className="text-center z-10 mt-32">
        <h1 className="text-6xl md:text-8xl font-black text-white/10 mb-4">
          404
        </h1>

        <h2 className="text-xl md:text-2xl font-medium text-white mb-3">
          Lost in Space
        </h2>

        <p className="text-gray-500 mb-8 max-w-sm mx-auto text-sm">
          This page has drifted into the void.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-3 bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
        >
          Return to Earth
        </Link>
      </div>

      {/* Floating tether/cord from astronaut */}
      <svg className="absolute top-[45%] left-1/2 -translate-x-1/2 opacity-20" width="200" height="300">
        <path
          d="M100,0 Q80,100 120,200 Q90,250 100,300"
          stroke="white"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4,4"
          className="animate-pulse"
        />
      </svg>

      <style jsx>{`
        @keyframes astronaut-drift {
          0%, 100% {
            transform: translate(-50%, -50%) rotate(-5deg);
          }
          25% {
            transform: translate(-45%, -55%) rotate(0deg);
          }
          50% {
            transform: translate(-50%, -45%) rotate(5deg);
          }
          75% {
            transform: translate(-55%, -50%) rotate(0deg);
          }
        }
        .astronaut-drift {
          animation: astronaut-drift 15s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
