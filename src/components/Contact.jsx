import { useState } from 'react'
import {
  Mail,
  Phone,
  Globe,
  Instagram,
  Linkedin,
  MessageCircle,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'
import { SITE } from '../site.js'

const SERVICE_OPTIONS = [
  'Website Development',
  'Digital Marketing',
  'SEO',
  'Social Media Marketing',
  'Google Ads',
  'Meta Ads',
  'Branding',
  'Graphic Design',
  'Video & Content',
  'AI & Automation',
  'Other'
]

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  details: ''
}

function validate(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'Enter your full name.'
  else if (values.name.trim().length < 2) errors.name = 'Name looks too short.'

  if (!values.email.trim()) errors.email = 'Enter a business email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = 'That email address is not valid.'

  const digits = values.phone.replace(/\D/g, '')
  if (!values.phone.trim()) errors.phone = 'Enter a phone number.'
  else if (digits.length < 10) errors.phone = 'Enter at least 10 digits.'

  if (!values.service) errors.service = 'Choose the service you need.'

  if (!values.details.trim()) errors.details = 'Tell us a little about the project.'
  else if (values.details.trim().length < 15)
    errors.details = 'Add a bit more detail — 15 characters minimum.'

  return errors
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (field) => (event) => {
    const value = event.target.value
    setValues((v) => ({ ...v, [field]: value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)

    if (Object.keys(found).length > 0) {
      const firstField = Object.keys(found)[0]
      document.getElementById(`field-${firstField}`)?.focus()
      return
    }

    // No backend by design. Wire this up to your own endpoint when you're ready.
    setSent(true)
    setValues(EMPTY)
  }

  const field = (name) => `field${errors[name] ? ' has-error' : ''}`

  return (
    <section className="section" id="contact">
      <div className="container contact__grid">
        <div data-reveal>
          <span className="eyebrow">Contact</span>
          <h2>Let&apos;s Talk</h2>
          <p style={{ marginTop: '18px', maxWidth: '40ch' }}>
            Reach us directly, or fill in the form and we&apos;ll get back to you with next
            steps.
          </p>

          <div className="contact__list">
            <a className="contact__row" href={`mailto:${SITE.email}`}>
              <span className="contact__row-icon">
                <Mail size={18} />
              </span>
              <span>
                <span className="contact__row-label">Email</span>
                <span className="contact__row-value">{SITE.email}</span>
              </span>
            </a>

            <a className="contact__row" href={SITE.phoneHref}>
              <span className="contact__row-icon">
                <Phone size={18} />
              </span>
              <span>
                <span className="contact__row-label">Phone</span>
                <span className="contact__row-value">{SITE.phone}</span>
              </span>
            </a>

            <a
              className="contact__row"
              href={SITE.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__row-icon">
                <Globe size={18} />
              </span>
              <span>
                <span className="contact__row-label">Website</span>
                <span className="contact__row-value">{SITE.domain}</span>
              </span>
            </a>
          </div>

          <div className="contact__socials">
            <a
              className="social"
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MediaTech Advertising on Instagram"
            >
              <Instagram size={19} />
            </a>
            <a
              className="social"
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MediaTech Advertising on LinkedIn"
            >
              <Linkedin size={19} />
            </a>
            <a
              className="social"
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message MediaTech Advertising on WhatsApp"
            >
              <MessageCircle size={19} />
            </a>
          </div>
        </div>

        <div className="form" data-reveal style={{ '--reveal-delay': '110ms' }}>
          {sent && (
            <div className="form__success" role="status">
              <CheckCircle2 size={20} />
              <div>
                <strong>Enquiry sent</strong>
                <p>
                  Thanks for reaching out. We&apos;ll reply to your email within one working
                  day. For anything urgent, message us on WhatsApp.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form__grid">
              <div className={field('name')}>
                <label htmlFor="field-name">Full Name</label>
                <input
                  id="field-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={values.name}
                  onChange={update('name')}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <span className="field__error">{errors.name}</span>}
              </div>

              <div className={field('email')}>
                <label htmlFor="field-email">Business Email</label>
                <input
                  id="field-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={values.email}
                  onChange={update('email')}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span className="field__error">{errors.email}</span>}
              </div>

              <div className={field('phone')}>
                <label htmlFor="field-phone">Phone Number</label>
                <input
                  id="field-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 00000 00000"
                  value={values.phone}
                  onChange={update('phone')}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <span className="field__error">{errors.phone}</span>}
              </div>

              <div className="field">
                <label htmlFor="field-company">Company / Brand</label>
                <input
                  id="field-company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Optional"
                  value={values.company}
                  onChange={update('company')}
                />
              </div>

              <div className={`${field('service')} field--full`}>
                <label htmlFor="field-service">Service Required</label>
                <select
                  id="field-service"
                  value={values.service}
                  onChange={update('service')}
                  aria-invalid={!!errors.service}
                >
                  <option value="">Select a service</option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.service && <span className="field__error">{errors.service}</span>}
              </div>

              <div className={`${field('details')} field--full`}>
                <label htmlFor="field-details">Project Details</label>
                <textarea
                  id="field-details"
                  placeholder="What are you trying to build, promote or improve?"
                  value={values.details}
                  onChange={update('details')}
                  aria-invalid={!!errors.details}
                />
                {errors.details && <span className="field__error">{errors.details}</span>}
              </div>
            </div>

            <div className="form__foot">
              <span className="form__note">We reply within one working day.</span>
              <button type="submit" className="btn btn--primary">
                Send Enquiry <ArrowRight size={17} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
