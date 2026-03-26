'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

const services = [
  {
    number: '01',
    title: 'Wedding Editing',
    tagline: 'Every moment, perfectly preserved.',
    desc: 'From intimate elopements to grand celebrations — we craft cinematic films your clients will treasure forever.',
    items: ['Highlight Films (3–8 min)', 'Feature Films (12–20+ min)', 'Documentary Edits (45–90+ min)', 'Multicam Editing & Syncing'],
    accent: '#f97316',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2C6.03 2 2 6.03 2 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 7.5l5 3.5-5 3.5V7.5z" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Commercial Edits',
    tagline: 'Content that converts.',
    desc: 'Polished, professional edits for businesses and brands that need to stand out in a crowded digital landscape.',
    items: ['Private Events (Birthdays, Bar Mitzvahs)', 'Real Estate Walkthroughs', 'Corporate Event Recaps', 'Brand & Promotional Videos'],
    accent: '#fb923c',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 5V3M7 5V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 10l4 2-4 2v-4z" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Custom Editing',
    tagline: 'Your vision, our craft.',
    desc: 'Have a unique project? We take on bespoke post-production work tailored exactly to your creative brief.',
    items: ['Bespoke Post-Production', 'Full Colour Grading', 'Audio Sync & Mixing', 'Motion Graphics'],
    accent: '#fdba74',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M12.5 3L19 9.5l-9.5 9.5-3-1L3 15l9.5-12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M15.5 6l1.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: shouldReduce ? 0 : 0.65, delay: index * 0.12, ease: EASE }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative flex flex-col gap-6 p-7 rounded-2xl overflow-hidden cursor-default"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${service.accent}30`
        e.currentTarget.style.boxShadow = `0 20px 60px ${service.accent}10`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Left border accent */}
      <div
        className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full"
        style={{ background: service.accent }}
      />

      {/* Ghost number */}
      <div
        className="absolute right-4 top-2 text-8xl font-black pointer-events-none select-none"
        style={{ color: `${service.accent}08`, fontFamily: 'var(--font-display)', lineHeight: 1 }}
        aria-hidden="true"
      >
        {service.number}
      </div>

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center relative z-10"
        style={{ background: `${service.accent}18`, color: service.accent, border: `1px solid ${service.accent}25` }}
      >
        {service.icon}
      </div>

      <div className="relative z-10">
        <h3
          className="text-xl font-bold mb-1"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)', letterSpacing: '-0.01em' }}
        >
          {service.title}
        </h3>
        <p className="text-sm font-medium mb-3" style={{ color: service.accent }}>
          {service.tagline}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
          {service.desc}
        </p>
      </div>

      <ul className="flex flex-col gap-2 relative z-10 mt-auto">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--fg-secondary)' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0" aria-hidden="true">
              <path d="M2.5 7L5.5 10L11.5 4" stroke={service.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {item}
          </li>
        ))}
      </ul>

      <motion.a
        href="#contact"
        className="flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity relative z-10"
        style={{ color: service.accent }}
        whileHover={{ gap: '8px' }}
        transition={{ duration: 0.15 }}
      >
        Learn more
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 6h8M6.5 3.5L9 6l-2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
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
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, ease: EASE }}
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.1, ease: EASE }}
            className="text-4xl sm:text-6xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)', letterSpacing: '-0.02em' }}
          >
            Editing that makes your<br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>work shine.</em>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
