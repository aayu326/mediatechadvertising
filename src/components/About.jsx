import { ArrowRight, Layers, Rocket, Handshake, LineChart } from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: Layers,
    title: 'One point of contact',
    text: 'Website, marketing and creative handled by the same team.'
  },
  {
    icon: Rocket,
    title: 'Built to launch',
    text: 'Projects scoped so they actually go live, not stall halfway.'
  },
  {
    icon: LineChart,
    title: 'Measured, not guessed',
    text: 'Analytics and Search Console set up from day one.'
  },
  {
    icon: Handshake,
    title: 'Straight answers',
    text: 'Clear scope, clear timelines and no jargon in between.'
  }
]

const scrollToContact = (event) => {
  event.preventDefault()
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about__grid">
        <div className="about__body" data-reveal>
          <span className="eyebrow">About MediaTech</span>
          <h2>One Team. Every Digital Need.</h2>
          <p style={{ marginTop: '22px' }}>
            MediaTech Advertising helps businesses build, launch and grow their digital
            presence through technology, marketing and creative solutions.
          </p>
          <p>
            Whether you need a professional website, stronger search visibility, social media
            management, paid advertising or a complete digital presence, we bring the required
            skills together in one place.
          </p>

          <div className="btn-row">
            <a href="#contact" className="btn btn--ghost" onClick={scrollToContact}>
              More About MediaTech <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="about__cards" data-reveal style={{ '--reveal-delay': '120ms' }}>
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <article className="about__card" key={title}>
              <Icon size={22} strokeWidth={1.7} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
