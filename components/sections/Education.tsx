'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

const education = [
  {
    institution: 'Vellore Institute of Technology, Andhra Pradesh',
    location: 'Inavolu, Amaravati, AP',
    degree: 'B.Tech, Computer Science and Engineering',
    specialization: 'Specialization in Artificial Intelligence',
    period: '2020-2024',
    cgpa: '9.30',
    icon: GraduationCap,
  },
  {
    institution: 'Narayana Junior College',
    location: 'Guntur, AP',
    degree: 'Board of Intermediate Education, Andhra Pradesh',
    period: '2018-2020',
    cgpa: '9.88',
    icon: BookOpen,
  },
  {
    institution: 'Holy Family English Medium School',
    location: 'Sattenapalli, AP',
    degree: 'Board of Secondary Education, Andhra Pradesh (BSEAP)',
    period: '2017-2018',
    cgpa: '9.8',
    icon: Award,
  },
]

const leadership = [
  {
    title: 'WIOS Club (VIT-AP)',
    role: 'Associate of Public Relations',
    description: 'Managed social media, public relations, organized events',
  },
  {
    title: 'CodeChef Club (VIT-AP)',
    role: 'Member',
    description: 'Active participation in competitive programming',
  },
]

const communityService = [
  {
    title: 'Scout Volunteer',
    event: 'Krishna Pushkaralu, AP',
    description: 'Participated in social service initiatives, certified by Governor & Chief Minister for exemplary contribution',
  },
]

export function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="education"
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-gray-950 dark:via-gray-900/50 dark:to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-display tracking-tight">
            <span className="gradient-text">Education & Achievements</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Academic excellence and continuous growth
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-8 md:space-y-10 mb-12 md:mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-6 rounded-2xl backdrop-blur-sm"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-primary-600 to-purple-600 rounded-xl">
                  <edu.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 font-display tracking-tight">
                    {edu.institution}
                  </h3>
                  <p className="text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 dark:from-primary-400 dark:via-purple-400 dark:to-pink-400 font-semibold mb-2">
                    {edu.degree}
                  </p>
                  {edu.specialization && (
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {edu.specialization}
                    </p>
                  )}
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-2">
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.period}</span>
                  </div>
                  <div className="mt-3">
                    <span className="px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full text-sm font-semibold">
                      CGPA: {edu.cgpa}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership & Engagement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-8 text-gray-900 dark:text-white font-display tracking-tight">
            Leadership & Engagement
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="glass p-6 rounded-xl backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-primary-600 dark:text-primary-400 font-normal mb-2">
                  {item.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Service */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-8 text-gray-900 dark:text-white font-display tracking-tight">
            Community Service
          </h3>
          <div className="glass p-6 rounded-xl backdrop-blur-sm">
            {communityService.map((service, index) => (
              <div key={index}>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-primary-600 dark:text-primary-400 font-normal mb-2">
                  {service.event}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

