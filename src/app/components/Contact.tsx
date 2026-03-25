'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useState } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Contact() {
  const titleRef = useRef<HTMLDivElement>(null)
  const inView = useInView(titleRef, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div ref={titleRef}>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.5, ease: EASE }}
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: 'var(--accent)' }}
            >
              Get In Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.1, ease: EASE }}
              className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
              style={{ color: 'var(--fg)' }}
            >
              Ready to scale your{' '}
              <span style={{ color: 'var(--accent)' }}>editing?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.2, ease: EASE }}
              className="text-base font-light leading-relaxed mb-10"
              style={{ color: 'var(--fg-muted)' }}
            >
              Tell us about your project and we&apos;ll get back to you within a few hours. We work with clients across Ireland, Europe, and the US.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.3, ease: EASE }}
              className="flex flex-col gap-5"
            >
              {[
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2.7 1.3A1 1 0 014 1.1l2.2 1a1 1 0 01.6.9v1.5a1 1 0 01-.7 1L5 5.8c.9 2 2.3 3.4 4.2 4.2l1.3-1.1a1 1 0 011-.1l1.5.6a1 1 0 01.7 1V12c0 .5-.3.9-.8 1l-.7.2C5.5 14.5.5 7.5 2.7 1.3z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  label: 'Ireland',
                  value: '+353 85 276 8556',
                  href: 'tel:+353852768556',
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2.7 1.3A1 1 0 014 1.1l2.2 1a1 1 0 01.6.9v1.5a1 1 0 01-.7 1L5 5.8c.9 2 2.3 3.4 4.2 4.2l1.3-1.1a1 1 0 011-.1l1.5.6a1 1 0 01.7 1V12c0 .5-.3.9-.8 1l-.7.2C5.5 14.5.5 7.5 2.7 1.3z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  label: 'US',
                  value: '+1 (605) 659-8176',
                  href: 'tel:+16056598176',
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2 4l6 5 6-5M2 4h12v9H2V4z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  label: 'Email',
                  value: 'info@clicksedit.com',
                  href: 'mailto:info@clicksedit.com',
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M8 1.5A5.5 5.5 0 018 12.5c0 0-4 2-4.5 2M8 1.5A5.5 5.5 0 0113.5 7c0 2.5-1.5 4-1.5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                      <circle cx="8" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.3" />
                    </svg>
                  ),
                  label: 'Address',
                  value: '1 Merchants Quay, Waterford, Ireland',
                  href: '#',
                },
              ].map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs tracking-widest uppercase" style={{ color: 'var(--fg-dim)' }}>
                      {label}
                    </div>
                    <div
                      className="text-sm font-medium group-hover:text-white transition-colors"
                      style={{ color: 'var(--fg-muted)' }}
                    >
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.7, delay: 0.25, ease: EASE }}
            className="p-8 rounded-2xl"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-12 text-center"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12l5 5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--fg)' }}>Message Sent!</h3>
                <p className="text-sm font-light" style={{ color: 'var(--fg-muted)' }}>
                  We&apos;ll be in touch within a few hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-medium tracking-wide" style={{ color: 'var(--fg-muted)' }}>
                      Full Name <span style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                      style={{
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border)',
                        color: 'var(--fg)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(255,69,0,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-medium tracking-wide" style={{ color: 'var(--fg-muted)' }}>
                      Email <span style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@studio.com"
                      className="px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                      style={{
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border)',
                        color: 'var(--fg)',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(255,69,0,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-xs font-medium tracking-wide" style={{ color: 'var(--fg-muted)' }}>
                    Service
                  </label>
                  <select
                    id="service"
                    className="px-4 py-3 rounded-xl text-sm outline-none transition-colors cursor-pointer"
                    style={{
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      color: 'var(--fg-muted)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(255,69,0,0.5)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  >
                    <option value="">Select a service...</option>
                    <option>Wedding Highlight Film</option>
                    <option>Wedding Feature Film</option>
                    <option>Wedding Documentary</option>
                    <option>Commercial Edit</option>
                    <option>Custom Project</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-medium tracking-wide" style={{ color: 'var(--fg-muted)' }}>
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Footage details, turnaround needed, any specific style notes..."
                    className="px-4 py-3 rounded-xl text-sm outline-none transition-colors resize-none"
                    style={{
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border)',
                      color: 'var(--fg)',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(255,69,0,0.5)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 32px var(--accent-glow)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="w-full py-4 rounded-full font-semibold text-sm cursor-pointer"
                  style={{ background: 'var(--accent)', color: '#fff' }}
                >
                  Send Message
                </motion.button>

                <p className="text-xs text-center" style={{ color: 'var(--fg-dim)' }}>
                  We typically respond within a few hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
