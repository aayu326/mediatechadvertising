import { useEffect, useState } from 'react'
import {
  Compass,
  Cpu,
  PenTool,
  Gauge,
  MessageSquare,
  LifeBuoy,
  ArrowUpRight
} from 'lucide-react'

const REASONS = [
  {
    icon: Compass,
    title: 'Strategy First',
    text: 'We start with your business, audience and objective — then decide what to build.'
  },
  {
    icon: Cpu,
    title: 'Modern Technology',
    text: 'Current frameworks and tooling, so your site stays fast, secure and easy to extend.'
  },
  {
    icon: PenTool,
    title: 'Creative With Purpose',
    text: 'Design and content that carry your message, not decoration for its own sake.'
  },
  {
    icon: Gauge,
    title: 'Performance Focused',
    text: 'Speed, search visibility and campaign results are tracked, not assumed.'
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    text: 'You know the scope, the timeline and the status without having to chase us.'
  },
  {
    icon: LifeBuoy,
    title: 'Long-Term Support',
    text: 'Launch is the start. We stay on for updates, fixes and ongoing growth work.'
  }
]

function useWhyStack(count, interval = 3000) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduceMotion) return

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % count)
    }, interval)

    return () => clearInterval(timer)
  }, [count, interval])

  return active
}

export default function WhyUs() {
  const active = useWhyStack(REASONS.length)

  return (
    <section className="section why-section">
      <div className="container">

        {/* SECTION INTRO */}
        <header className="section-head why-head" data-reveal>
          <span className="eyebrow">Why MediaTech</span>

          <h2>
            More Than Just
            <br />
            Another Digital Agency.
          </h2>

          <p>
            The difference shows up in how the work is run — how decisions
            get made, how progress is communicated and what happens after
            go-live.
          </p>
        </header>


        {/* 3D ROTATING STACK */}
        <div
          className="why-stack-wrapper"
          role="region"
          aria-label="Why choose MediaTech"
        >

          <div className="why-stack">

            {REASONS.map(({ icon: Icon, title, text }, index) => {

              const count = REASONS.length

              const offset =
                (index - active + count) % count

              let position = 'why-stack__back'

              if (offset === 0) {
                position = 'why-stack__front'
              } else if (offset === 1) {
                position = 'why-stack__right'
              } else if (offset === count - 1) {
                position = 'why-stack__left'
              }

              return (
                <article
                  key={title}
                  className={`why-stack__card ${position}`}
                  aria-hidden={offset !== 0}
                >

                  {/* TOP VISUAL AREA */}
                  <div className="why-card__visual">

                    <div className="why-card__pattern">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className="why-card__icon">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                    <div className="why-card__arrow">
                      <ArrowUpRight size={20} />
                    </div>

                  </div>


                  {/* GREEN CONTENT AREA */}
                  <div className="why-card__content">

                    <span className="why-card__number">
                      0{index + 1}
                    </span>

                    <h3>{title}</h3>

                    <p>{text}</p>

                  </div>

                </article>
              )
            })}

          </div>


          {/* DOT INDICATOR */}
          <div className="why-stack__dots">

            {REASONS.map((_, index) => (
              <span
                key={index}
                className={index === active ? 'active' : ''}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}