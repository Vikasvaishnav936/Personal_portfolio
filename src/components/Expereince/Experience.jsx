import React from "react";
import expereinces from "../../data/expereinces";

import ExperienceCard from "../ExperienceCard/ExperienceCard";
import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="experience-heading">
        <span>MY JOURNEY</span>
        <h2>Professional Experience</h2>
        <p>
          My professional journey and experience working with
          modern web technologies.
        </p>
      </div>

      <div className="experience-list">
        {expereinces.map((experience) => (
          <ExperienceCard
            key={experience.id}
            {...experience}
          />
        ))}
      </div>

    </section>
  );
}

export default Experience;