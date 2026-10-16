import React from 'react'
import './ProjectCard.css';
const ProjectCard = (props) => {
  return (
    <div className="project-card">

      <div className="project-image">
        <img className="projectimg" src={props.image} alt={props.title} />
      </div>

      <div className="project-content">

        <h3>{props.title}</h3>

        <p>{props.description}</p>

        <div className="project-tags">
          {props.technologies.map((technology, index) => (
            <span key={index}>{technology}</span>
          ))}
        </div>

        <div className="project-buttons">
          <a href={props.liveUrl} target="_blank" rel="noreferrer">
            Live Demo
          </a>

         
        </div>

      </div>

    </div>
  );
}

export default ProjectCard