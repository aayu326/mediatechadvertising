const STEPS = [
  { num: '01', title: 'Discover', text: 'Understand business, audience and objectives.' },
  { num: '02', title: 'Plan', text: 'Create strategy, structure and roadmap.' },
  { num: '03', title: 'Design', text: 'Create visual direction and user experience.' },
  { num: '04', title: 'Build', text: 'Develop, test and launch.' },
  { num: '05', title: 'Grow', text: 'SEO, advertising, content and optimization.' }
]

export default function Process() {
  return (
    <section className="section">
      <div className="container">
        <header className="section-head" data-reveal>
          <span className="eyebrow">How we work</span>
          <h2>From Idea to Digital Growth.</h2>
          <p>
            A sequence we follow on every project, so you always know which stage the work is
            in and what comes next.
          </p>
        </header>

        <ol className="process__track">
          {STEPS.map(({ num, title, text }, index) => (
            <li
              className="step"
              key={num}
              data-reveal
              style={{ '--reveal-delay': `${index * 90}ms` }}
            >
              <span className="step__node" aria-hidden="true">
                {num}
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
