'use client'

import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const stats = [
  { value: '500+', label: 'Films Delivered' },
  { value: '48h', label: 'Avg Turnaround' },
  { value: '100%', label: 'Client Retention' },
]

export default function Hero() {
  const shouldReduce = useReducedMotion()

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Subtle top gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,113,227,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-sm font-medium"
          style={{ color: 'var(--accent)' }}
        >
          Professional Video Editing
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-semibold leading-tight tracking-tight"
          style={{ color: 'var(--fg)', letterSpacing: '-0.03em' }}
        >
          Think of us as your<br />
          <span style={{ color: 'var(--accent)' }}>invisible production</span><br />
          department.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="text-xl sm:text-2xl font-light max-w-2xl leading-relaxed"
          style={{ color: 'var(--fg-secondary)', letterSpacing: '-0.01em' }}
        >
          We handle every cut, colour grade, and delivery — so you can focus on what you do best.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ backgroundColor: 'var(--accent-hover)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="px-7 py-3 rounded-full text-base font-medium cursor-pointer"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Get started
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ color: 'var(--accent-hover)' }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1.5 text-base font-medium cursor-pointer"
            style={{ color: 'var(--accent)' }}
          >
            Learn more
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 8h8M8.5 5L12 8l-3.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-12 mt-8 pt-10 w-full"
          style={{ borderTop: '1px solid var(--border-light)' }}
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span
                className="text-4xl font-semibold"
                style={{ color: 'var(--fg)', letterSpacing: '-0.02em' }}
              >
                {value}
              </span>
              <span className="text-sm" style={{ color: 'var(--fg-secondary)' }}>
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
