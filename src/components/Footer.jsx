import { SITE } from '../site.js'

const SERVICES = [
  'Website Development',
  'Digital Marketing',
  'SEO',
  'Social Media',
  'Google Ads',
  'Meta Ads',
  'Branding',
  'AI & Automation'
]

const COMPANY = [
  { label: 'About', href: '#about' },
  { label: 'Our Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
  { label: 'Blog', href: '#contact' }
]

const scrollTo = (event, href) => {
  const id = href.replace('#', '')
  const target = document.getElementById(id)
  if (target) {
    event.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__about">
            <a href="#home" className="brand" onClick={(e) => scrollTo(e, '#home')}>
             <span className="brand__mark">
  <img
    src="/mediatech-logo.png"
    alt="MediaTech Advertising"
  />
</span>
              <span className="brand__text">
                <span className="brand__name">{SITE.name}</span>
                <span className="brand__tag">{SITE.tagline}</span>
              </span>
            </a>
            <p>
              Technology, creativity and digital marketing solutions for businesses ready to
              grow online.
            </p>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              {SERVICES.map((service) => (
                <li key={service}>
                  <a href="#services" onClick={(e) => scrollTo(e, '#services')}>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <a href={item.href} onClick={(e) => scrollTo(e, item.href)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}>Email</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2026 {SITE.name}. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#contact" onClick={(e) => scrollTo(e, '#contact')}>
              Privacy Policy
            </a>
            <span aria-hidden="true">|</span>
            <a href="#contact" onClick={(e) => scrollTo(e, '#contact')}>
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
