'use client'

import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const
const links = ['Services', 'How It Works', 'Pricing', 'Contact']

export default function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40))

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(7,7,10,0.88)' : 'rgba(7,7,10,0)',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Wordmark */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex items-center gap-2.5 cursor-pointer group"
            aria-label="ClicksEdit home"
          >
            {/* Logomark */}
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'var(--accent)' }}
            >
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true">
                <path d="M2 1.5L10.5 7L2 12.5V1.5Z" fill="white" />
              </svg>
            </div>
            <span
              className="text-base font-semibold tracking-tight"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--fg)',
                letterSpacing: '-0.01em',
              }}
            >
              Clicks<span style={{ color: 'var(--accent)' }}>Edit</span>
            </span>
          </motion.a>

          {/* Desktop links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="hidden md:flex items-center gap-1"
          >
            {links.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="relative px-4 py-1.5 rounded-full text-sm cursor-pointer transition-colors duration-150"
                style={{ color: 'var(--fg-secondary)' }}
                whileHover={{ color: 'var(--fg)', backgroundColor: 'rgba(255,255,255,0.06)' }}
              >
                {link}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, boxShadow: '0 0 20px var(--accent-glow)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="ml-3 px-5 py-2 rounded-full text-sm font-semibold cursor-pointer"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              Get a Quote
            </motion.a>
          </motion.div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 cursor-pointer" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
              {open ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 3L15 15M15 3L3 15" stroke="var(--fg)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 5h14M2 9h14M2 13h14" stroke="var(--fg)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -8, pointerEvents: open ? 'auto' : 'none' }}
        transition={{ duration: 0.22, ease: EASE }}
        className="fixed top-16 left-0 right-0 z-40 md:hidden flex flex-col gap-1 px-4 py-4"
        style={{ background: 'rgba(7,7,10,0.97)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)' }}
      >
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => setOpen(false)}
            className="px-4 py-3 rounded-xl text-sm cursor-pointer"
            style={{ color: 'var(--fg-secondary)' }}
          >
            {link}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-2 px-4 py-3 rounded-full text-sm font-semibold text-center cursor-pointer"
          style={{ background: 'var(--accent)', color: '#fff' }}
        >
          Get a Quote
        </a>
      </motion.div>
    </>
  )
}
