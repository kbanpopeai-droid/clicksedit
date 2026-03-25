'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()

  return (
    <section className="py-6 px-6" style={{ background: 'var(--bg-card)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduce ? 0 : 0.7, ease: EASE }}
          className="relative overflow-hidden rounded-3xl px-8 py-16 sm:px-16 flex flex-col sm:flex-row items-center justify-between gap-8"
          style={{
            background: 'linear-gradient(135deg, #1a0800 0%, #2d0f00 50%, #1a0800 100%)',
            border: '1px solid rgba(255,69,0,0.2)',
          }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255,69,0,0.08) 0%, transparent 70%)' }}
            aria-hidden="true"
          />

          {/* Left */}
          <div className="relative z-10 flex flex-col gap-3 text-center sm:text-left">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase w-fit mx-auto sm:mx-0"
              style={{ background: 'rgba(255,69,0,0.15)', color: 'var(--accent)', border: '1px solid rgba(255,69,0,0.25)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              Now Accepting New Clients
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: 'var(--fg)' }}>
              Stop spending days editing.<br />
              <span style={{ color: 'var(--accent)' }}>Start scaling your studio.</span>
            </h2>
            <p className="text-sm font-light" style={{ color: 'var(--fg-muted)' }}>
              Send us your first project — no commitment, no contract.
            </p>
          </div>

          {/* Right */}
          <div className="relative z-10 flex flex-col items-center gap-3 flex-shrink-0">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 48px rgba(255,69,0,0.5)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm cursor-pointer whitespace-nowrap"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              Get a Free Quote
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
            <a
              href="tel:+353852768556"
              className="text-xs cursor-pointer transition-colors hover:text-white"
              style={{ color: 'var(--fg-muted)' }}
            >
              or call +353 85 276 8556
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
