import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
  const { id, title, description, link, image } = project;

  return (
    <div className="project-card">
      <div className="card">
        
        <div className="card-body">
        <img src='./assets/2048-pic.jpg'></img>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;