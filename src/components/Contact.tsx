import { useState } from 'react'
import type { FormEvent } from 'react'
import Reveal from './Reveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    // Simulated send — wire up to a real service (Formspree, EmailJS, etc.)
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 1200)
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-bg-text" aria-hidden="true">HELLO</div>

      <Reveal className="contact-inner">
        <span className="section-num" aria-hidden="true">04</span>
        <p className="section-label">get in touch</p>
        <h2 className="contact-title" id="contact-title">
          Let's work<br /><span>together.</span>
        </h2>
        <p className="contact-sub">
          Open to internships, freelance, and full-time roles.
          Fill out the form or reach out directly.
        </p>

        {/* Contact form */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">name</label>
              <input
                id="name" name="name" type="text"
                placeholder="Your name"
                value={form.name} onChange={handleChange}
                required autoComplete="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                id="email" name="email" type="email"
                placeholder="your@email.com"
                value={form.email} onChange={handleChange}
                required autoComplete="email"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">message</label>
            <textarea
              id="message" name="message"
              placeholder="Tell me about your project..."
              rows={5}
              value={form.message} onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-lg btn-submit"
            disabled={status === 'sending' || status === 'sent'}
            aria-live="polite"
          >
            {status === 'sending' ? 'sending...' : status === 'sent' ? 'message_sent ✓' : 'send_message()'}
          </button>
          {status === 'error' && (
            <p className="form-error" role="alert">Something went wrong. Try emailing directly.</p>
          )}
        </form>

        <div className="contact-divider"><span>or reach out directly</span></div>

        <div className="contact-details">
          <a href="mailto:ralphaelzionchata@gmail.com" className="contact-link">
            <span className="cl-icon" aria-hidden="true">@</span>
            ralphaelzionchata@gmail.com
          </a>
          <span className="contact-link">
            <span className="cl-icon" aria-hidden="true">#</span>
            0915 543 5532
          </span>
          <span className="contact-link">
            <span className="cl-icon" aria-hidden="true">~</span>
            Cainta, Rizal
          </span>
        </div>

        <div className="social-row">
          <a href="https://github.com/ralphaelchata" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub profile">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn profile">LinkedIn</a>
        </div>
      </Reveal>
    </section>
  )
}
