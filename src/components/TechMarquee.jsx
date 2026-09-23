const TOOLS = [
  'React',
  'Next.js',
  'JavaScript',
  'Node.js',
  'HTML5',
  'CSS3',
  'WordPress',
  'Shopify',
  'Firebase',
  'Supabase',
  'Google Ads',
  'Meta Ads',
  'Google Analytics',
  'Search Console',
  'Canva',
  'Adobe Photoshop'
]

export default function TechMarquee() {
  // The list is rendered twice so the -50% translation loops seamlessly.
  const loop = [...TOOLS, ...TOOLS]

  return (
    <section className="marquee" aria-label="Technology and tools we work with">
      <p className="marquee__title">Our digital toolkit</p>

      <span className="marquee__fade marquee__fade--l" aria-hidden="true" />
      <span className="marquee__fade marquee__fade--r" aria-hidden="true" />

      <div className="marquee__track">
        {loop.map((tool, index) => (
          <span className="marquee__item" key={`${tool}-${index}`}>
            <i aria-hidden="true" />
            {tool}
          </span>
        ))}
      </div>
    </section>
  )
}
