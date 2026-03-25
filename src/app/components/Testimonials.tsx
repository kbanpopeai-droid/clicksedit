'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

const testimonials = [
  {
    quote: "ClicksEdit completely transformed my business. I used to spend 3 days editing every wedding — now I get polished films back in 48 hours and I've doubled my bookings.",
    name: 'Liam Connors',
    role: 'Wedding Videographer, Dublin',
    initials: 'LC',
    color: '#FF4500',
  },
  {
    quote: "The quality is indistinguishable from my own edits. My clients have no idea I outsource — they just keep telling me how stunning their films are. Couldn't recommend more.",
    name: 'Sarah Mitchell',
    role: 'Creative Filmmaker, London',
    initials: 'SM',
    color: '#FF6B35',
  },
  {
    quote: "I was skeptical at first, but after the first highlight reel I was sold. Fast, professional, and they actually listen to my style brief. Game changer for scaling my studio.",
    name: 'Marco D\'Angelo',
    role: 'Event Videographer, New York',
    initials: 'MD',
    color: '#FF8C42',
  },
]

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#FF4500" aria-hidden="true">
          <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L7 1z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const titleRef = useRef<HTMLDivElement>(null)
  const inView = useInView(titleRef, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()

  return (
    <section className="py-28 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, ease: EASE }}
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: 'var(--accent)' }}
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.1, ease: EASE }}
            className="text-4xl sm:text-5xl font-bold leading-tight"
            style={{ color: 'var(--fg)' }}
          >
            Videographers who{' '}
            <span style={{ color: 'var(--accent)' }}>trust us.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => {
            const ref = useRef<HTMLDivElement>(null)
            const tInView = useInView(ref, { once: true, margin: '-50px' })

            return (
              <motion.div
                key={t.name}
                ref={ref}
                initial={{ opacity: 0, y: 32 }}
                animate={tInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.65, delay: i * 0.12, ease: EASE }}
                className="flex flex-col gap-6 p-8 rounded-2xl"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                }}
              >
                <Stars />

                {/* Quote */}
                <blockquote
                  className="text-sm leading-relaxed font-light flex-1"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2" style={{ borderTop: '1px solid var(--border)' }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: `${t.color}20`, color: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>
                      {t.name}
                    </div>
                    <div className="text-xs" style={{ color: 'var(--fg-muted)' }}>
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
