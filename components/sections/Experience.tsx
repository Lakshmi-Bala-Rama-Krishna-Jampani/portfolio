'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, TrendingUp, Code, Users, Database } from 'lucide-react'

const experiences = [
  {
    company: 'Attina.ai (formerly QEST) - Deetail Technologies Private Limited',
    location: 'Bengaluru, Karnataka',
    position: 'Software Engineer 1 | Founding Team Member',
    period: 'August 2024 – Present',
    icon: Code,
    achievements: [
      {
        title: 'Built SaaS Platform from Scratch',
        description: 'Developed complete platform covering frontend (Angular, React, TypeScript, Tailwind CSS) and backend (Node.js, NestJS, Express.js, PostgreSQL, MongoDB)',
        impact: 'Foundation for scalable business growth',
      },
      {
        title: 'Leads & Clients Management',
        description: 'Automated onboarding system',
        impact: 'Improved efficiency by 40%',
      },
      {
        title: 'Team & Role Management',
        description: 'Secure role-based access control',
        impact: 'Reduced errors by 30%',
      },
      {
        title: 'Services, Courses & Classes Flow',
        description: 'Service creation, scheduling, group pricing, tiered pricing, and promo codes',
        impact: 'Increased adoption by 25%',
      },
      {
        title: 'Payments, Invoices & Refunds',
        description: 'Integrated payment gateways with automated billing',
        impact: 'Cut errors by 35%',
      },
      {
        title: 'Calendar, Profiles & Business Settings',
        description: 'Streamlined scheduling and personalization',
        impact: 'Improved usability by 20%',
      },
      {
        title: 'Marketing & Promotions',
        description: 'Built campaigns and discount features',
        impact: 'Boosted engagement by 30%',
      },
      {
        title: 'Website Builder for Businesses',
        description: 'Enabled clients to launch websites in <15 minutes',
        impact: 'Reduced go-to-market time by 70%',
      },
      {
        title: 'Team Leadership',
        description: 'Hired, guided, and mentored engineers and interns, conducting campus recruitment at PES University, MIT Bangalore, and other top universities',
        impact: 'Built strong engineering team',
      },
      {
        title: 'Product Architecture',
        description: 'Contributed to flow enhancements and scalability',
        impact: 'Reduced API response times by ~40%',
      },
      {
        title: 'Product Launch',
        description: 'Successfully launched first version to 2 clients',
        impact: 'Actively using the platform',
      },
    ],
  },
  {
    company: 'Heaps Health Solutions India Private Limited',
    location: 'Indiranagar, Bengaluru, Karnataka',
    position: 'Data Science Intern',
    period: 'June 2024 – August 2024',
    icon: TrendingUp,
    achievements: [
      {
        title: 'Hospital Readmissions Analysis',
        description: 'Analyzed readmissions for Medanta hospitals',
        impact: 'Improved readmission tracking accuracy by 25%',
      },
      {
        title: 'Data Processing',
        description: 'Used Python (Pandas, NumPy) for data cleaning, preprocessing, and exploration',
        impact: 'Reduced data processing time by 30%',
      },
      {
        title: 'Actionable Insights',
        description: 'Delivered insights for hospital management',
        impact: 'Improved patient retention by 15%',
      },
    ],
  },
  {
    company: 'Heaps Health Solutions India Private Limited',
    location: 'Indiranagar, Bengaluru, Karnataka',
    position: 'Full Stack Developer Intern',
    period: 'January 2024 – June 2024',
    icon: Database,
    achievements: [
      {
        title: 'Heaps Campaign Connect Portal',
        description: 'Developed Angular + Node.js + PostgreSQL portal, integrated WhatsApp and email outreach',
        impact: 'Increased patient engagement by 35%',
      },
      {
        title: 'Language Translation Portal',
        description: 'Built dynamic language dashboard with Angular and PostgreSQL, enabling CRUD operations',
        impact: 'Improved backend efficiency by 25%',
      },
    ],
  },
]

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="experience"
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900"
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
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Building impactful solutions and driving innovation at scale
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={expIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: expIndex * 0.2 }}
              className="relative"
            >
              <div className="glass p-8 rounded-3xl backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 md:mb-0">
                    <div className="p-3 bg-gradient-to-br from-primary-600 to-purple-600 rounded-xl">
                      <exp.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 font-display tracking-tight">
                        {exp.position}
                      </h3>
                      <p className="text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 dark:from-primary-400 dark:via-purple-400 dark:to-pink-400 font-semibold mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 font-medium">
                        <span className="flex items-center gap-2">
                          <MapPin size={18} />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar size={18} />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: (expIndex * 0.2) + (achIndex * 0.1) }}
                      className="p-4 bg-white/50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700"
                    >
                      <h4 className="font-semibold text-base text-gray-900 dark:text-white mb-2 font-display">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                        {achievement.description}
                      </p>
                      <div className="flex items-center gap-2 mt-3">
                        <TrendingUp size={16} className="text-green-600 dark:text-green-400" />
                        <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                          {achievement.impact}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

