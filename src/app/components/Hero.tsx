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

  const wordVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
  }
  const word = {
    hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring' as const, stiffness: 80, damping: 18 },
    },
  }

  const heading = ['Think Of Us As', 'Your Invisible', 'Production Department.']

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
      style={{ background: 'var(--bg)' }}
    >
      {/* Film grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,69,0,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center text-center gap-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase"
          style={{
            background: 'var(--accent-dim)',
            border: '1px solid rgba(255,69,0,0.25)',
            color: 'var(--accent)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          Professional Video Editing
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={shouldReduce ? {} : wordVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-7xl md:text-8xl font-bold leading-[1.02] tracking-tight"
          aria-label="Think Of Us As Your Invisible Production Department."
        >
          {heading.map((line, li) => (
            <span key={li} className="block">
              {line.split(' ').map((w, wi) => (
                <motion.span
                  key={wi}
                  variants={shouldReduce ? {} : word}
                  style={{ display: 'inline-block', marginRight: '0.28em' }}
                >
                  {li === 1 && wi === 1 ? (
                    <span style={{ color: 'var(--accent)' }}>{w}</span>
                  ) : (
                    w
                  )}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 1 }}
          className="max-w-lg text-lg leading-relaxed font-light"
          style={{ color: 'var(--fg-muted)' }}
        >
          We handle every cut, colour grade, and delivery — so you can focus on shooting and growing your business.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px var(--accent-glow)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm cursor-pointer"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Start Your First Edit
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-2 px-8 py-4 rounded-full font-medium text-sm cursor-pointer"
            style={{
              border: '1px solid var(--border-strong)',
              color: 'var(--fg-muted)',
              background: 'transparent',
            }}
          >
            View Services
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-10 mt-4 pt-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-3xl font-bold" style={{ color: 'var(--fg)' }}>
                {value}
              </span>
              <span className="text-xs tracking-wider uppercase" style={{ color: 'var(--fg-muted)' }}>
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
        style={{ color: 'var(--fg-dim)' }}
        aria-hidden="true"
      >
        <motion.div
          animate={shouldReduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, var(--fg-muted), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
