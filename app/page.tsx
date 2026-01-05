'use client'

import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Education } from '@/components/sections/Education'
import { Contact } from '@/components/sections/Contact'
import { ScrollToTop } from '@/components/ScrollToTop'
import { SectionDivider } from '@/components/SectionDivider'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <ScrollToTop />
    </main>
  )
}

