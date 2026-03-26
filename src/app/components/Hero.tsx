'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const duration = 1400
          const step = (now: number) => {
            const p = Math.min((now - start) / duration, 1)
            const ease = 1 - Math.pow(1 - p, 3)
            setCount(Math.round(ease * to))
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [to])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { value: 500, suffix: '+', label: 'Films Delivered' },
  { value: 48, suffix: 'h', label: 'Avg Turnaround' },
  { value: 100, suffix: '%', label: 'Client Retention' },
]

export default function Hero() {
  const shouldReduce = useReducedMotion()

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Film grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.045]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(249,115,22,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase"
          style={{ background: 'var(--accent-dim)', border: '1px solid rgba(249,115,22,0.22)', color: 'var(--accent)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          Professional Video Editing · Ireland & US
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold leading-[1.02]"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', color: 'var(--fg)' }}
        >
          Think of us as your<br />
          <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>invisible production</em><br />
          department.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.22 }}
          className="text-lg sm:text-xl font-light max-w-xl leading-relaxed"
          style={{ color: 'var(--fg-secondary)', fontFamily: 'var(--font-body)' }}
        >
          We handle every cut, colour grade, and delivery — so you can focus on shooting and growing your business.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.32 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, boxShadow: '0 0 36px var(--accent-glow)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm cursor-pointer"
            style={{ background: 'var(--accent)', color: '#fff', fontFamily: 'var(--font-body)' }}
          >
            Start Your First Edit
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M7.5 4.5L11 7l-3.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--fg)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="px-8 py-3.5 rounded-full font-medium text-sm cursor-pointer"
            style={{ border: '1px solid var(--border-strong)', color: 'var(--fg-secondary)', fontFamily: 'var(--font-body)' }}
          >
            View Services
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.48 }}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          {stats.map(({ value, suffix, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 px-8 py-5 rounded-2xl"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            >
              <span
                className="text-4xl font-bold"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)', letterSpacing: '-0.02em' }}
              >
                {shouldReduce ? `${value}${suffix}` : <CountUp to={value} suffix={suffix} />}
              </span>
              <span className="text-xs tracking-wider uppercase" style={{ color: 'var(--fg-secondary)', fontFamily: 'var(--font-body)' }}>
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
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <motion.div
          animate={shouldReduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, var(--fg-secondary), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
