import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Elvedin Handzic - Software Engineer',
    short_name: 'Elvedin',
    description: 'Software Engineer building scalable systems and developer tooling',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    icons: [
      {
        src: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon/android-chrome-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
    ],
  };
}
