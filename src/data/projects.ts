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
    id: 'project-1',
    title: 'Project 1',
    description: 'Coming soon.',
    image: '/images/SM_Landingpage.png',
    githubUrl: '#',
    tags: ['Placeholder']
  },
  {
    id: 'project-2',
    title: 'Project 2',
    description: 'Coming soon.',
    image: '/images/SM_Landingpage.png',
    githubUrl: '#',
    tags: ['Placeholder']
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
