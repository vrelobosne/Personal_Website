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
    id: 'podcast-editor',
    title: 'PodcastEditor',
    description: 'Audio editing tool designed for podcast creators to streamline their editing workflow.',
    image: '/images/Podcast Stock photo.png',
    githubUrl: 'https://github.com/bachvtr/PodcastEditor',
    tags: ['Python', 'Audio Processing']
  },
  // Add more projects here by copying the structure above
  // Example:
  // {
  //   id: 'my-new-project',
  //   title: 'Project Name',
  //   description: 'Brief description of what this project does',
  //   image: '/images/project-screenshot.png',
  //   githubUrl: 'https://github.com/yourusername/project',
  //   tags: ['React', 'TypeScript', 'Next.js']
  // }
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
