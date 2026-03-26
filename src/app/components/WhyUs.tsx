'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

const reasons = [
  { title: 'Fast Turnaround', desc: 'Most edits delivered within 48–72 hours. We know your clients are waiting.' },
  { title: 'Cinema-Grade Quality', desc: 'Professional colour grading, audio sweetening, and seamless storytelling — every time.' },
  { title: 'Scale Effortlessly', desc: 'Book more shoots. Take on more clients. We handle the editing bottleneck for you.' },
  { title: 'Your Style, Always', desc: 'We learn your editing style and replicate it exactly. Your clients will never know we exist.' },
  { title: 'Simple Workflow', desc: 'No complex tools or onboarding. Just send footage, get back a polished edit.' },
  { title: 'Dedicated Support', desc: 'Based in Ireland with US coverage — always reachable by phone or email.' },
]

export default function WhyUs() {
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
            Why ClicksEdit
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.1, ease: EASE }}
            className="text-4xl sm:text-6xl font-semibold leading-tight"
            style={{ color: 'var(--fg)', letterSpacing: '-0.03em' }}
          >
            We edit. You grow.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => {
            const ref = useRef<HTMLDivElement>(null)
            const rInView = useInView(ref, { once: true, margin: '-50px' })

            return (
              <motion.div
                key={r.title}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={rInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.55, delay: (i % 3) * 0.08, ease: EASE }}
                className="flex flex-col gap-3 p-8 rounded-3xl"
                style={{ background: 'var(--bg-alt)' }}
              >
                <h3 className="text-lg font-semibold" style={{ color: 'var(--fg)', letterSpacing: '-0.01em' }}>
                  {r.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
                  {r.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
