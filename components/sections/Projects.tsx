'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Globe, Code2 } from 'lucide-react'
import { containerVariants, itemVariants } from '@/lib/animations'

const projects = [
  {
    title: 'Nutritionist Generative AI Doctor',
    description: 'Intelligent nutrition analysis application using Google Gemini 2.5 Flash multimodal AI to analyze food images and provide comprehensive nutritional breakdowns, calorie estimates, and personalized health assessments.',
    tech: ['Python', 'Google Gemini AI', 'Streamlit', 'Multimodal AI', 'Image Processing'],
    icon: Code2,
  },
  {
    title: 'Text-to-SQL LLM Application',
    description: 'Production-ready natural language to SQL converter leveraging Google Gemini LLM to translate user questions into executable SQL queries with robust error handling, query validation, and dynamic result visualization.',
    tech: ['Python', 'Google Gemini AI', 'SQLite', 'Streamlit', 'NLP', 'LLM'],
    icon: Code2,
  },
  {
    title: 'Heaps.ai Website Development',
    description: 'Built responsive company website using HTML, CSS with modern design principles and optimal user experience.',
    tech: ['HTML', 'CSS', 'Responsive Design'],
    icon: Globe,
  },
]

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="projects"
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-display tracking-tight">
              <span className="gradient-text">Projects & Learning</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 mx-auto mb-8 rounded-full shadow-lg"></div>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
              Showcasing my personal projects and continuous learning journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-6 md:p-8 rounded-2xl backdrop-blur-sm group transition-all duration-300"
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="mb-5">
                  <div className="p-4 bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 rounded-xl w-fit mb-5 shadow-lg">
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-3 font-display">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 mb-5 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-xs font-medium shadow-sm border border-primary-200 dark:border-primary-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 md:mt-16 text-center"
          >
            <div className="glass p-6 md:p-8 rounded-2xl max-w-3xl mx-auto">
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3 font-normal">
                Note: Most of my recent work is proprietary and part of the SaaS platform I built at Attina.ai (formerly QEST).
              </p>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                For more details about my work, please reach out via the contact section.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

