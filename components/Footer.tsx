'use client'

import { Github, Linkedin, Mail, Phone, MapPin, Code, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-black text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                Balaram
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Dedicated Software Engineer building innovative SaaS platforms from scratch and driving business growth through exceptional engineering.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Rocket size={16} />
              <span>Building the future, one line of code at a time</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Education', href: '#education' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-0 h-0.5 bg-primary-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={18} />
                <a href="mailto:balaramchowdary0703@gmail.com" className="hover:text-white transition-colors">
                  balaramchowdary0703@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={18} />
                <span>+91 7842480703 / 7893961881</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin size={18} />
                <span>Palnadu District, Andhra Pradesh - 522403</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Lakshmi Bala Rama Krishna Jampani
            </p>
          </div>
          <div className="flex space-x-4">
            <motion.a
              href="mailto:balaramchowdary0703@gmail.com"
              className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg text-gray-400 hover:text-white transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Email"
            >
              <Mail size={20} />
            </motion.a>
            <motion.a
              href="tel:+917842480703"
              className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg text-gray-400 hover:text-white transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Phone"
            >
              <Phone size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/lakshmi-bala-rama-krishna-jampani-414a27316"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-blue-600 rounded-lg text-gray-400 hover:text-white transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="https://github.com/Lakshmi-Bala-Rama-Krishna-Jampani"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-gray-600 rounded-lg text-gray-400 hover:text-white transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}

