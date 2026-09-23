import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  Code2,
  TrendingUp,
  Search,
  Bot,
  Megaphone,
  Sparkles
} from 'lucide-react'

// The word that rotates inside the headline: "We Build Brands That Get ___"
const HEADLINE_WORDS = ['Noticed.', 'Trusted.', 'Chosen.']

// Cards that cycle through the hero visual, front to back, like a rotating stack.
const STACK_CARDS = [
  {
    title: 'Website Development',
    text: 'Fast, modern websites built to convert visitors.',
    image: '/IMAGES/web-development.jpg'
  },
  {
    title: 'Digital Marketing',
    text: 'Performance campaigns designed for growth.',
    image: '/IMAGES/digital-marketing.jpg'
  },
  {
    title: 'SEO',
    text: 'Build organic visibility and long-term traffic.',
    image: '/IMAGES/seo.jpg'
  },
  {
    title: 'AI & Automation',
    text: 'Smart systems that save time and scale your business.',
    image: '/IMAGES/ai-automation.jpg'
  }
]

const TRUST = ['Web Development', 'Digital Marketing', 'SEO', 'Branding', 'Advertising']

const scrollTo = (event, id) => {
  event.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/** Cycles through `words` every `interval` ms, pausing under reduced-motion. */
function useRotatingWord(words, interval = 2600) {
  const [index, setIndex] = useState(0)
  const [changing, setChanging] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const timer = setInterval(() => {
      setChanging(true)
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length)
        setChanging(false)
      }, 260)
    }, interval)

    return () => clearInterval(timer)
  }, [words, interval])

  return { word: words[index], changing }
}

/** Rotates the front-of-stack card index every `interval` ms. */
function useCardStack(count, interval = 3200) {
  const [active, setActive] = useState(0)
  const reduceRef = useRef(false)

  useEffect(() => {
    reduceRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceRef.current) return

    const timer = setInterval(() => {
      setActive((i) => (i + 1) % count)
    }, interval)

    return () => clearInterval(timer)
  }, [count, interval])

  return active
}

export default function Hero() {
  const { word, changing } = useRotatingWord(HEADLINE_WORDS)
  const active = useCardStack(STACK_CARDS.length)

  return (
    <section className="hero" id="home">
      <span className="glow hero__glow-a" aria-hidden="true" />
      <span className="glow hero__glow-b" aria-hidden="true" />

      <div className="container hero__grid">
        <div>
          <span className="hero__label reveal-up" style={{ '--d': '60ms' }}>
            <span className="dot" aria-hidden="true" />
            Your Digital Companion
          </span>

          <h1 className="reveal-up" style={{ '--d': '160ms' }}>
            We Build Brands That Get{' '}
            <span className={`hero__rotating${changing ? ' is-changing' : ''}`}>{word}</span>
          </h1>

          <p className="hero__desc reveal-up" style={{ '--d': '260ms' }}>
            MediaTech Advertising combines technology, creativity and digital marketing to
            help businesses build a stronger online presence and generate meaningful growth.
          </p>

          <div className="btn-row reveal-up" style={{ '--d': '360ms' }}>
            <a
              href="#contact"
              className="btn btn--primary"
              onClick={(e) => scrollTo(e, 'contact')}
            >
              Get a Free Consultation <ArrowRight size={17} />
            </a>
            <a href="#work" className="btn btn--ghost" onClick={(e) => scrollTo(e, 'work')}>
              View Our Work
            </a>
          </div>

          <div className="hero__stats reveal-up" style={{ '--d': '430ms' }}>
  <div className="hero__stat">
    <strong>100+</strong>
    <span>Projects Delivered</span>
  </div>

  <div className="hero__stat">
    <strong>90%</strong>
    <span>Client Retention</span>
  </div>

  <div className="hero__stat">
    <strong>50+</strong>
    <span>Businesses Served</span>
  </div>

  <div className="hero__stat">
    <strong>5y</strong>
    <span>Of Experience</span>
  </div>
</div>

          <div className="hero__trust reveal-up" style={{ '--d': '460ms' }}>
            {TRUST.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

<div className="hero__visual reveal-up" style={{ '--d': '420ms' }}>
  <div className="stack" role="group" aria-label="Our services, cycling">
    {STACK_CARDS.map((card, i) => {
      const count = STACK_CARDS.length
      const offset = (i - active + count) % count

      let position = 'stack__back'

      if (offset === 0) {
        position = 'stack__front'
      } else if (offset === 1) {
        position = 'stack__right'
      } else if (offset === count - 1) {
        position = 'stack__left'
      }

      return (
        <article
          key={card.title}
          className={`stack__card ${position}`}
          aria-hidden={offset !== 0}
        >
          <img
            src={card.image}
            alt=""
            className="stack__image"
          />

          <div className="stack__overlay" />

          <div className="stack__content">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        </article>
      )
    })}
  </div>

  <div className="chip-float chip-float--a">
    <Sparkles size={16} />
    AI &amp; Automation
  </div>

  <div className="chip-float chip-float--b">
    <Megaphone size={16} />
    Google &amp; Meta Ads
  </div>
</div>
      </div>
    </section>
  )
}