'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const EarthGlobe = dynamic(() => import('../../components/home/EarthGlobe'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-black"></div>
        </div>
    ),
});

export default function GlobePage() {
    const router = useRouter();

    return (
        <main className="w-screen h-screen bg-black relative overflow-hidden">
            {/* Back Button */}
            <button
                onClick={() => router.back()}
                className="absolute top-8 left-8 z-50 flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all duration-300 group font-light tracking-wider"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                </svg>
                <span>BACK</span>
            </button>

            {/* Full Screen Globe */}
            <div className="w-full h-full">
                <EarthGlobe interactive={true} autoRotate={false} />
            </div>

            {/* Instructions Overlay */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest uppercase pointer-events-none">
                Drag to Rotate • Scroll to Zoom • Right Click to Pan
            </div>
        </main>
    );
}
