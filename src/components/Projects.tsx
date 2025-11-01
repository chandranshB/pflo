import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: "Seeta Narayan Travels",
      description: "Designed and built a sleek, user-friendly website for a travel agency offering bus ticket bookings and tour services, emphasizing mobile responsiveness and intuitive navigation.",
      image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      technologies: ["React", "Vite", "Tailwind CSS", "Node.js"],
      link: "https://seetanarayantravels.in"
    },
    {
      title: "Spectra GeoSolutions LLP",
      description: "Developed a responsive corporate website for a geospatial technology firm specializing in LiDAR, UAV mapping, and 3D scanning. Focused on professional design, clarity, and lead generation.",
      image: "https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      technologies: ["React", "Vite", "Tailwind CSS", "Node.js"],
      link: "https://spectrageosolutions.com"
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
