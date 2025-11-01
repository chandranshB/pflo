import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate full-stack developer with expertise in creating modern web applications. 
              With a strong foundation in both frontend and backend technologies, I bring ideas to life 
              through clean, efficient code and intuitive user experiences.
            </p>
            <p className="text-gray-300 mb-6">
              My journey in tech began 5 years ago, and since then I've worked with startups and 
              established companies to deliver high-quality digital solutions. I specialize in 
              JavaScript ecosystems, cloud technologies, and modern development practices.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div 
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { value: '50+', label: 'Projects Completed' },
              { value: '5+', label: 'Years Experience' },
              { value: '30+', label: 'Happy Clients' },
              { value: '15+', label: 'Technologies' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800 p-6 rounded-xl text-center border border-gray-700 hover:border-indigo-500 transition-colors"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl font-bold text-indigo-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
