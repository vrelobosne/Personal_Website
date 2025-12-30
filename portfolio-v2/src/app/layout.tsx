import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { personalInfo } from "@/data/personal";

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
  keywords: ['Elvedin Handzic', 'Computer Science', 'UMN', 'University of Minnesota', 'Web Developer', 'Portfolio'],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    title: `${personalInfo.name}'s Personal Website`,
    description: `Learn more about ${personalInfo.name}`,
    url: 'https://elvedin.dev',
    siteName: personalInfo.name,
    images: [
      {
        url: '/images/SM_Landingpage.png',
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} Portfolio`,
      },
    ],
    locale: 'en_US',
    type: 'website',
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
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
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
              jobTitle: personalInfo.title,
              worksFor: {
                '@type': 'EducationalOrganization',
                name: personalInfo.university,
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
