'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, Linkedin, Github, FileText } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG, RECIPIENT_EMAIL } from '@/lib/emailjs.config'

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setStatusMessage('')

    try {
      // Check if EmailJS is configured
      if (
        EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' ||
        EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
        EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
      ) {
        throw new Error('EmailJS is not configured. Please set up your EmailJS credentials.')
      }

      // Initialize EmailJS
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)

      // Send email
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: RECIPIENT_EMAIL,
          reply_to: formData.email,
        }
      )

      if (result.text === 'OK') {
        setSubmitStatus('success')
        setStatusMessage('Message sent successfully! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
          setStatusMessage('')
        }, 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error: any) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      setStatusMessage(
        error.message || 
        'Failed to send message. Please try again or contact me directly via email.'
      )
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setStatusMessage('')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'balaramchowdary0703@gmail.com',
      link: 'mailto:balaramchowdary0703@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7842480703 / 7893961881',
      link: 'tel:+917842480703',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/lakshmi-bala-rama-krishna-jampani-414a27316',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View My Projects',
      link: 'https://github.com/Lakshmi-Bala-Rama-Krishna-Jampani',
    },
    {
      icon: FileText,
      label: 'Resume',
      value: 'Download Resume',
      link: 'https://drive.google.com/file/d/1FNWQzu2Dud_wU0ncjo9zi3c7gZOVvHnb/view?usp=sharing',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Palnadu District, Andhra Pradesh - 522403',
      link: null,
    },
  ]

  return (
    <section
      id="contact"
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900"
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
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-normal leading-relaxed">
            I&apos;m always open to discussing new opportunities, innovative projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="glass p-6 rounded-2xl backdrop-blur-sm"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-primary-600 to-purple-600 rounded-xl">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900 dark:text-white mb-1">
                      {info.label}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass p-10 rounded-2xl backdrop-blur-sm"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-8 font-display tracking-tight">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Status Message */}
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center space-x-2 ${
                    submitStatus === 'success'
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                      : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <p className="text-sm font-medium">{statusMessage}</p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 text-white rounded-lg font-semibold text-base flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transition-all"
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
              Or reach out directly via email or phone above
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

