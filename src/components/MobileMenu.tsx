import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, Linkedin, Mail } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  closeMenu: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, closeMenu }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />
          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 rounded-t-2xl z-50 md:hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Menu</h3>
                <button 
                  onClick={closeMenu}
                  className="p-2 rounded-full hover:bg-gray-800"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              <nav className="space-y-4 mb-8">
                {['Home', 'About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-3 text-lg hover:text-indigo-400 transition-colors"
                    onClick={closeMenu}
                  >
                    {item}
                  </a>
                ))}
              </nav>
              
              <div className="flex justify-center space-x-6 pt-4 border-t border-gray-800">
                <a
                  href="mailto:chandranshbinjola@outlook.com"
                  className="p-3 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://github.com/chandranshB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/chandranshbinjola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-indigo-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
