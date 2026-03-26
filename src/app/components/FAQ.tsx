'use client'

import { motion, useInView, useReducedMotion, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

const faqs = [
  { q: 'How do I send my footage?', a: 'We provide a secure upload link via WeTransfer, Google Drive, or Dropbox — whichever you prefer. Once we receive your files and brief, we get straight to work.' },
  { q: 'What is your typical turnaround time?', a: 'Most highlight films are returned within 48–72 hours. Feature films take 5–7 days, and documentary edits 10–14 days. Rush delivery is available on request.' },
  { q: 'How many revisions are included?', a: 'Each package includes 2–3 rounds of revisions. We work with you until you\'re completely happy with the result.' },
  { q: 'Will the edit match my style?', a: 'Absolutely. We ask for sample edits and a detailed style brief before we start. Over time, we learn your preferences and the edits become indistinguishable from your own work.' },
  { q: 'What formats do you deliver in?', a: 'We deliver in H.264/H.265 MP4 optimised for web delivery, or ProRes for archival quality. We match whatever format your clients expect.' },
  { q: 'Do you offer retainer or bulk packages?', a: 'Yes — if you have consistent volume (4+ edits/month), we offer discounted retainer packages. Get in touch and we\'ll build a custom arrangement.' },
]

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: shouldReduce ? 0 : 0.5, delay: index * 0.05, ease: EASE }}
      style={{ borderBottom: '1px solid var(--border-light)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-base font-medium" style={{ color: 'var(--fg)' }}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
          style={{ background: open ? 'var(--accent)' : 'var(--bg-alt)' }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M5 2V8M2 5H8" stroke={open ? '#fff' : 'var(--fg)'} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            style={{ overflow: 'hidden' }}
          >
            <p className="pb-5 text-base leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const titleRef = useRef<HTMLDivElement>(null)
  const inView = useInView(titleRef, { once: true, margin: '-80px' })
  const shouldReduce = useReducedMotion()

  return (
    <section className="py-28 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-3xl mx-auto">
        <div ref={titleRef} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, ease: EASE }}
            className="text-sm font-medium mb-4"
            style={{ color: 'var(--accent)' }}
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.1, ease: EASE }}
            className="text-4xl sm:text-6xl font-semibold leading-tight"
            style={{ color: 'var(--fg)', letterSpacing: '-0.03em' }}
          >
            Common questions.
          </motion.h2>
        </div>

        <div style={{ borderTop: '1px solid var(--border-light)' }}>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
