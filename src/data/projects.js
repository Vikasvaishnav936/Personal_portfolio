import p1 from "../assets/images/p1.png";
// import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";

const projects = [
  {
    id: 1,
    title: "Minerals Website",
     description: "Corporate website for a minerals and industrial materials company.",
    image: p1,
   technologies: ["WordPress", "PHP", "JavaScript"],
  liveUrl: "https://snowgreenminerals.com/",
    
  },

  {
    id: 2,
    title: "College/University Website",
    description: "A responsive University Landing Page with Lead Form.",
    image: p3,
    technologies: ["React", "HTML", "JavaScript"],
    liveUrl: "https://spsu.modevcloud.com/",
    
  },
  {
    id: 3,
    title: "Marble Report Software",
    description: "A responsive Software for Marble Machines.",
    image: p4,
    technologies: ["Laravel", "PHP"],
    liveUrl: "https://saralstone.modevcloud.com/public/",
    
  },
   {
    id: 4,
    title: "E-commerce With Payment Getaway",
    description: "A responsive E-commerce website with online store.",
    image: p5,
    technologies: ["Wordpress", "E-commerce"],
    liveUrl: "https://swingzy.in/",
    
  },
];

export default projects;