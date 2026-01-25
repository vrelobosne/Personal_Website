# Personal Portfolio

[![CI](https://github.com/vrelobosne/Personal_Website/actions/workflows/ci.yml/badge.svg)](https://github.com/vrelobosne/Personal_Website/actions/workflows/ci.yml)

Interactive portfolio website featuring 3D visualizations and modern web animations.

**Live:** [elvedin.dev](https://elvedin.dev)

## Features

- **3D Earth Globe** - Voxel-rendered Earth with biome colors and power grid visualization using instanced mesh rendering
- **Scroll Animations** - Framer Motion powered reveal effects and transitions
- **Responsive Design** - Mobile-first with adaptive 3D loading for performance
- **Contact Form** - Web3Forms integration for serverless form handling

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 16, React 19, TypeScript |
| 3D Graphics | Three.js, React Three Fiber, React Three Drei |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Deployment | Vercel |

## Architecture

```
src/
├── app/           # Next.js App Router pages
├── components/    # React components
│   ├── home/      # Homepage sections (Globe, Skills, Experience)
│   ├── layout/    # Navbar, Footer
│   └── ui/        # Reusable UI components
├── data/          # Content data (projects, skills, experience)
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── types/         # TypeScript interfaces
public/            # Static assets
```

## Performance

- **Instanced Mesh Rendering** - Thousands of voxels rendered efficiently
- **Dynamic Imports** - Heavy 3D components loaded with code splitting
- **Image Optimization** - WebP/AVIF with Next.js Image component
- **Security Headers** - XSS, clickjacking, MIME sniffing protection

## Local Development

**Requirements:** Node.js 22+

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## License

MIT
