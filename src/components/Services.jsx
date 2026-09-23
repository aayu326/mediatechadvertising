import {
  Code2,
  TrendingUp,
  Search,
  Share2,
  Target,
  Palette,
  Clapperboard,
  Bot,
  ArrowUpRight
} from 'lucide-react'

const SERVICES = [
  {
    num: '01',
    icon: Code2,
    title: 'Website Development',
    text: 'Business websites, landing pages and custom web solutions.'
  },
  {
    num: '02',
    icon: TrendingUp,
    title: 'Digital Marketing',
    text: 'Digital campaigns focused on visibility, engagement and customer acquisition.'
  },
  {
    num: '03',
    icon: Search,
    title: 'SEO',
    text: 'Organic search visibility and relevant traffic.'
  },
  {
    num: '04',
    icon: Share2,
    title: 'Social Media Marketing',
    text: 'Content, social media management and campaigns.'
  },
  {
    num: '05',
    icon: Target,
    title: 'Google & Meta Ads',
    text: 'Performance-focused paid advertising.'
  },
  {
    num: '06',
    icon: Palette,
    title: 'Branding & Creative',
    text: 'Brand identity, creatives and visual communication.'
  },
  {
    num: '07',
    icon: Clapperboard,
    title: 'Video & Content',
    text: 'Reels, promotional videos and digital content.'
  },
  {
    num: '08',
    icon: Bot,
    title: 'AI & Automation',
    text: 'AI chatbots, workflow automation and smart business solutions.'
  }
]

const scrollToContact = (event) => {
  event.preventDefault()
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <header className="section-head" data-reveal>
          <span className="eyebrow">What we do</span>
          <h2>Everything Your Brand Needs to Grow Digitally.</h2>
          <p>
            Build the website, get found, run the campaigns and keep it all moving — handled
            by one team instead of five vendors.
          </p>
        </header>

        <div className="services__grid" data-reveal>
          {SERVICES.map(({ num, icon: Icon, title, text }) => (
            <a
              className="service"
              key={num}
              href="#contact"
              onClick={scrollToContact}
              aria-label={`${title} — talk to us about this service`}
            >
              <div className="service__top">
                <span className="service__num">{num}</span>
                <span className="service__icon">
                  <Icon size={21} strokeWidth={1.7} />
                </span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="service__arrow">
                Talk to us <ArrowUpRight size={16} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
