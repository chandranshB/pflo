import React from 'react'
import { motion } from 'framer-motion'
import { Code } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="flex items-center space-x-2 mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            <Code className="text-indigo-400" size={24} />
            <span className="text-lg font-bold">DevPortfolio</span>
          </motion.div>
          
          <motion.p 
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            © {new Date().getFullYear()} Chandransh Binjola. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-500 text-sm">
              Crafted with <span className="text-red-500">❤</span> and React
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
