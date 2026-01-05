'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { containerVariants, itemVariants } from '@/lib/animations'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'SQL', 'Python', 'Java (Basics)'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Frontend',
    skills: ['Angular', 'React', 'Tailwind CSS', 'Angular Material', 'fxFlexLayout'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'Express.js'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'SQLite', 'SQL'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Concepts',
    skills: ['OOPs', 'Data Structures & Algorithms'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'AI/ML',
    skills: ['LLM Integration', 'Google Gemini AI', 'Multimodal AI', 'NLP', 'Image Processing', 'Predictive Modeling', 'Data Analysis Algorithms'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'AI/ML Tools',
    skills: ['Streamlit', 'Google Generative AI', 'PIL', 'Regex'],
    color: 'from-rose-500 to-pink-500',
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'AWS'],
    color: 'from-teal-500 to-cyan-500',
  },
]

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="skills"
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
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
              <span className="gradient-text">Technical Skills</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 mx-auto mb-8 rounded-full shadow-lg"></div>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
              Technologies and tools I use to build exceptional software
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-6 md:p-8 rounded-2xl backdrop-blur-sm"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <h3 className={`text-base md:text-lg font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent font-display`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                      className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium shadow-md border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
                      whileHover={{ scale: 1.05, y: -1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

