'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef, useState } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

const inputStyle = {
  background: 'var(--bg-alt)',
  border: '1px solid var(--border)',
  color: 'var(--fg)',
  borderRadius: '12px',
  fontSize: '15px',
  outline: 'none',
  width: '100%',
  padding: '12px 16px',
  transition: 'border-color 0.15s ease',
}

export default function Contact() {
  const titleRef = useRef<HTMLDivElement>(null)
  const inView = useInView(titleRef, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="py-28 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div ref={titleRef}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.5, ease: EASE }}
              className="text-sm font-medium mb-4"
              style={{ color: 'var(--accent)' }}
            >
              Get In Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.1, ease: EASE }}
              className="text-4xl sm:text-5xl font-semibold leading-tight mb-5"
              style={{ color: 'var(--fg)', letterSpacing: '-0.03em' }}
            >
              Ready to scale your editing?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.15, ease: EASE }}
              className="text-lg leading-relaxed mb-10"
              style={{ color: 'var(--fg-secondary)' }}
            >
              Tell us about your project and we&apos;ll get back to you within a few hours. We work with clients across Ireland, Europe, and the US.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.2, ease: EASE }}
              className="flex flex-col gap-5"
            >
              {[
                { label: 'Ireland', value: '+353 85 276 8556', href: 'tel:+353852768556' },
                { label: 'United States', value: '+1 (605) 659-8176', href: 'tel:+16056598176' },
                { label: 'Email', value: 'info@clicksedit.com', href: 'mailto:info@clicksedit.com' },
                { label: 'Address', value: '1 Merchants Quay, Waterford, Ireland', href: '#' },
              ].map(({ label, value, href }) => (
                <a key={label} href={href} className="flex flex-col gap-0.5 group">
                  <span className="text-xs font-medium" style={{ color: 'var(--fg-tertiary)' }}>{label}</span>
                  <span
                    className="text-base group-hover:underline"
                    style={{ color: 'var(--fg-secondary)' }}
                  >
                    {value}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.7, delay: 0.2, ease: EASE }}
            className="p-8 rounded-3xl"
            style={{ background: 'var(--bg-alt)' }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 py-12 text-center"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(0,113,227,0.1)' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12l5 5L19 7" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold" style={{ color: 'var(--fg)' }}>Message sent!</h3>
                <p className="text-base" style={{ color: 'var(--fg-secondary)' }}>We&apos;ll be in touch within a few hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="flex flex-col gap-4" noValidate>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-medium" style={{ color: 'var(--fg-secondary)' }}>
                      Full Name <span style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <input
                      id="name" type="text" required placeholder="Jane Smith"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-medium" style={{ color: 'var(--fg-secondary)' }}>
                      Email <span style={{ color: 'var(--accent)' }}>*</span>
                    </label>
                    <input
                      id="email" type="email" required placeholder="jane@studio.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-xs font-medium" style={{ color: 'var(--fg-secondary)' }}>
                    Service
                  </label>
                  <select
                    id="service"
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
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

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-medium" style={{ color: 'var(--fg-secondary)' }}>
                    Tell us about your project
                  </label>
                  <textarea
                    id="message" rows={4}
                    placeholder="Footage details, turnaround needed, any specific style notes..."
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ backgroundColor: 'var(--accent-hover)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="w-full py-3.5 rounded-full text-sm font-medium cursor-pointer mt-2"
                  style={{ background: 'var(--accent)', color: '#fff' }}
                >
                  Send Message
                </motion.button>

                <p className="text-xs text-center" style={{ color: 'var(--fg-tertiary)' }}>
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
