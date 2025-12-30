'use client';

/**
 * CSS Globe - Stylized Earth with recognizable continents
 * Pure CSS implementation for mobile performance
 */
export default function CSSGlobe() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="globe-wrapper">
        <div className="globe">
          <div className="ocean" />
          <div className="continents" />
          <div className="ice-caps" />
          <div className="clouds" />
          <div className="shading" />
          <div className="highlight" />
          <div className="atmosphere" />
        </div>
        <div className="glow" />
      </div>

      <style jsx>{`
        .globe-wrapper {
          position: relative;
          width: 200px;
          height: 200px;
        }

        .globe {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          position: relative;
          overflow: hidden;
        }

        .ocean {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 50% 40% at 30% 58%, #0a3d62 0%, transparent 65%),
            radial-gradient(ellipse 42% 32% at 70% 38%, #0a3d62 0%, transparent 65%),
            radial-gradient(circle at 25% 25%, #5dade2 0%, #3498db 15%, #2980b9 35%, #1a5276 55%, #0d3555 85%, #062540 100%);
        }

        .continents {
          position: absolute;
          inset: 0;
          background:
            /* NORTH AMERICA */
            radial-gradient(ellipse 26% 12% at 14% 22%, #27ae60 0%, #1e8449 88%, transparent 92%),
            radial-gradient(ellipse 22% 10% at 16% 30%, #2ecc71 0%, #27ae60 85%, transparent 90%),
            radial-gradient(ellipse 8% 6% at 8% 28%, #229954 0%, #1e8449 85%, transparent 90%),
            /* CENTRAL AMERICA */
            radial-gradient(ellipse 4% 8% at 16% 42%, #27ae60 0%, #229954 82%, transparent 88%),
            /* SOUTH AMERICA */
            radial-gradient(ellipse 12% 18% at 28% 56%, #2ecc71 0%, #27ae60 65%, transparent 90%),
            radial-gradient(ellipse 6% 14% at 26% 70%, #27ae60 0%, #1e8449 85%, transparent 90%),
            /* GREENLAND */
            radial-gradient(ellipse 10% 7% at 36% 14%, #ecf0f1 0%, #bdc3c7 75%, transparent 88%),
            /* ICELAND */
            radial-gradient(ellipse 3% 3% at 42% 20%, #bdc3c7 0%, #95a5a6 80%, transparent 90%),
            /* UK/IRELAND */
            radial-gradient(ellipse 3% 4% at 44% 26%, #27ae60 0%, #229954 85%, transparent 92%),
            /* EUROPE */
            radial-gradient(ellipse 12% 7% at 48% 27%, #27ae60 0%, #229954 85%, transparent 90%),
            /* SCANDINAVIA */
            radial-gradient(ellipse 5% 9% at 50% 17%, #27ae60 0%, #1e8449 85%, transparent 90%),
            /* AFRICA - Sahara */
            radial-gradient(ellipse 18% 9% at 50% 40%, #d4ac0d 0%, #b7950b 85%, transparent 90%),
            /* AFRICA - West bulge */
            radial-gradient(ellipse 8% 10% at 44% 48%, #27ae60 0%, #229954 78%, transparent 88%),
            /* AFRICA - Horn */
            radial-gradient(ellipse 6% 8% at 58% 48%, #d4ac0d 0%, #b7950b 80%, transparent 88%),
            /* AFRICA - Central */
            radial-gradient(ellipse 12% 15% at 52% 54%, #27ae60 0%, #229954 65%, #1e8449 88%, transparent 94%),
            /* AFRICA - South */
            radial-gradient(ellipse 8% 8% at 52% 66%, #2ecc71 0%, #27ae60 85%, transparent 90%),
            /* MADAGASCAR */
            radial-gradient(ellipse 3% 6% at 60% 60%, #27ae60 0%, #229954 85%, transparent 92%),
            /* MIDDLE EAST */
            radial-gradient(ellipse 8% 6% at 58% 38%, #d4ac0d 0%, #b7950b 80%, transparent 88%),
            /* RUSSIA */
            radial-gradient(ellipse 34% 9% at 66% 19%, #229954 0%, #1e8449 85%, transparent 90%),
            /* INDIA */
            radial-gradient(ellipse 8% 11% at 66% 44%, #2ecc71 0%, #27ae60 85%, transparent 90%),
            /* SRI LANKA */
            radial-gradient(ellipse 2% 3% at 68% 52%, #27ae60 0%, #229954 85%, transparent 92%),
            /* CHINA */
            radial-gradient(ellipse 16% 10% at 76% 32%, #27ae60 0%, #229954 85%, transparent 90%),
            /* KOREA */
            radial-gradient(ellipse 3% 5% at 82% 32%, #27ae60 0%, #229954 85%, transparent 92%),
            /* JAPAN */
            radial-gradient(ellipse 3% 7% at 86% 30%, #27ae60 0%, #229954 85%, transparent 92%),
            /* SOUTHEAST ASIA */
            radial-gradient(ellipse 7% 9% at 74% 48%, #2ecc71 0%, #27ae60 85%, transparent 90%),
            /* INDONESIA */
            radial-gradient(ellipse 10% 3% at 78% 56%, #27ae60 0%, #229954 85%, transparent 90%),
            /* AUSTRALIA */
            radial-gradient(ellipse 13% 9% at 82% 64%, #d68910 0%, #b9770e 85%, transparent 90%),
            /* TASMANIA */
            radial-gradient(ellipse 2% 2% at 86% 72%, #27ae60 0%, #229954 85%, transparent 92%),
            /* NEW ZEALAND */
            radial-gradient(ellipse 2% 4% at 92% 72%, #27ae60 0%, #229954 85%, transparent 92%);
          animation: rotate 48s linear infinite;
          background-size: 200% 100%;
        }

        .ice-caps {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 58% 11% at 50% 2%, rgba(255,255,255,0.98) 0%, rgba(236,240,241,0.55) 65%, transparent 100%),
            radial-gradient(ellipse 42% 7% at 50% 98%, rgba(255,255,255,0.95) 0%, rgba(236,240,241,0.45) 65%, transparent 100%);
        }

        .clouds {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 22% 3% at 22% 32%, rgba(255,255,255,0.55) 0%, transparent 100%),
            radial-gradient(ellipse 18% 2.5% at 54% 48%, rgba(255,255,255,0.45) 0%, transparent 100%),
            radial-gradient(ellipse 25% 3.5% at 38% 72%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(ellipse 14% 2% at 68% 35%, rgba(255,255,255,0.45) 0%, transparent 100%),
            radial-gradient(ellipse 16% 2% at 80% 55%, rgba(255,255,255,0.35) 0%, transparent 100%);
          animation: rotate-clouds 80s linear infinite;
          background-size: 200% 100%;
        }

        .shading {
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, transparent 0%, transparent 42%, rgba(0,0,0,0.22) 58%, rgba(0,0,0,0.48) 80%, rgba(0,0,0,0.65) 100%);
        }

        .highlight {
          position: absolute;
          top: 10%;
          left: 14%;
          width: 32%;
          height: 28%;
          border-radius: 50%;
          background: radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 65%, transparent 100%);
          transform: rotate(-18deg);
        }

        .atmosphere {
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          border: 2px solid rgba(100,180,255,0.35);
          box-shadow: 0 0 28px rgba(100,180,255,0.25), 0 0 55px rgba(100,180,255,0.08), inset 0 0 28px rgba(100,180,255,0.08);
        }

        .glow {
          position: absolute;
          inset: -24px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(100,180,255,0.18) 0%, rgba(100,180,255,0.06) 50%, transparent 70%);
          animation: pulse 5s ease-in-out infinite;
        }

        @keyframes rotate {
          from { background-position: 0% 0%; }
          to { background-position: 200% 0%; }
        }

        @keyframes rotate-clouds {
          from { background-position: 0% 0%; }
          to { background-position: 200% 0%; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
