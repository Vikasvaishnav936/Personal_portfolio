import React from 'react'
import './Projects.css'
import projects from '../../data/projects'
import ProjectCard from '../ProjectCard/ProjectCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-heading">
        <span>PORTFOLIO</span>

        <h2>Selected Work</h2>

        <p>
          These are some of my best projects, selected to showcase my
          strongest work and give clients and companies a quick look
          at my skills and experience.
        </p>
      </div>

      <div className="projects-slider">

  <button className="slider-prev">←</button>

  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={30}
    slidesPerView={2}
    navigation={{
      prevEl: '.slider-prev',
      nextEl: '.slider-next',
    }}
    pagination={{ clickable: true }}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    loop={true}
    breakpoints={{
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    }}
  >
    {projects.map((project, index) => (
      <SwiperSlide key={index}>
        <ProjectCard
          image={project.image}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          liveUrl={project.liveUrl}
        />
      </SwiperSlide>
    ))}
  </Swiper>

  <button className="slider-next">→</button>

</div>

    </section>
  );
}


export default Projects