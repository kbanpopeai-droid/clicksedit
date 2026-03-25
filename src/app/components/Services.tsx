'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

const services = [
  {
    number: '01',
    title: 'Wedding Editing',
    tagline: 'Every moment, perfectly preserved.',
    desc: 'From intimate elopements to grand celebrations — we craft cinematic films that your clients will treasure forever.',
    items: [
      'Highlight Films (3–8 min)',
      'Feature Films (12–20+ min)',
      'Documentary Edits (45–90+ min)',
      'Multicam Editing & Syncing',
    ],
    accent: '#FF4500',
  },
  {
    number: '02',
    title: 'Commercial Edits',
    tagline: 'Content that converts.',
    desc: 'Polished, professional edits for businesses and brands that need to stand out in a crowded digital landscape.',
    items: [
      'Private Events (Birthdays, Bar Mitzvahs)',
      'Real Estate Walkthroughs',
      'Corporate Event Recaps',
      'Brand & Promotional Videos',
    ],
    accent: '#FF6B35',
  },
  {
    number: '03',
    title: 'Custom Editing',
    tagline: 'Your vision, our craft.',
    desc: 'Have a unique project in mind? We take on bespoke post-production work tailored exactly to your creative brief.',
    items: [
      'Bespoke Post-Production',
      'Full Colour Grading',
      'Audio Sync & Mixing',
      'Motion Graphics',
    ],
    accent: '#FF8C42',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: shouldReduce ? 0 : 0.65, delay: index * 0.12, ease: EASE }}
      className="group relative flex flex-col gap-6 p-8 rounded-2xl cursor-default"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${service.accent}30`
        e.currentTarget.style.boxShadow = `0 20px 60px ${service.accent}12`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Number */}
      <span
        className="text-xs font-bold tracking-widest"
        style={{ color: service.accent }}
      >
        {service.number}
      </span>

      {/* Title */}
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold" style={{ color: 'var(--fg)' }}>
          {service.title}
        </h3>
        <p className="text-sm font-medium" style={{ color: service.accent }}>
          {service.tagline}
        </p>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed font-light" style={{ color: 'var(--fg-muted)' }}>
        {service.desc}
      </p>

      {/* Items */}
      <ul className="flex flex-col gap-2.5 mt-auto">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-sm" style={{ color: 'var(--fg-muted)' }}>
            <span
              className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center"
              style={{ background: `${service.accent}18`, color: service.accent }}
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                <path d="M2 4L3.5 5.5L6 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>

      {/* Arrow */}
      <motion.div
        className="flex items-center gap-1.5 text-xs font-semibold mt-2 opacity-0 group-hover:opacity-100"
        style={{ color: service.accent }}
        transition={{ duration: 0.2 }}
      >
        Learn more
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const titleRef = useRef<HTMLDivElement>(null)
  const inView = useInView(titleRef, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()

  return (
    <section id="services" className="py-28 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, ease: EASE }}
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: 'var(--accent)' }}
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.1, ease: EASE }}
            className="text-4xl sm:text-5xl font-bold leading-tight mx-auto"
            style={{ color: 'var(--fg)' }}
          >
            Editing that makes your{' '}
            <span style={{ color: 'var(--accent)' }}>work shine.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
