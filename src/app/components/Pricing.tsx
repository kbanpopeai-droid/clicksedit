'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

const plans = [
  {
    name: 'Highlight',
    price: 'From €149',
    desc: 'Perfect for wedding highlight films and short commercial reels.',
    features: ['Up to 8 minutes finished film', 'Music sync & colour grade', '2 rounds of revisions', '5-day turnaround', 'Delivery via cloud link'],
    highlight: false,
  },
  {
    name: 'Feature',
    price: 'From €299',
    desc: 'Full wedding films and detailed commercial projects.',
    features: ['Up to 20 minutes finished film', 'Full colour grade & audio mix', '3 rounds of revisions', '7-day turnaround', 'Multicam sync included', 'Priority support'],
    highlight: true,
  },
  {
    name: 'Documentary',
    price: 'From €499',
    desc: 'Long-form documentary edits and custom bespoke projects.',
    features: ['45–90+ min finished edit', 'Full post-production suite', 'Unlimited revisions', '14-day turnaround', 'Dedicated editor assigned', 'Motion graphics included'],
    highlight: false,
  },
]

export default function Pricing() {
  const titleRef = useRef<HTMLDivElement>(null)
  const inView = useInView(titleRef, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()

  return (
    <section id="pricing" className="py-28 px-6" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-5xl mx-auto">
        <div ref={titleRef} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, ease: EASE }}
            className="text-sm font-medium mb-4"
            style={{ color: 'var(--accent)' }}
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.1, ease: EASE }}
            className="text-4xl sm:text-6xl font-semibold leading-tight"
            style={{ color: 'var(--fg)', letterSpacing: '-0.03em' }}
          >
            Transparent pricing.<br />No surprises.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.2, ease: EASE }}
            className="mt-4 text-lg max-w-md mx-auto"
            style={{ color: 'var(--fg-secondary)' }}
          >
            Custom quotes available for bulk orders and ongoing retainer packages.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {plans.map((plan, i) => {
            const ref = useRef<HTMLDivElement>(null)
            const planInView = useInView(ref, { once: true, margin: '-50px' })

            return (
              <motion.div
                key={plan.name}
                ref={ref}
                initial={{ opacity: 0, y: 24 }}
                animate={planInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.6, delay: i * 0.1, ease: EASE }}
                className="relative flex flex-col gap-6 p-8 rounded-3xl"
                style={{
                  background: plan.highlight ? 'var(--fg)' : 'var(--bg)',
                  border: plan.highlight ? 'none' : '1px solid var(--border-light)',
                }}
              >
                {plan.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold"
                    style={{ background: 'var(--accent)', color: '#fff' }}
                  >
                    Most Popular
                  </div>
                )}

                <div>
                  <p className="text-sm font-semibold mb-1"
                    style={{ color: plan.highlight ? 'rgba(255,255,255,0.6)' : 'var(--fg-tertiary)' }}>
                    {plan.name}
                  </p>
                  <p className="text-3xl font-semibold"
                    style={{ color: plan.highlight ? '#fff' : 'var(--fg)', letterSpacing: '-0.02em' }}>
                    {plan.price}
                  </p>
                  <p className="text-sm mt-2"
                    style={{ color: plan.highlight ? 'rgba(255,255,255,0.6)' : 'var(--fg-secondary)' }}>
                    {plan.desc}
                  </p>
                </div>

                <div className="h-px" style={{ background: plan.highlight ? 'rgba(255,255,255,0.15)' : 'var(--border-light)' }} />

                <ul className="flex flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm"
                      style={{ color: plan.highlight ? 'rgba(255,255,255,0.75)' : 'var(--fg-secondary)' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                        <path d="M2.5 7L5.5 10L11.5 4"
                          stroke={plan.highlight ? 'rgba(255,255,255,0.8)' : 'var(--accent)'}
                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  whileHover={{ opacity: 0.88 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="mt-auto block text-center py-3 rounded-full text-sm font-medium cursor-pointer"
                  style={{
                    background: plan.highlight ? '#fff' : 'var(--accent)',
                    color: plan.highlight ? 'var(--fg)' : '#fff',
                  }}
                >
                  Get Started
                </motion.a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
