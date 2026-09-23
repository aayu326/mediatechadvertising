import { ArrowUpRight } from 'lucide-react'

/**
 * To use a real screenshot, drop the file in /public (e.g. /public/work/kailvora.jpg)
 * and set `image: '/work/kailvora.jpg'` on that project.
 * Leave `image` empty and the gradient placeholder is used instead.
 */
const PROJECTS = [
  {
    name: 'Kailvora Infra',
    category: 'Real Estate / Website Development',
    url: 'https://kailvorainfra.com/',
    initials: 'KI',
    gradient: 'linear-gradient(145deg, #1B3A7A, #0A1228)',
    image: ''
  },
  {
    name: 'Toureninde',
    category: 'Travel / Digital Platform',
    url: 'https://toureninde.com/',
    initials: 'TI',
    gradient: 'linear-gradient(145deg, #12506B, #08131F)',
    image: ''
  },
  {
    name: 'Rudraa Housing India',
    category: 'Real Estate / Website Development',
    url: 'https://rudraahousingindia.com/',
    initials: 'RH',
    gradient: 'linear-gradient(145deg, #2B3A72, #0B1024)',
    image: ''
  },
  {
    name: 'ERP Hubs',
    category: 'Business Technology',
    url: 'https://erphubs.com/',
    initials: 'EH',
    gradient: 'linear-gradient(145deg, #15406B, #070E1C)',
    image: ''
  },
  {
    name: 'Transfer Pricing India',
    category: 'Professional Services',
    url: 'https://transferpricingindia.com/',
    initials: 'TP',
    gradient: 'linear-gradient(145deg, #1E3060, #080D1D)',
    image: ''
  },
  {
    name: 'Orions Advertising',
    category: 'Advertising / Website Development',
    url: 'https://orionsadvertising.com/',
    initials: 'OA',
    gradient: 'linear-gradient(145deg, #23336E, #090F22)',
    image: ''
  }
]

const hostOf = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')

export default function Portfolio() {
  return (
    <section className="section" id="work">
      <div className="container">
        <header className="section-head" data-reveal>
          <span className="eyebrow">Selected work</span>
          <h2>Work We&apos;ve Built.</h2>
          <p>
            A selection of websites and digital platforms we&apos;ve delivered across real
            estate, travel, business technology and professional services.
          </p>
        </header>

        <div className="work__grid">
          {PROJECTS.map((project, index) => (
            <article
              className="work__card"
              key={project.name}
              data-reveal
              style={{ '--reveal-delay': `${(index % 3) * 90}ms` }}
            >
              <div className="work__thumb">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} website designed and developed by MediaTech Advertising`}
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="work__ph"
                    style={{ '--ph-bg': project.gradient }}
                    role="img"
                    aria-label={`${project.name} — ${project.category} project by MediaTech Advertising`}
                  >
                    <span className="work__ph-mark">{project.initials}</span>
                    <span className="work__ph-url">{hostOf(project.url)}</span>
                  </div>
                )}
              </div>

              <div className="work__body">
                <span className="work__cat">{project.category}</span>
                <h3>{project.name}</h3>
                <a
                  className="work__link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit site <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
