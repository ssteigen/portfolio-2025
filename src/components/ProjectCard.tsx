import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card project-card h-100 shadow">
        {project.imageUrl && (
          <img 
            src={project.imageUrl} 
            className="card-img-top" 
            alt={project.name}
            style={{height: '200px', objectFit: 'cover'}}
          />
        )}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text flex-grow-1">{project.description}</p>
          
          <div className="mb-3">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="badge bg-secondary tech-badge"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mt-auto">
            <div className="d-flex gap-2">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm"
              >
                <i className="fab fa-github me-1"></i>
                Code
              </a>
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  <i className="fas fa-external-link-alt me-1"></i>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;