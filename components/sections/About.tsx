'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Zap, TrendingUp, Users } from 'lucide-react'

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const highlights = [
    {
      icon: Target,
      title: 'Impact-Driven',
      description: 'Built SaaS platforms from scratch, improving efficiency by 40%',
    },
    {
      icon: Zap,
      title: 'Full Stack Expert',
      description: 'Frontend (Angular, React) & Backend (Node.js, NestJS, PostgreSQL)',
    },
    {
      icon: TrendingUp,
      title: 'Product Ownership',
      description: 'End-to-end product flows and scalable architectures',
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Hiring, mentoring engineers, and campus recruitment',
    },
  ]

  return (
    <section
      id="about"
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950"
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
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 mx-auto mb-8 rounded-full shadow-lg"></div>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
              Get to know more about my journey, expertise, and passion for building exceptional software
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 dark:text-white font-display tracking-tight text-center">
              Dedicated Software Engineer
            </h3>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed font-normal">
              I&apos;m a dedicated and impact-driven Software Engineer with proven experience in building 
              SaaS platforms from scratch as part of a founding team. My expertise spans both frontend 
              and backend development, with a strong focus on creating scalable, efficient solutions.
            </p>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed font-normal">
              I specialize in frontend technologies like Angular, React, TypeScript, and Tailwind CSS, 
              as well as backend frameworks including Node.js, NestJS, and Express.js. My database 
              expertise includes PostgreSQL and MongoDB. I also work with DevOps and cloud tools 
              including Docker, Git, and AWS for containerization, version control, and cloud infrastructure.
            </p>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
              Beyond coding, I&apos;m actively involved in hiring, guiding, and mentoring engineers and 
              interns, including campus recruitment from top universities like PES University and MIT 
              Bangalore. I&apos;m eager to leverage my technical expertise, product ownership, and leadership 
              mindset to drive innovation and business growth.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 md:mb-16"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-2xl backdrop-blur-sm"
                whileHover={{ scale: 1.02, y: -2 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <highlight.icon className="w-10 h-10 mb-4 text-primary-600 dark:text-primary-400" />
                <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                  {highlight.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

