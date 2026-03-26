'use client'

import { motion, useReducedMotion } from 'framer-motion'

const items = [
  'Wedding Films', 'Highlight Reels', 'Feature Films', 'Commercial Edits',
  'Real Estate', 'Corporate Events', 'Documentary Edits', 'Multicam Syncing',
  'Colour Grading', 'Private Events',
]

export default function Marquee() {
  const shouldReduce = useReducedMotion()
  const repeated = [...items, ...items, ...items]

  return (
    <div
      className="relative overflow-hidden py-6"
      style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      aria-hidden="true"
    >
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, var(--bg-alt), transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(-90deg, var(--bg-alt), transparent)' }} />

      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={shouldReduce ? {} : { x: ['0%', '-33.33%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 text-sm font-medium tracking-widest uppercase flex-shrink-0 px-1"
            style={{ color: 'var(--fg-secondary)', fontFamily: 'var(--font-body)' }}
          >
            {item}
            <span style={{ color: 'var(--accent)', opacity: 0.5 }}>▸</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
