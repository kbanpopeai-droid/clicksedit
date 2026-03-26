'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()

  return (
    <section className="py-6 px-6" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: shouldReduce ? 0 : 0.7, ease: EASE }}
          className="rounded-3xl px-8 py-20 text-center flex flex-col items-center gap-6"
          style={{ background: 'var(--fg)' }}
        >
          <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Now Accepting New Clients
          </p>
          <h2
            className="text-4xl sm:text-6xl font-semibold leading-tight max-w-2xl"
            style={{ color: '#fff', letterSpacing: '-0.03em' }}
          >
            Stop spending days editing. Start scaling your studio.
          </h2>
          <p className="text-lg max-w-md" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Send us your first project — no commitment, no contract.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <motion.a
              href="#contact"
              whileHover={{ opacity: 0.88 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="px-8 py-3.5 rounded-full text-base font-medium cursor-pointer"
              style={{ background: '#fff', color: 'var(--fg)' }}
            >
              Get a free quote
            </motion.a>
            <a
              href="tel:+353852768556"
              className="text-sm cursor-pointer"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              or call +353 85 276 8556
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
