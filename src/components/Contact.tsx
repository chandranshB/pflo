import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto text-center">
          <motion.p 
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            I'm actively seeking freelance opportunities and exciting projects.
            Whether you need a website, have a project in mind, or just want to connect, I'd love to hear from you!
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="mailto:chandranshbinjola@outlook.com"
              className="flex items-center justify-center bg-gray-800 hover:bg-indigo-600 text-white px-6 py-4 rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="mr-2" size={20} />
              Email Me
            </motion.a>
            <motion.a
              href="https://github.com/chandranshB"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gray-800 hover:bg-indigo-600 text-white px-6 py-4 rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="mr-2" size={20} />
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/chandranshbinjola"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gray-800 hover:bg-indigo-600 text-white px-6 py-4 rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </motion.a>
          </motion.div>

          <motion.div 
            className="border-t border-gray-700 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-gray-400">
              Based in India • Available for remote work worldwide
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
