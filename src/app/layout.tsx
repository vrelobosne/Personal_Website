import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { personalInfo } from "@/data/personal";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

/**
 * Root Layout Component
 *
 * This wraps your entire application.
 * - Sets up SEO metadata
 * - Includes Navbar and Footer on every page
 * - Configures fonts and global styles
 */

export const metadata: Metadata = {
  metadataBase: new URL('https://elvedin.dev'),
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: `${personalInfo.name}'s personal portfolio. ${personalInfo.title} at ${personalInfo.university} exploring web development, programming, and technology.`,
  keywords: ['Elvedin Handzic', 'Software Engineer', 'Developer', 'Portfolio', 'Full Stack'],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  // Canonical URL for SEO
  alternates: {
    canonical: 'https://elvedin.dev',
  },
  openGraph: {
    title: `${personalInfo.name} | Software Engineer`,
    description: 'Software Engineer building scalable systems, developer tooling, and enterprise infrastructure.',
    url: 'https://elvedin.dev',
    siteName: personalInfo.name,
    images: [
      {
        url: '/images/SM_Landingpage.png',
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - Software Engineer Portfolio`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | Software Engineer`,
    description: 'Software Engineer building scalable systems, developer tooling, and enterprise infrastructure.',
    images: ['/images/SM_Landingpage.png'],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  // Verification for search consoles (add your IDs later)
  verification: {
    google: '', // Add your Google Search Console ID
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preconnect for faster external resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for third-party services */}
        <link rel="dns-prefetch" href="https://api.web3forms.com" />
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0A0A0A" />

        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: personalInfo.name,
              url: 'https://elvedin.dev',
              sameAs: [
                'https://www.linkedin.com/in/handzice/',
                'https://github.com/vrelobosne',
              ],
              jobTitle: 'Software Engineer',
              description: 'Software Engineer building scalable systems, developer tooling, and enterprise infrastructure.',
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen pt-20" role="main">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
