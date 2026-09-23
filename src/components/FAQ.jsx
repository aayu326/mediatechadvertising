import { useState } from 'react'
import { Plus, ArrowRight } from 'lucide-react'

const FAQS = [
  {
    q: 'How much does a website cost?',
    a: 'It depends on the number of pages, the features you need and whether the content and visuals are ready. A simple business or landing page site costs far less than a custom platform with integrations. Share what you have in mind and we will give you a written estimate before any work starts.'
  },
  {
    q: 'How long does a website take?',
    a: 'A straightforward business website usually takes a few weeks from kickoff to launch. Larger or custom builds take longer. The biggest factor is how quickly content, images and approvals come back from your side, so we agree on a timeline together at the planning stage.'
  },
  {
    q: 'Do you provide SEO?',
    a: 'Yes. That covers on-page work, site structure, technical fixes, page speed, Google Analytics and Search Console setup, and ongoing content and optimisation. SEO is a continuing effort rather than a one-time task, so we usually run it as a monthly engagement.'
  },
  {
    q: 'Do you manage Google and Meta Ads?',
    a: 'Yes. We set up the account structure, build the campaigns, write the ad copy, prepare creatives and manage them on an ongoing basis. Ad spend is paid directly to Google or Meta by you; our fee covers the setup and management.'
  },
  {
    q: 'Can you manage social media?',
    a: 'Yes. We handle content planning, post and reel creation, page management and paid campaigns. We can work alongside your in-house team or take the whole thing end to end, depending on what you need.'
  },
  {
    q: 'Do you provide website maintenance?',
    a: 'Yes. Maintenance covers updates, backups, security checks, bug fixes, small content changes and performance monitoring. It can be arranged as a monthly plan or on request.'
  },
  {
    q: 'Can you redesign an existing website?',
    a: 'Yes. We review the current site, identify what is holding it back and rebuild the design, structure and content. Where possible we keep your existing URLs and SEO value intact so rankings are not lost in the move.'
  },
  {
    q: 'Do you work with businesses outside India?',
    a: 'Yes. We work with clients across India and internationally. Everything runs over email, calls and WhatsApp, and we schedule reviews at a time that suits your timezone.'
  }
]

const scrollToContact = (event) => {
  event.preventDefault()
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section">
      <div className="container faq__grid">
        <div data-reveal>
          <span className="eyebrow">Questions</span>
          <h2>Answers Before You Ask.</h2>

          <div className="faq__aside" style={{ marginTop: '32px' }}>
            <h3>Still not sure what you need?</h3>
            <p>
              Send us a short note about your business and we&apos;ll tell you what we&apos;d
              actually recommend — even if it&apos;s less than you expected.
            </p>
            <a href="#contact" className="btn btn--primary btn--sm" onClick={scrollToContact}>
              Ask a question <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <div className="faq__list" data-reveal style={{ '--reveal-delay': '100ms' }}>
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div className={`faq__item${isOpen ? ' is-open' : ''}`} key={item.q}>
                <h3>
                  <button
                    type="button"
                    className="faq__q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    {item.q}
                    <span className="faq__sign" aria-hidden="true">
                      <Plus size={16} />
                    </span>
                  </button>
                </h3>
                <div className="faq__a" id={`faq-panel-${i}`} role="region">
                  <div>
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
