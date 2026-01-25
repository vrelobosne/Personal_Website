'use client';

/**
 * Floating Laptop - Simple animated laptop for mobile hero
 */
export default function CSSGlobe() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="laptop-container">
        <div className="laptop">💻</div>
        <div className="glow" />
      </div>

      <style jsx>{`
        .laptop-container {
          position: relative;
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .laptop {
          font-size: 120px;
          animation: float 4s ease-in-out infinite, spin 20s linear infinite;
          filter: drop-shadow(0 0 20px rgba(0, 217, 255, 0.4));
        }

        .glow {
          position: absolute;
          inset: 20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, transparent 70%);
          animation: pulse 3s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotateY(0deg);
          }
          50% {
            transform: translateY(-15px) rotateY(0deg);
          }
        }

        @keyframes spin {
          from {
            transform: translateY(0px) rotateY(0deg);
          }
          to {
            transform: translateY(0px) rotateY(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}
