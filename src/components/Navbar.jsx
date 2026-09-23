import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { SITE } from '../site.js'

const LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Our Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  // Navbar background after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently in view
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (event, id) => {
    event.preventDefault()
    setOpen(false)
    const target = document.getElementById(id)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
        <nav className="container nav__inner" aria-label="Main navigation">
<a href="#home" className="brand" onClick={(e) => go(e, 'home')}>
  <img
    src="/mediatech-logo.png"
    alt="MediaTech Advertising"
    className="brand__logo"
  />
</a>
          <ul className="nav__links">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav__link${active === link.id ? ' is-active' : ''}`}
                  onClick={(e) => go(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="btn btn--primary btn--sm nav__cta"
            onClick={(e) => go(e, 'contact')}
          >
            Let&apos;s Talk <ArrowRight size={16} />
          </a>

          <button
            type="button"
            className="nav__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <div className={`nav__mobile${open ? ' is-open' : ''}`}>
        {LINKS.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={(e) => go(e, link.id)}>
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn--primary"
          onClick={(e) => go(e, 'contact')}
        >
          Let&apos;s Talk <ArrowRight size={16} />
        </a>
      </div>
    </>
  )
}
