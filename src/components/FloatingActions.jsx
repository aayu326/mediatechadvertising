import { useEffect, useState } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { SITE } from '../site.js'

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="floats">
      <a
        className="float-btn float-btn--wa"
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with MediaTech Advertising on WhatsApp at ${SITE.phone}`}
        title={`WhatsApp ${SITE.phone}`}
      >
        <MessageCircle size={23} />
      </a>

      <button
        type="button"
        className={`float-btn float-btn--top${showTop ? ' is-shown' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  )
}
