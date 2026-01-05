import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lakshmi Bala Rama Krishna Jampani | Software Engineer | Founding Team Member',
  description: 'Dedicated and impact-driven Software Engineer with proven experience in building SaaS platforms from scratch. Expert in frontend (Angular, React, TypeScript) and backend (Node.js, NestJS, PostgreSQL, MongoDB). Building scalable solutions and leading engineering teams.',
  keywords: 'Software Engineer, Full Stack Developer, SaaS, React, Angular, Node.js, TypeScript, NestJS, PostgreSQL, MongoDB, Founding Team, Product Architecture, Team Leadership',
  authors: [{ name: 'Lakshmi Bala Rama Krishna Jampani' }],
  creator: 'Lakshmi Bala Rama Krishna Jampani',
  publisher: 'Lakshmi Bala Rama Krishna Jampani',
  robots: 'index, follow',
  openGraph: {
    title: 'Lakshmi Bala Rama Krishna Jampani | Software Engineer',
    description: 'Dedicated and impact-driven Software Engineer with proven experience in building SaaS platforms from scratch. Expert in full-stack development and product architecture.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Balaram Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakshmi Bala Rama Krishna Jampani | Software Engineer',
    description: 'Dedicated Software Engineer building SaaS platforms from scratch',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0ea5e9' },
    { media: '(prefers-color-scheme: dark)', color: '#1e293b' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

