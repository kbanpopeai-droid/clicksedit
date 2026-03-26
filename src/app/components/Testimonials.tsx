'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

const testimonials = [
  {
    quote: "ClicksEdit completely transformed my business. I used to spend 3 days editing every wedding — now I get polished films back in 48 hours and I've doubled my bookings.",
    name: 'Liam Connors',
    role: 'Wedding Videographer',
    location: 'Dublin, Ireland',
    initials: 'LC',
    gradient: 'linear-gradient(135deg, #f97316, #fb923c)',
  },
  {
    quote: "The quality is indistinguishable from my own edits. My clients have no idea I outsource — they just keep telling me how stunning their films are.",
    name: 'Sarah Mitchell',
    role: 'Creative Filmmaker',
    location: 'London, UK',
    initials: 'SM',
    gradient: 'linear-gradient(135deg, #a78bfa, #c084fc)',
  },
  {
    quote: "After the first highlight reel I was sold. Fast, professional, and they actually listen to my brief. A genuine game changer for scaling my studio.",
    name: "Marco D'Angelo",
    role: 'Event Videographer',
    location: 'New York, US',
    initials: 'MD',
    gradient: 'linear-gradient(135deg, #38bdf8, #7dd3fc)',
  },
]

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 13 13" fill="var(--accent)" aria-hidden="true">
          <path d="M6.5 1l1.6 3.3 3.6.5-2.6 2.5.6 3.6L6.5 9.2 3.3 10.9l.6-3.6L1.3 4.8l3.6-.5L6.5 1z" />
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
        <div ref={titleRef} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, ease: EASE }}
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-body)' }}
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.1, ease: EASE }}
            className="text-4xl sm:text-6xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)', letterSpacing: '-0.02em' }}
          >
            Videographers who<br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>trust us.</em>
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
                initial={{ opacity: 0, y: 24 }}
                animate={tInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.65, delay: i * 0.12, ease: EASE }}
                className="relative flex flex-col gap-5 p-7 rounded-2xl overflow-hidden"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              >
                {/* Decorative quote mark */}
                <div
                  className="absolute top-4 right-5 text-8xl font-black pointer-events-none select-none leading-none"
                  style={{ color: 'rgba(249,115,22,0.07)', fontFamily: 'Georgia, serif', lineHeight: 1 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                <Stars />

                <blockquote
                  className="relative text-base leading-relaxed flex-1 z-10"
                  style={{ color: 'var(--fg-secondary)', fontFamily: 'var(--font-body)' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-4 z-10" style={{ borderTop: '1px solid var(--border)' }}>
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: t.gradient, color: '#fff' }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--fg)', fontFamily: 'var(--font-body)' }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--fg-secondary)' }}>
                      {t.role} · {t.location}
                    </p>
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
