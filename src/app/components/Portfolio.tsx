'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

const works = [
  { label: 'Wedding Highlight', title: 'Emma & James — Kilkenny Castle', duration: '4:32', category: 'Wedding', bg: '#e8e4f0' },
  { label: 'Feature Film', title: 'Sophie & Conor — Waterford City', duration: '18:45', category: 'Wedding', bg: '#e4eef8' },
  { label: 'Corporate Event', title: 'TechSummit Dublin 2024', duration: '6:12', category: 'Commercial', bg: '#e4f0e8' },
  { label: 'Real Estate', title: 'Cliffside Manor — Wicklow', duration: '3:20', category: 'Commercial', bg: '#f0ede4' },
  { label: 'Documentary', title: 'Sarah & Tom — Full Day Story', duration: '52:00', category: 'Documentary', bg: '#f0e4e8' },
  { label: 'Private Event', title: 'Kavanagh Bar Mitzvah', duration: '8:55', category: 'Commercial', bg: '#e4f0f0' },
]

export default function Portfolio() {
  const titleRef = useRef<HTMLDivElement>(null)
  const inView = useInView(titleRef, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()

  return (
    <section className="py-28 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, ease: EASE }}
            className="text-sm font-medium mb-4"
            style={{ color: 'var(--accent)' }}
          >
            Our Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.1, ease: EASE }}
            className="text-4xl sm:text-6xl font-semibold leading-tight"
            style={{ color: 'var(--fg)', letterSpacing: '-0.03em' }}
          >
            Films we&apos;ve crafted.
          </motion.h2>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.2, ease: EASE }}
            whileHover={{ color: 'var(--accent-hover)' }}
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium cursor-pointer"
            style={{ color: 'var(--accent)' }}
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
                initial={{ opacity: 0, y: 20 }}
                animate={wInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.55, delay: (i % 3) * 0.08, ease: EASE }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: '16/9', background: work.bg }}
              >
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M4 2.5L11.5 7L4 11.5V2.5Z" fill="var(--fg)" />
                    </svg>
                  </motion.div>
                </div>

                {/* Category */}
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{ background: 'rgba(255,255,255,0.85)', color: 'var(--fg)', backdropFilter: 'blur(8px)' }}
                >
                  {work.category}
                </div>

                {/* Duration */}
                <div
                  className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs"
                  style={{ background: 'rgba(255,255,255,0.85)', color: 'var(--fg-secondary)', backdropFilter: 'blur(8px)' }}
                >
                  {work.duration}
                </div>

                {/* Info */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.12), transparent)' }}
                >
                  <div className="text-xs font-medium mb-0.5" style={{ color: 'var(--fg-secondary)' }}>
                    {work.label}
                  </div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>
                    {work.title}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: 'var(--fg-tertiary)' }}>
          Sample reels available on request — contact us with your project type.
        </p>
      </div>
    </section>
  )
}
