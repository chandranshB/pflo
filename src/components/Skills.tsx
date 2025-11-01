import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Smartphone, 
  Cloud, 
  Palette, 
  Zap 
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Palette className="text-indigo-400" size={24} />,
      skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "SASS", "Webpack"]
    },
    {
      title: "Backend Development",
      icon: <Code className="text-indigo-400" size={24} />,
      skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"]
    },
    {
      title: "Database",
      icon: <Database className="text-indigo-400" size={24} />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Prisma"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-indigo-400" size={24} />,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Vercel", "Netlify"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="text-indigo-400" size={24} />,
      skills: ["React Native", "Flutter", "iOS", "Android", "PWA", "Ionic"]
    },
    {
      title: "Other Tools",
      icon: <Zap className="text-indigo-400" size={24} />,
      skills: ["Git", "Jest", "Cypress", "Figma", "Jira", "Agile"]
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 p-2 bg-gray-700 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-indigo-600 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
