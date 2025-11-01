import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const educationData = [
    {
      year: "2020 - 2022",
      degree: "Master's in Computer Science",
      institution: "Stanford University",
      description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on neural network optimization."
    },
    {
      year: "2016 - 2020",
      degree: "Bachelor's in Software Engineering",
      institution: "MIT",
      description: "Graduated with honors. Focused on web technologies and distributed systems."
    },
    {
      year: "2014 - 2016",
      degree: "Associate's in Computer Programming",
      institution: "Local Community College",
      description: "Foundation in programming principles and data structures."
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="relative" ref={ref}>
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
          
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`mb-12 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="md:w-1/2 mb-4 md:mb-0">
                <div className={`p-6 rounded-xl bg-gray-800 border border-gray-700 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <span className="text-indigo-400 font-semibold">{edu.year}</span>
                  <h3 className="text-xl font-bold my-2">{edu.degree}</h3>
                  <h4 className="text-lg text-gray-300 mb-3">{edu.institution}</h4>
                  <p className="text-gray-400">{edu.description}</p>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-indigo-500 border-4 border-gray-900 z-10"></div>
              
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
