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
    items: ['Highlight Films (3–8 min)', 'Feature Films (12–20+ min)', 'Documentary Edits (45–90+ min)', 'Multicam Editing & Syncing'],
  },
  {
    number: '02',
    title: 'Commercial Edits',
    tagline: 'Content that converts.',
    desc: 'Polished, professional edits for businesses and brands that need to stand out in a crowded digital landscape.',
    items: ['Private Events (Birthdays, Bar Mitzvahs)', 'Real Estate Walkthroughs', 'Corporate Event Recaps', 'Brand & Promotional Videos'],
  },
  {
    number: '03',
    title: 'Custom Editing',
    tagline: 'Your vision, our craft.',
    desc: 'Have a unique project in mind? We take on bespoke post-production work tailored exactly to your creative brief.',
    items: ['Bespoke Post-Production', 'Full Colour Grading', 'Audio Sync & Mixing', 'Motion Graphics'],
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: shouldReduce ? 0 : 0.6, delay: index * 0.1, ease: EASE }}
      className="flex flex-col gap-6 p-8 rounded-3xl"
      style={{ background: 'var(--bg-alt)' }}
    >
      <span className="text-xs font-semibold" style={{ color: 'var(--fg-tertiary)' }}>
        {service.number}
      </span>

      <div>
        <h3 className="text-2xl font-semibold mb-1" style={{ color: 'var(--fg)', letterSpacing: '-0.02em' }}>
          {service.title}
        </h3>
        <p className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
          {service.tagline}
        </p>
      </div>

      <p className="text-base leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
        {service.desc}
      </p>

      <ul className="flex flex-col gap-2 mt-auto">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--fg-secondary)' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0" aria-hidden="true">
              <path d="M2.5 7L5.5 10L11.5 4" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {item}
          </li>
        ))}
      </ul>

      <motion.a
        href="#contact"
        whileHover={{ color: 'var(--accent-hover)' }}
        className="flex items-center gap-1 text-sm font-medium cursor-pointer mt-2"
        style={{ color: 'var(--accent)' }}
      >
        Learn more
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M3 7h8M7.5 4.5L11 7l-3.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.a>
    </motion.div>
  )
}

export default function Services() {
  const titleRef = useRef<HTMLDivElement>(null)
  const inView = useInView(titleRef, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()

  return (
    <section id="services" className="py-28 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, ease: EASE }}
            className="text-sm font-medium mb-4"
            style={{ color: 'var(--accent)' }}
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.1, ease: EASE }}
            className="text-4xl sm:text-6xl font-semibold leading-tight"
            style={{ color: 'var(--fg)', letterSpacing: '-0.03em' }}
          >
            Editing that makes your work shine.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
