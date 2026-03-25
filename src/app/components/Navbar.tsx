'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const
const links = ['Services', 'How It Works', 'Pricing', 'Contact']

export default function Navbar() {
  const { scrollY } = useScroll()
  const bg = useTransform(scrollY, [0, 80], ['rgba(8,8,8,0)', 'rgba(8,8,8,0.92)'])
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.nav
        style={{ backgroundColor: bg, backdropFilter: 'blur(16px)' }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex items-center gap-2.5 cursor-pointer"
            aria-label="ClicksEdit home"
          >
            <div
              className="w-7 h-7 rounded flex items-center justify-center"
              style={{ background: 'var(--accent)' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 3L11 7L3 11V3Z" fill="white" />
              </svg>
            </div>
            <span className="text-white font-semibold tracking-tight text-base">
              Clicks<span style={{ color: 'var(--accent)' }}>Edit</span>
            </span>
          </motion.a>

          {/* Desktop links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="hidden md:flex items-center gap-8"
          >
            {links.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                whileHover={{ color: '#ffffff' }}
                transition={{ duration: 0.15 }}
                className="text-sm cursor-pointer"
                style={{ color: 'var(--fg-muted)' }}
              >
                {link}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, boxShadow: '0 0 28px var(--accent-glow)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="text-sm font-semibold px-5 py-2.5 rounded-full cursor-pointer"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              Get a Quote
            </motion.a>
          </motion.div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
              className="block w-5 h-px bg-white"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="block w-5 h-px bg-white"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
              className="block w-5 h-px bg-white"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -8 }}
        transition={{ duration: 0.25, ease: EASE }}
        className="fixed top-16 left-0 right-0 z-40 md:hidden"
        style={{
          background: 'rgba(8,8,8,0.96)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border)',
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        <div className="flex flex-col px-6 py-6 gap-5">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setOpen(false)}
              className="text-base cursor-pointer"
              style={{ color: 'var(--fg-muted)' }}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold px-5 py-3 rounded-full text-center cursor-pointer"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Get a Quote
          </a>
        </div>
      </motion.div>
    </>
  )
}
