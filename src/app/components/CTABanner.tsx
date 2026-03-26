'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()

  return (
    <section className="py-6 px-6" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduce ? 0 : 0.7, ease: EASE }}
          className="relative overflow-hidden rounded-3xl px-8 py-20 text-center flex flex-col items-center gap-6"
          style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-strong)' }}
        >
          {/* Film grain overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
          />

          {/* Radial accent glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(249,115,22,0.08) 0%, transparent 70%)' }}
            aria-hidden="true"
          />

          <div
            className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ background: 'var(--accent-dim)', border: '1px solid rgba(249,115,22,0.25)', color: 'var(--accent)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            Now Accepting New Clients
          </div>

          <h2
            className="relative z-10 text-4xl sm:text-6xl font-bold leading-tight max-w-2xl"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)', letterSpacing: '-0.02em' }}
          >
            Stop spending days editing.<br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Start scaling your studio.</em>
          </h2>

          <p className="relative z-10 text-base" style={{ color: 'var(--fg-secondary)', fontFamily: 'var(--font-body)' }}>
            Send us your first project — no commitment, no contract.
          </p>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, boxShadow: '0 0 40px var(--accent-glow)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold cursor-pointer"
              style={{ background: 'var(--accent)', color: '#fff', fontFamily: 'var(--font-body)' }}
            >
              Get a Free Quote
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M7.5 4.5L11 7l-3.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
            <a
              href="tel:+353852768556"
              className="text-sm font-medium cursor-pointer hover:text-white transition-colors"
              style={{ color: 'var(--fg-secondary)', fontFamily: 'var(--font-body)' }}
            >
              or call +353 85 276 8556
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
