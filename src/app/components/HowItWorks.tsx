'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

const steps = [
  {
    step: '01',
    title: 'Send Your Footage',
    desc: 'Upload your raw files via our simple transfer link. Include your brief, music choice, and any notes. No complex onboarding.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'We Edit',
    desc: 'Our editors get to work — cutting, grading, and perfecting every frame to match your style and your client\'s vision.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.5 4h-5L7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-3l-2.5-3z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'You Deliver',
    desc: 'Receive your polished edit ready for client delivery. Request revisions anytime — we\'re your invisible team until it\'s perfect.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const titleRef = useRef<HTMLDivElement>(null)
  const inView = useInView(titleRef, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()

  return (
    <section
      id="how-it-works"
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
            The Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.1, ease: EASE }}
            className="text-4xl sm:text-5xl font-bold leading-tight mx-auto"
            style={{ color: 'var(--fg)' }}
          >
            Simple. Fast.{' '}
            <span style={{ color: 'var(--accent)' }}>Invisible.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block absolute top-9 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px"
            style={{ background: 'linear-gradient(90deg, var(--border), var(--accent-dim), var(--border))' }}
            aria-hidden="true"
          />

          {steps.map((step, i) => {
            const ref = useRef<HTMLDivElement>(null)
            const stepInView = useInView(ref, { once: true, margin: '-50px' })

            return (
              <motion.div
                key={step.step}
                ref={ref}
                initial={{ opacity: 0, y: 32 }}
                animate={stepInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.6, delay: i * 0.15, ease: EASE }}
                className="flex flex-col gap-5"
              >
                {/* Icon circle */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                  style={{
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-strong)',
                    color: 'var(--accent)',
                  }}
                >
                  {step.icon}
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold tracking-widest" style={{ color: 'var(--accent)' }}>
                    Step {step.step}
                  </span>
                  <h3 className="text-xl font-bold" style={{ color: 'var(--fg)' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed font-light" style={{ color: 'var(--fg-muted)' }}>
                    {step.desc}
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
