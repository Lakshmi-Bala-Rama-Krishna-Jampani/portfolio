'use client'

import { motion } from 'framer-motion'
import { Download, ArrowDown, Code, Rocket, Users, FileText } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { containerVariants, itemVariants } from '@/lib/animations'
import Image from 'next/image'

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  })

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-20"
    >
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-purple-200 dark:bg-purple-950 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-10 animate-float"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-64 h-64 bg-blue-200 dark:bg-blue-950 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-10 animate-float"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-64 h-64 bg-pink-200 dark:bg-pink-950 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-10 animate-float"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-16 lg:py-18">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-0 items-center"
        >
          {/* Left Side - Profile Picture and Badge */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <motion.div 
              className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary-300/50 dark:ring-primary-700/50 mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/balaram-pic.jpeg"
                alt="Balaram Jampani"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-transparent to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.span
                className="inline-block px-6 py-3 bg-gradient-to-r from-primary-100 via-purple-100 to-pink-100 dark:from-primary-900/80 dark:via-purple-900/80 dark:to-pink-900/80 text-primary-800 dark:text-primary-100 rounded-full text-sm font-semibold shadow-xl border border-primary-300/50 dark:border-primary-700/50 backdrop-blur-md"
                whileHover={{ scale: 1.02, y: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Software Engineer | Founding Team Member
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Right Side - Text Content and Buttons */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6 leading-[1.5] font-display tracking-tight"
            >
              <span className="block text-gray-900 dark:text-white mb-1">
                Hi, I'm
              </span>
              <span className="block gradient-text overflow-visible whitespace-nowrap">
                Lakshmi Bala Rama Krishna Jampani
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-normal"
            >
              Dedicated and impact-driven Software Engineer with proven experience in building{' '}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 dark:from-primary-400 dark:via-purple-400 dark:to-pink-400">
                SaaS platforms from scratch
              </span>
              . Expert in full-stack development and product architecture.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <motion.a
                href="#contact"
                className="group px-6 py-3 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 text-white rounded-full font-medium text-base shadow-xl hover:shadow-2xl transition-all relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get In Touch</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md text-gray-900 dark:text-white rounded-full font-medium text-base shadow-lg hover:shadow-xl transition-all border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-primary-400 dark:hover:border-primary-500"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1FNWQzu2Dud_wU0ncjo9zi3c7gZOVvHnb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md text-gray-900 dark:text-white rounded-full font-medium text-base shadow-lg hover:shadow-xl transition-all border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-primary-400 dark:hover:border-primary-500 flex items-center gap-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileText size={18} />
                Resume
              </motion.a>
            </motion.div>
          </motion.div>

        </motion.div>

        {/* Stats Section - Full Width Below */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 md:mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
          >
            {[
              { icon: Code, label: 'Full Stack', value: 'Expert' },
              { icon: Rocket, label: 'SaaS Platforms', value: 'Built from Scratch' },
              { icon: Users, label: 'Team Leadership', value: 'Mentoring' },
              { icon: Code, label: 'Experience', value: '2+ Years' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-2xl backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 100 }}
              >
                <div className="mb-3">
                  <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-normal">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

