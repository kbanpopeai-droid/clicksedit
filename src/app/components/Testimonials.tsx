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
  },
  {
    quote: "The quality is indistinguishable from my own edits. My clients have no idea I outsource — they just keep telling me how stunning their films are.",
    name: 'Sarah Mitchell',
    role: 'Creative Filmmaker, London',
    initials: 'SM',
  },
  {
    quote: "After the first highlight reel I was sold. Fast, professional, and they actually listen to my style brief. A game changer for scaling my studio.",
    name: "Marco D'Angelo",
    role: 'Event Videographer, New York',
    initials: 'MD',
  },
]

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="var(--accent)" aria-hidden="true">
          <path d="M6 1l1.5 3.1L11 4.6l-2.5 2.4.6 3.4L6 8.9 2.9 10.4l.6-3.4L1 4.6l3.5-.5L6 1z" />
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
    <section className="py-28 px-6" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, ease: EASE }}
            className="text-sm font-medium mb-4"
            style={{ color: 'var(--accent)' }}
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.1, ease: EASE }}
            className="text-4xl sm:text-6xl font-semibold leading-tight"
            style={{ color: 'var(--fg)', letterSpacing: '-0.03em' }}
          >
            Videographers who trust us.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => {
            const ref = useRef<HTMLDivElement>(null)
            const tInView = useInView(ref, { once: true, margin: '-50px' })

            return (
              <motion.div
                key={t.name}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={tInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.6, delay: i * 0.1, ease: EASE }}
                className="flex flex-col gap-5 p-8 rounded-3xl"
                style={{ background: 'var(--bg)' }}
              >
                <Stars />

                <blockquote className="text-base leading-relaxed flex-1" style={{ color: 'var(--fg-secondary)' }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--border-light)' }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                    style={{ background: 'rgba(0,113,227,0.1)', color: 'var(--accent)' }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>{t.name}</p>
                    <p className="text-xs" style={{ color: 'var(--fg-tertiary)' }}>{t.role}</p>
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
