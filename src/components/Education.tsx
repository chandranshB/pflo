
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const educationData = [
    {
      year: "2024 - Present",
      degree: "Bachelor's in Computer Science",
      institution: "Doon University",
      description: "Currently pursuing a comprehensive Computer Science degree with focus on software development, algorithms, and modern web technologies."
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

        <div className="max-w-3xl mx-auto" ref={ref}>
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative pl-8 md:pl-0"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-gray-900 md:hidden"></div>
                <div className="p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-indigo-500 transition-colors">
                  <span className="text-indigo-400 font-semibold">{edu.year}</span>
                  <h3 className="text-xl font-bold my-2">{edu.degree}</h3>
                  <h4 className="text-lg text-gray-300 mb-3">{edu.institution}</h4>
                  <p className="text-gray-400">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
