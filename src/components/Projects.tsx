import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
    title: "Seeta Narayan Travels",
    description: "Engineered a full-stack digital platform for Seeta Narayan Travels, featuring a high-performance booking engine and a dynamic tour management system. This robust, type-safe application was built from the ground up on a modern React, TypeScript, and Supabase stack to ensure scalability and a seamless user experience.",
    image: "../../snt.webp",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "React Query", "React Hook Form", "Zod", "shadcn/ui", "Framer Motion", "Swiper", "Lucide React", "Node.js"],
    link: "https://seetanarayantravels.in"
  },
    {
      title: "Spectra GeoSolutions LLP",
      description: "Developed a responsive corporate website for a geospatial technology firm specializing in LiDAR, UAV mapping, and 3D scanning. Focused on professional design, clarity, and lead generation.",
      image: "../../spectra.webp",
      technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "JQuery", "PHPmailer", "Swiper.js", "HTML5/CSS3", "Composer", "Material Design Bootstrap"],
      link: "https://spectrageosolutions.com"
    },    {
      title: "Other Private Projects",
      description: "Developed a responsive corporate website for a geospatial technology firm specializing in LiDAR, UAV mapping, and 3D scanning. Focused on professional design, clarity, and lead generation.",
      image: "https://images.unsplash.com/photo-1503792070985-b4147d061915?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2023",
      technologies: [],
      link: ""
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  className="inline-block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
