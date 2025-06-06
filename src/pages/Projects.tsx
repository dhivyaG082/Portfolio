import { motion } from "framer-motion";
import { useState } from "react";
import ParticleBackground from "../components/ParticleBackground";
import GradientBlur from "../components/GradientBlur";
import AnimatedPage from "../components/AnimatedPage";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Recipe Blog Application",
      category: "web",
      image: "https://via.placeholder.com/600x400/0f172a/f8fafc?text=Recipe+Blog",
      technologies: ["Node.js", "Express.js", "MongoDB"],
      description: "A backend application for managing recipes with CRUD operations and MongoDB database integration."
    },
    {
      id: 2,
      title: "Portfolio Project",
      category: "web",
      image: "https://via.placeholder.com/600x400/0f172a/f8fafc?text=Portfolio",
      technologies: ["HTML", "CSS", "JavaScript"],
      description: "A personal portfolio website showcasing projects, skills, and achievements."
    },
    {
      id: 3,
      title: "Automatic Car Parking System",
      category: "iot",
      image: "https://via.placeholder.com/600x400/0f172a/f8fafc?text=Car+Parking",
      technologies: ["ESP32", "Arduino", "IoT"],
      description: "An IoT-based car parking system with ultrasonic sensors and real-time monitoring through a mobile app."
    },
    {
      id: 4,
      title: "AI Content Generator",
      category: "web",
      image: "https://via.placeholder.com/600x400/0f172a/f8fafc?text=AI+Generator",
      technologies: ["Next.js", "OpenAI API", "TailwindCSS"],
      description: "An AI-powered content generation tool for marketers and writers."
    },
    {
      id: 5,
      title: "Social Media Analytics",
      category: "ui",
      image: "https://via.placeholder.com/600x400/0f172a/f8fafc?text=Social+Analytics",
      technologies: ["Vue.js", "D3.js", "Firebase"],
      description: "A comprehensive analytics platform for social media performance tracking."
    },
    {
      id: 6,
      title: "Fitness Tracker",
      category: "mobile",
      image: "https://via.placeholder.com/600x400/0f172a/f8fafc?text=Fitness+App",
      technologies: ["Flutter", "GraphQL", "MongoDB"],
      description: "A fitness tracking application with personalized workout plans and progress analytics."
    }
  ];

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Development" },
    { value: "iot", label: "IoT Projects" }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <AnimatedPage>
      <section className="fullpage-section bg-background py-20">
        <ParticleBackground />
        <GradientBlur color1="#ff00c3" color2="#00f0ff" positionClass="top-20 right-20" />
        <GradientBlur color1="#b400ff" color2="#00f0ff" positionClass="bottom-20 left-20" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gradient text-3xl md:text-4xl lg:text-5xl font-bold mb-4">My Projects</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore my latest work and creative projects. Each project represents a unique challenge and solution.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-4"></div>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.value
                    ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white"
                    : "bg-muted text-gray-300 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group bg-glass rounded-xl overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gradient">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-muted text-neon-blue"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="text-neon-blue hover:text-neon-purple transition-colors">
                      View Details
                    </button>
                    <span className="text-gray-500 text-sm capitalize">{project.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Projects;
