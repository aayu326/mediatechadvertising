import { ArrowRight, MessageCircle } from 'lucide-react'
import { SITE } from '../site.js'

const scrollToContact = (event) => {
  event.preventDefault()
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function CTA() {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="cta__box" data-reveal>
          <span className="glow cta__glow" aria-hidden="true" />
          <h2>Have a Project in Mind? Let&apos;s Build It.</h2>
          <p>
            Tell us what you&apos;re trying to build, promote or improve. We&apos;ll help you
            figure out the right digital solution.
          </p>
          <div className="btn-row">
            <a href="#contact" className="btn btn--primary" onClick={scrollToContact}>
              Start a Conversation <ArrowRight size={17} />
            </a>
            <a
              href={SITE.whatsapp}
              className="btn btn--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
