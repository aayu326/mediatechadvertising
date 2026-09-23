import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 10, suffix: '+', label: 'Clients Served' },
  { value: 15, suffix: '+', label: 'Digital Projects' },
  { text: 'Multiple', label: 'Industries' },
  { text: 'Pan India', label: 'Client Reach' }
]

/** Counts from 0 to `target` once `start` flips to true. */
function useCountUp(target, start, duration = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start || typeof target !== 'number') return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(target)
      return
    }

    let frame
    const begin = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - begin) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, start, duration])

  return value
}

function Stat({ item, start }) {
  const count = useCountUp(item.value, start)

  return (
    <div className="stat">
      <div className="stat__value">
        {typeof item.value === 'number' ? `${count}${item.suffix || ''}` : item.text}
      </div>
      <div className="stat__label">{item.label}</div>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats" ref={ref} aria-label="MediaTech Advertising at a glance">
      <div className="container">
        <div className="stats__grid">
          {STATS.map((item) => (
            <Stat key={item.label} item={item} start={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
