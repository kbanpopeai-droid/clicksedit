'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

const works = [
  { label: 'Wedding Highlight', title: 'Emma & James — Kilkenny Castle', duration: '4:32', category: 'Wedding' },
  { label: 'Feature Film', title: 'Sophie & Conor — Waterford City', duration: '18:45', category: 'Wedding' },
  { label: 'Corporate Event', title: 'TechSummit Dublin 2024', duration: '6:12', category: 'Commercial' },
  { label: 'Real Estate', title: 'Cliffside Manor — Wicklow', duration: '3:20', category: 'Commercial' },
  { label: 'Documentary', title: 'Sarah & Tom — Full Day Story', duration: '52:00', category: 'Documentary' },
  { label: 'Private Event', title: 'Kavanagh Bar Mitzvah', duration: '8:55', category: 'Commercial' },
]

const gradients = [
  'linear-gradient(135deg, #1a0a00 0%, #3d1500 100%)',
  'linear-gradient(135deg, #0a0010 0%, #1e0035 100%)',
  'linear-gradient(135deg, #000d1a 0%, #00213d 100%)',
  'linear-gradient(135deg, #0a0a00 0%, #1f1f00 100%)',
  'linear-gradient(135deg, #0d0005 0%, #280010 100%)',
  'linear-gradient(135deg, #000a0d 0%, #00202a 100%)',
]

function PlayIcon() {
  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center"
      style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M4 3L13 8L4 13V3Z" fill="white" />
      </svg>
    </div>
  )
}

export default function Portfolio() {
  const titleRef = useRef<HTMLDivElement>(null)
  const inView = useInView(titleRef, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()

  return (
    <section className="py-28 px-6" style={{ background: 'var(--bg-card)' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.5, ease: EASE }}
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: 'var(--accent)' }}
            >
              Our Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.1, ease: EASE }}
              className="text-4xl sm:text-5xl font-bold leading-tight"
              style={{ color: 'var(--fg)' }}
            >
              Films we&apos;ve{' '}
              <span style={{ color: 'var(--accent)' }}>crafted.</span>
            </motion.h2>
          </div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.2, ease: EASE }}
            whileHover={{ color: '#fff' }}
            className="text-sm font-medium flex items-center gap-2 flex-shrink-0 cursor-pointer"
            style={{ color: 'var(--fg-muted)' }}
          >
            Request sample reels
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
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
                initial={{ opacity: 0, y: 28 }}
                animate={wInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.6, delay: (i % 3) * 0.1, ease: EASE }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: '16/9', background: gradients[i] }}
              >
                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(255,69,0,0.08)' }}
                />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <PlayIcon />
                  </motion.div>
                </div>

                {/* Category badge */}
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{ background: 'rgba(0,0,0,0.5)', color: 'var(--accent)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,69,0,0.2)' }}
                >
                  {work.category}
                </div>

                {/* Duration */}
                <div
                  className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{ background: 'rgba(0,0,0,0.5)', color: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)' }}
                >
                  {work.duration}
                </div>

                {/* Info */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
                >
                  <div className="text-xs font-medium mb-1" style={{ color: 'var(--accent)' }}>
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

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.5, ease: EASE }}
          className="text-center text-xs mt-8"
          style={{ color: 'var(--fg-dim)' }}
        >
          Sample reels available on request — contact us with your project type.
        </motion.p>
      </div>
    </section>
  )
}
