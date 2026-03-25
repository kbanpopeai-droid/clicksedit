'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

const features = [
  {
    title: 'Spring Physics',
    desc: 'Natural-feeling motion powered by real spring mechanics — stiffness, damping, and mass.',
    accentColor: '#5E6AD2',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M4 18C4 18 6 10 11 10C16 10 18 2 18 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="11" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Gesture Control',
    desc: 'Drag, pan, and scroll with velocity tracking, momentum, and smart constraints.',
    accentColor: '#7C3AED',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M9 3V12M9 12C9 12 6 11 5 13C4 15 6 18 9 18C12 18 14 16 15 14L17 9C17 9 15 8 14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Layout Animations',
    desc: 'Animate between any two layouts automatically. Complex transitions made trivial.',
    accentColor: '#3B82F6',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="12" width="16" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="3" width="5" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Scroll-Linked',
    desc: 'Tie any value directly to scroll position for stunning parallax and reveal effects.',
    accentColor: '#06B6D4',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="8" y="2" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 20C5 17 8 15 11 15C14 15 17 17 17 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 13V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Exit Animations',
    desc: 'Components animate out gracefully before removal from the DOM — zero extra code.',
    accentColor: '#EC4899',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M15 8L19 11L15 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 11H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 5H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <path d="M3 17H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: 'Orchestration',
    desc: 'Stagger children, chain sequences, and coordinate complex multi-part animations.',
    accentColor: '#F59E0B',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="4" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 6L4 13M11 6L18 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: shouldReduce ? 0 : 0.6,
        delay: shouldReduce ? 0 : (index % 3) * 0.08,
        ease: EASE,
      }}
      whileHover={shouldReduce ? {} : { y: -5 }}
      className="group relative flex flex-col gap-5 p-6 rounded-2xl cursor-default"
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.borderColor = `${feature.accentColor}33`
        el.style.boxShadow = `0 16px 48px ${feature.accentColor}18`
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'var(--border)'
        el.style.boxShadow = 'none'
      }}
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center w-10 h-10 rounded-xl"
        style={{
          background: `${feature.accentColor}18`,
          color: feature.accentColor,
          border: `1px solid ${feature.accentColor}28`,
        }}
      >
        {feature.icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3
          className="text-base font-semibold"
          style={{ color: 'var(--foreground)', fontFamily: 'var(--font-jost)' }}
        >
          {feature.title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: 'var(--muted)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
        >
          {feature.desc}
        </p>
      </div>

      {/* Arrow */}
      <motion.div
        className="mt-auto flex items-center gap-1.5 text-xs font-medium opacity-0 group-hover:opacity-100"
        style={{ color: feature.accentColor, fontFamily: 'var(--font-jost)' }}
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

export default function Features() {
  const titleRef = useRef<HTMLDivElement>(null)
  const inView = useInView(titleRef, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()

  return (
    <section
      className="relative py-32 px-6"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* Section header */}
      <div ref={titleRef} className="text-center mb-16 max-w-xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduce ? 0 : 0.5, ease: EASE }}
          className="text-xs tracking-widest uppercase mb-4"
          style={{ color: 'var(--accent)', fontFamily: 'var(--font-jost)' }}
        >
          Capabilities
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.1, ease: EASE }}
          className="text-4xl sm:text-5xl font-bold leading-tight"
          style={{ fontFamily: 'var(--font-bodoni)', color: 'var(--foreground)' }}
        >
          Everything you need
          <br />
          <em style={{ color: 'var(--muted)', fontStyle: 'italic' }}>to make it feel real</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.2, ease: EASE }}
          className="mt-4 text-sm leading-relaxed"
          style={{ color: 'var(--muted)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
        >
          A complete motion toolkit — from micro-interactions to full page transitions.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <FeatureCard key={f.title} feature={f} index={i} />
        ))}
      </div>
    </section>
  )
}
