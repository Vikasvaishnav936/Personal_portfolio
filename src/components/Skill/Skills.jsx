import React from 'react'
import services from '../../data/skills'
import "./skill.css"
import SkillCard from "../SkillCard/SkillCard";

import "aos/dist/aos.css";
import {useEffect} from "react";
import AOS from 'aos';

function Skills() {
    useEffect(()=>{
        AOS.init({
            duration:1000,
            once: true,
        });
    },[]);
  return (
    <div className="skills" id="skills">

    <h2>My Expertise</h2>

    <div className="skills-container">

    {services.map((service)=>(
        <SkillCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            tags={service.tags}
        />
    ))}

</div>
</div>
  );
}

export default Skills