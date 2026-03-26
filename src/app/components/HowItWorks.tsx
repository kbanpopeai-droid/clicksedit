'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

const steps = [
  {
    step: '01',
    title: 'Send Your Footage',
    desc: 'Upload your raw files via WeTransfer, Google Drive, or Dropbox. Include your brief, music choice, and any style notes.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M24 18v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5M19 9l-5-5-5 5M14 4v16" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'We Edit',
    desc: 'Our editors cut, colour grade, and perfect every frame to match your style and your client\'s vision.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="22" height="16" rx="2" stroke="var(--accent)" strokeWidth="1.6" />
        <circle cx="14" cy="14" r="4" stroke="var(--accent)" strokeWidth="1.6" />
        <path d="M14 10v-2M14 18v2M10 14H8M20 14h-2" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'You Deliver',
    desc: 'Receive your polished edit ready for client delivery. Request revisions anytime — we\'re your invisible team.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M5 14l7 7L23 8" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const titleRef = useRef<HTMLDivElement>(null)
  const inView = useInView(titleRef, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()

  return (
    <section id="how-it-works" className="py-28 px-6" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, ease: EASE }}
            className="text-sm font-medium mb-4"
            style={{ color: 'var(--accent)' }}
          >
            The Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.1, ease: EASE }}
            className="text-4xl sm:text-6xl font-semibold leading-tight"
            style={{ color: 'var(--fg)', letterSpacing: '-0.03em' }}
          >
            Simple. Fast. Invisible.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const ref = useRef<HTMLDivElement>(null)
            const stepInView = useInView(ref, { once: true, margin: '-50px' })

            return (
              <motion.div
                key={step.step}
                ref={ref}
                initial={{ opacity: 0, y: 24 }}
                animate={stepInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.6, delay: i * 0.12, ease: EASE }}
                className="flex flex-col gap-5 p-8 rounded-3xl"
                style={{ background: 'var(--bg)' }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(0,113,227,0.08)' }}
                >
                  {step.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold mb-2" style={{ color: 'var(--fg-tertiary)' }}>
                    Step {step.step}
                  </p>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--fg)', letterSpacing: '-0.02em' }}>
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
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
