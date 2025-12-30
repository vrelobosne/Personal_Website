'use client';

/**
 * Lightweight CSS Globe - No Three.js, pure CSS animation
 * Uses gradients and transforms for a globe-like effect
 */
export default function CSSGlobe() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Globe container */}
      <div className="globe-container">
        {/* Main globe sphere */}
        <div className="globe">
          {/* Rotating longitude lines */}
          <div className="globe-lines" />

          {/* Light reflection */}
          <div className="globe-shine" />
        </div>

        {/* Glow effect */}
        <div className="globe-glow" />
      </div>

      <style jsx>{`
        .globe-container {
          position: relative;
          width: 200px;
          height: 200px;
        }

        .globe {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            #1a365d 0%,
            #0d4a6b 25%,
            #0a5a4a 50%,
            #1a5a3a 75%,
            #0d3d2d 100%
          );
          position: relative;
          overflow: hidden;
          box-shadow:
            inset -20px -20px 50px rgba(0, 0, 0, 0.5),
            inset 10px 10px 30px rgba(100, 200, 255, 0.1);
        }

        .globe-lines {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background:
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 18px,
              rgba(100, 200, 255, 0.1) 18px,
              rgba(100, 200, 255, 0.1) 20px
            );
          animation: rotate-globe 20s linear infinite;
        }

        .globe::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background:
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 28px,
              rgba(100, 200, 255, 0.08) 28px,
              rgba(100, 200, 255, 0.08) 30px
            );
        }

        .globe-shine {
          position: absolute;
          top: 10%;
          left: 15%;
          width: 30%;
          height: 30%;
          border-radius: 50%;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 255, 255, 0.3) 0%,
            transparent 70%
          );
        }

        .globe-glow {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(0, 217, 255, 0.15) 0%,
            transparent 70%
          );
          animation: pulse-glow 4s ease-in-out infinite;
        }

        @keyframes rotate-globe {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 200px 0;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
