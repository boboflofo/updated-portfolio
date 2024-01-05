import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from './projectsData'; 

const ProjectsList = () => {
  return (
    <div className="projects-list">
      {projectsData.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;