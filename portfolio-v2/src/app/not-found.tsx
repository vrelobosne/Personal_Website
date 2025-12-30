import Link from 'next/link';

/**
 * Custom 404 Page
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
      <div className="text-center">
        {/* Glitch-style 404 */}
        <h1 className="text-8xl md:text-9xl font-black text-white mb-4 relative">
          <span className="absolute inset-0 text-cyan-400 opacity-50 animate-pulse" style={{ transform: 'translate(-2px, 2px)' }}>
            404
          </span>
          404
        </h1>

        <div className="h-px w-16 bg-white mx-auto mb-8"></div>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block px-8 py-4 bg-white text-black font-semibold tracking-wide hover:bg-gray-200 transition-all duration-300"
        >
          Back to Home
        </Link>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center gap-2 text-gray-600 text-sm font-mono">
          <span>~</span>
          <span>lost in space</span>
          <span>~</span>
        </div>
      </div>
    </div>
  );
}
