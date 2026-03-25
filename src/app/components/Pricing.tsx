'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

const plans = [
  {
    name: 'Highlight',
    price: 'From €149',
    desc: 'Perfect for wedding highlight films and short commercial reels.',
    features: [
      'Up to 8 minutes finished film',
      'Music sync & colour grade',
      '2 rounds of revisions',
      '5-day turnaround',
      'Delivery via cloud link',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Feature',
    price: 'From €299',
    desc: 'Full wedding films and detailed commercial projects. Our most popular package.',
    features: [
      'Up to 20 minutes finished film',
      'Full colour grade & audio mix',
      '3 rounds of revisions',
      '7-day turnaround',
      'Multicam sync included',
      'Priority support',
    ],
    cta: 'Most Popular',
    highlight: true,
  },
  {
    name: 'Documentary',
    price: 'From €499',
    desc: 'Long-form documentary edits and custom bespoke projects.',
    features: [
      '45–90+ min finished edit',
      'Full post-production suite',
      'Unlimited revisions',
      '14-day turnaround',
      'Dedicated editor assigned',
      'Motion graphics included',
    ],
    cta: 'Get Started',
    highlight: false,
  },
]

export default function Pricing() {
  const titleRef = useRef<HTMLDivElement>(null)
  const inView = useInView(titleRef, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()

  return (
    <section id="pricing" className="py-28 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, ease: EASE }}
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: 'var(--accent)' }}
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.1, ease: EASE }}
            className="text-4xl sm:text-5xl font-bold leading-tight"
            style={{ color: 'var(--fg)' }}
          >
            Transparent pricing.
            <br />
            <span style={{ color: 'var(--accent)' }}>No surprises.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.2, ease: EASE }}
            className="mt-4 text-sm font-light max-w-md mx-auto"
            style={{ color: 'var(--fg-muted)' }}
          >
            Custom quotes available for bulk orders, ongoing retainer packages, and international clients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => {
            const ref = useRef<HTMLDivElement>(null)
            const planInView = useInView(ref, { once: true, margin: '-50px' })

            return (
              <motion.div
                key={plan.name}
                ref={ref}
                initial={{ opacity: 0, y: 32 }}
                animate={planInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.6, delay: i * 0.1, ease: EASE }}
                className="relative flex flex-col gap-6 p-8 rounded-2xl"
                style={{
                  background: plan.highlight ? 'var(--bg-elevated)' : 'var(--bg-card)',
                  border: plan.highlight ? '1px solid rgba(255,69,0,0.4)' : '1px solid var(--border)',
                  boxShadow: plan.highlight ? '0 0 60px rgba(255,69,0,0.1)' : 'none',
                }}
              >
                {plan.highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                    style={{ background: 'var(--accent)', color: '#fff' }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: 'var(--accent)' }}>
                    {plan.name}
                  </span>
                  <div className="text-3xl font-bold" style={{ color: 'var(--fg)' }}>
                    {plan.price}
                  </div>
                  <p className="text-sm font-light" style={{ color: 'var(--fg-muted)' }}>
                    {plan.desc}
                  </p>
                </div>

                <div className="h-px w-full" style={{ background: 'var(--border)' }} />

                <ul className="flex flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-light" style={{ color: 'var(--fg-muted)' }}>
                      <span
                        className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(255,69,0,0.15)', color: 'var(--accent)' }}
                      >
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                          <path d="M2 4L3.5 5.5L6 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03, boxShadow: plan.highlight ? '0 0 30px var(--accent-glow)' : 'none' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  className="mt-auto text-center py-3 rounded-full text-sm font-semibold cursor-pointer block"
                  style={{
                    background: plan.highlight ? 'var(--accent)' : 'transparent',
                    color: plan.highlight ? '#fff' : 'var(--fg-muted)',
                    border: plan.highlight ? 'none' : '1px solid var(--border-strong)',
                  }}
                >
                  {plan.highlight ? plan.cta : 'Get Started'}
                </motion.a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
