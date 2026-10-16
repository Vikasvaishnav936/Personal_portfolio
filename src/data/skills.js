import {
  FaServer,
  FaLaptopCode,
  FaWordpress,
  FaDatabase,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Backend Development",
    icon: <FaServer />,
    description:
      "Build secure and scalable backend applications using modern PHP frameworks.",
    tags: ["PHP", "Laravel", "CodeIgniter"],
  },

  {
    id: 2,
    title: "Frontend Development",
    icon: <FaLaptopCode />,
    description:
      "Create responsive and interactive user interfaces with modern frontend technologies.",
    tags: ["React", "HTML", "CSS","Bootstrap", "JavaScript"],
  },

  {
    id: 3,
    title: "CMS & E-commerce",
    icon: <FaWordpress />,
    description:
      "Develop and customize WordPress and Shopify websites with custom features.",
    tags: ["WordPress", "Shopify", "WooCommerce"],
  },

  {
    id: 4,
    title: "Database & APIs",
    icon: <FaDatabase />,
    description:
      "Design databases and integrate REST APIs, payment gateways, and third-party services.",
    tags: ["MySQL", "REST API", "Git", "Payment Gateway"],
  },
];

export default services;