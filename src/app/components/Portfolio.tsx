'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

const works = [
  {
    label: 'Wedding Highlight', title: 'Emma & James', subtitle: 'Kilkenny Castle', duration: '4:32',
    category: 'Wedding',
    bg: 'linear-gradient(135deg, #1a0f00 0%, #3d2000 40%, #1a0800 100%)',
    glow: 'rgba(249,115,22,0.15)',
  },
  {
    label: 'Feature Film', title: 'Sophie & Conor', subtitle: 'Waterford City', duration: '18:45',
    category: 'Wedding',
    bg: 'linear-gradient(135deg, #0a0018 0%, #1e0040 40%, #0d0020 100%)',
    glow: 'rgba(167,139,250,0.15)',
  },
  {
    label: 'Corporate Event', title: 'TechSummit Dublin', subtitle: '2024', duration: '6:12',
    category: 'Commercial',
    bg: 'linear-gradient(135deg, #000d1a 0%, #002040 40%, #000d20 100%)',
    glow: 'rgba(56,189,248,0.15)',
  },
  {
    label: 'Real Estate', title: 'Cliffside Manor', subtitle: 'Wicklow', duration: '3:20',
    category: 'Commercial',
    bg: 'linear-gradient(135deg, #0a0a00 0%, #1a1a00 40%, #0d0d00 100%)',
    glow: 'rgba(250,204,21,0.15)',
  },
  {
    label: 'Documentary', title: 'Sarah & Tom', subtitle: 'Full Day Story', duration: '52:00',
    category: 'Documentary',
    bg: 'linear-gradient(135deg, #0d0005 0%, #280015 40%, #140008 100%)',
    glow: 'rgba(244,114,182,0.15)',
  },
  {
    label: 'Private Event', title: 'Kavanagh Celebration', subtitle: 'Dublin', duration: '8:55',
    category: 'Commercial',
    bg: 'linear-gradient(135deg, #000a0d 0%, #001a20 40%, #000d12 100%)',
    glow: 'rgba(52,211,153,0.15)',
  },
]

export default function Portfolio() {
  const titleRef = useRef<HTMLDivElement>(null)
  const inView = useInView(titleRef, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()

  return (
    <section className="py-28 px-6" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, ease: EASE }}
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
          >
            Our Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.1, ease: EASE }}
            className="text-4xl sm:text-6xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)', letterSpacing: '-0.02em' }}
          >
            Films we&apos;ve<br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>crafted.</em>
          </motion.h2>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.2, ease: EASE }}
            whileHover={{ color: 'var(--fg)' }}
            className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium cursor-pointer"
            style={{ color: 'var(--fg-secondary)', fontFamily: 'var(--font-body)' }}
          >
            Request sample reels
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M7.5 4.5L11 7l-3.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {works.map((work, i) => {
            const ref = useRef<HTMLDivElement>(null)
            const wInView = useInView(ref, { once: true, margin: '-50px' })

            return (
              <motion.div
                key={work.title}
                ref={ref}
                initial={{ opacity: 0, y: 24 }}
                animate={wInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.6, delay: (i % 3) * 0.08, ease: EASE }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: '16/9', background: work.bg }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 24px 60px ${work.glow}` }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
              >
                {/* Subtle film grain on each card */}
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Category pill */}
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(0,0,0,0.55)', color: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  {work.category}
                </div>

                {/* Duration pill */}
                <div
                  className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs"
                  style={{ background: 'rgba(0,0,0,0.55)', color: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(10px)' }}
                >
                  {work.duration}
                </div>

                {/* Play button — styled, branded */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full"
                    style={{
                      background: 'rgba(249,115,22,0.15)',
                      border: '1px solid rgba(249,115,22,0.4)',
                      backdropFilter: 'blur(12px)',
                    }}
                    whileHover={{ scale: 1.08, background: 'rgba(249,115,22,0.28)' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.18 }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 1.5L12.5 7L3 12.5V1.5Z" fill="var(--accent)" />
                    </svg>
                    <span className="text-xs font-semibold" style={{ color: 'var(--accent)' }}>
                      Play Reel
                    </span>
                  </motion.div>
                </div>

                {/* Info bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)' }}
                >
                  <div className="text-xs font-medium mb-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {work.label}
                  </div>
                  <div className="text-base font-bold leading-tight" style={{ color: '#fff', fontFamily: 'var(--font-display)' }}>
                    {work.title}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {work.subtitle}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: 'var(--fg-dim)', fontFamily: 'var(--font-body)' }}>
          Sample reels available on request — contact us with your project type.
        </p>
      </div>
    </section>
  )
}
