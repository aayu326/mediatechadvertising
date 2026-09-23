import { useEffect } from 'react'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Services from './components/Services.jsx'
import TechMarquee from './components/TechMarquee.jsx'
import About from './components/About.jsx'
import WhyUs from './components/WhyUs.jsx'
import Process from './components/Process.jsx'
import Portfolio from './components/Portfolio.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import CTA from './components/CTA.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingActions from './components/FloatingActions.jsx'

/**
 * One IntersectionObserver handles every fade-up on the page.
 * Any element with `data-reveal` gets `.is-visible` when it scrolls into view.
 * Add `style={{ '--reveal-delay': '80ms' }}` to stagger a group.
 */
function useScrollReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <TechMarquee />
        <About />
        <WhyUs />
        <Process />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
