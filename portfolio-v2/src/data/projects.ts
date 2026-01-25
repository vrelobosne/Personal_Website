import { Project } from '@/types';

/**
 * Projects Data
 *
 * This file contains all your projects displayed on the Projects page.
 * To add a new project, simply add another object to the array following
 * the same structure.
 */

export const projects: Project[] = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Interactive portfolio with 3D Earth visualization, voxel rendering, and power grid animations built with Three.js and React Three Fiber.',
    image: '/images/portfolio-preview.png',
    githubUrl: 'https://github.com/vrelobosne/Personal_Website',
    tags: ['Next.js', 'Three.js', 'TypeScript', 'React']
  },
];

// Helper function to get a single project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Helper function to get projects by tag
export const getProjectsByTag = (tag: string): Project[] => {
  return projects.filter(project =>
    project.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
};
