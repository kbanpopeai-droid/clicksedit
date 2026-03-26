'use client'

import { motion, useScroll } from 'framer-motion'
import { useState } from 'react'

const links = ['Services', 'How It Works', 'Pricing', 'Contact']

export default function Navbar() {
  const { scrollY } = useScroll()
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
        }}
      >
        <div className="max-w-5xl mx-auto px-6 h-12 flex items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold cursor-pointer"
            style={{ color: 'var(--fg)' }}
          >
            ClicksEdit
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            {links.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                whileHover={{ color: 'var(--fg)' }}
                transition={{ duration: 0.15 }}
                className="text-xs cursor-pointer"
                style={{ color: 'var(--fg-secondary)' }}
              >
                {link}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ backgroundColor: 'var(--accent-hover)' }}
              transition={{ duration: 0.15 }}
              className="text-xs font-medium px-4 py-1.5 rounded-full cursor-pointer"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              Get a Quote
            </motion.a>
          </motion.div>

          <button
            className="md:hidden p-1 cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {open ? (
                <path d="M3 3L15 15M15 3L3 15" stroke="var(--fg)" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M2 5h14M2 9h14M2 13h14" stroke="var(--fg)" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed top-12 left-0 right-0 z-40 md:hidden px-6 py-6 flex flex-col gap-5"
          style={{
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setOpen(false)}
              className="text-sm cursor-pointer"
              style={{ color: 'var(--fg-secondary)' }}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-sm font-medium px-4 py-2.5 rounded-full text-center cursor-pointer"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            Get a Quote
          </a>
        </motion.div>
      )}
    </>
  )
}
