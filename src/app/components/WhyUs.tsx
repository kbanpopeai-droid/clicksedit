'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

const reasons = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Fast Turnaround',
    desc: 'Most edits delivered within 48–72 hours. We know your clients are waiting.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L12.4 7.5H18.2L13.7 11L15.4 17L10 13.5L4.6 17L6.3 11L1.8 7.5H7.6L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Cinema-Grade Quality',
    desc: 'Professional colour grading, audio sweetening, and seamless storytelling — every time.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M17 3H3a1 1 0 00-1 1v11a1 1 0 001 1h14a1 1 0 001-1V4a1 1 0 00-1-1z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 8h14M8 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Scale Effortlessly',
    desc: 'Book more shoots. Take on more clients. We handle the editing bottleneck for you.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 18c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Your Style, Always',
    desc: 'We learn your editing style and replicate it exactly. Your clients will never know we exist.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 10h14M3 5h14M3 15h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Simple Workflow',
    desc: 'No complex tools or onboarding. Just send footage, get back a polished edit.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M16 8A6 6 0 116 8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 10v4M8 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Dedicated Support',
    desc: 'Reach us by email or phone. We\'re based in Ireland with US coverage — always reachable.',
  },
]

export default function WhyUs() {
  const titleRef = useRef<HTMLDivElement>(null)
  const inView = useInView(titleRef, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()

  return (
    <section
      className="py-28 px-6"
      style={{ background: 'var(--bg-card)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, ease: EASE }}
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: 'var(--accent)' }}
          >
            Why ClicksEdit
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.1, ease: EASE }}
            className="text-4xl sm:text-5xl font-bold leading-tight mx-auto"
            style={{ color: 'var(--fg)' }}
          >
            We edit. <span style={{ color: 'var(--accent)' }}>You grow.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => {
            const ref = useRef<HTMLDivElement>(null)
            const rInView = useInView(ref, { once: true, margin: '-50px' })

            return (
              <motion.div
                key={r.title}
                ref={ref}
                initial={{ opacity: 0, y: 24 }}
                animate={rInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.55, delay: (i % 3) * 0.08, ease: EASE }}
                className="flex flex-col gap-4 p-6 rounded-xl"
                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'var(--accent-dim)', color: 'var(--accent)', border: '1px solid rgba(255,69,0,0.2)' }}
                >
                  {r.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1.5" style={{ color: 'var(--fg)' }}>
                    {r.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                    {r.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
