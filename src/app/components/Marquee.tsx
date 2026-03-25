'use client'

import { motion, useReducedMotion } from 'framer-motion'

const items = [
  'Wedding Films',
  'Highlight Reels',
  'Feature Films',
  'Commercial Edits',
  'Real Estate',
  'Corporate Events',
  'Documentary Edits',
  'Multicam Syncing',
  'Colour Grading',
  'Private Events',
]

const Divider = () => (
  <span
    className="mx-6 flex-shrink-0"
    style={{ color: 'var(--accent)', opacity: 0.5 }}
    aria-hidden="true"
  >
    /
  </span>
)

export default function Marquee() {
  const shouldReduce = useReducedMotion()
  const repeated = [...items, ...items, ...items]

  return (
    <div
      className="relative overflow-hidden py-5"
      style={{
        background: 'var(--bg-card)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
      aria-hidden="true"
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, var(--bg-card), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(-90deg, var(--bg-card), transparent)' }}
      />
      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={shouldReduce ? {} : { x: ['0%', '-33.33%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center text-xs font-medium tracking-widest uppercase flex-shrink-0"
            style={{ color: 'var(--fg-muted)' }}
          >
            {item}
            <Divider />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
