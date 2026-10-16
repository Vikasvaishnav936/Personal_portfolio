import React from "react";
import "./ExperienceCard.css";

function ExperienceCard(props) {
  return (
    <div className="experience-card">

      <div className="experience-dot"></div>

      <div className="experience-content">
        <span className="experience-duration">
          {props.duration}
        </span>

        <h3>{props.role}</h3>

        <h4>{props.company}</h4>

        <p>{props.description}</p>

        <div className="experience-tags">
          {props.technologies.map((technology, index) => (
            <span key={index}>{technology}</span>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ExperienceCard;