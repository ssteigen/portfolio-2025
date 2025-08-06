import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'acdesignhub',
      name: 'AC Design Hub',
      description: 'Searchable repository of Animal Crossing designs with filtering and categorization features.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/ssteigen/acdesignhub',
      featured: true
    },
    {
      id: 'minesweeper',
      name: 'Minesweeper',
      description: 'Classic minesweeper game implemented with modern web technologies.',
      technologies: ['JavaScript', 'SCSS', 'HTML'],
      githubUrl: 'https://github.com/ssteigen/minesweeper',
      featured: true
    },
    {
      id: 'colorfill',
      name: 'ColorFill',
      description: 'Interactive color filling application with smooth animations and responsive design.',
      technologies: ['JavaScript', 'CSS', 'HTML'],
      githubUrl: 'https://github.com/ssteigen/colorfill',
      featured: true
    },
    {
      id: 'namerator',
      name: 'Namerator',
      description: 'Creative team name generator with customizable options and themes.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/ssteigen/namerator'
    },
    {
      id: 'skatesona',
      name: 'Skatesona',
      description: 'Design your ideal skates with customization options and visual previews.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/ssteigen/skatesona'
    },
    {
      id: 'yarn-basket',
      name: 'The Yarn Basket',
      description: 'Web application for yarn enthusiasts to organize and track their projects.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/ssteigen/the-yarn-basket'
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5 fw-bold">My Projects</h2>
            <p className="lead">A collection of web applications and interactive tools</p>
          </div>
        </div>

        {featuredProjects.length > 0 && (
          <>
            <div className="row mb-5">
              <div className="col-12">
                <h3 className="h4 mb-4">Featured Projects</h3>
              </div>
            </div>
            <div className="row">
              {featuredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}

        {otherProjects.length > 0 && (
          <>
            <div className="row mt-5 mb-4">
              <div className="col-12">
                <h3 className="h4">Other Projects</h3>
              </div>
            </div>
            <div className="row">
              {otherProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;