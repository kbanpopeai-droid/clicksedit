'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-12 px-6"
      style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded flex items-center justify-center"
            style={{ background: 'var(--accent)' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 3L11 7L3 11V3Z" fill="white" />
            </svg>
          </div>
          <span className="font-semibold tracking-tight" style={{ color: 'var(--fg)' }}>
            Clicks<span style={{ color: 'var(--accent)' }}>Edit</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm" style={{ color: 'var(--fg-muted)' }}>
          {['Services', 'How It Works', 'Pricing', 'Contact'].map((l) => (
            <motion.a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
              whileHover={{ color: '#fff' }}
              transition={{ duration: 0.15 }}
              className="cursor-pointer"
            >
              {l}
            </motion.a>
          ))}
          <a href="mailto:info@clicksedit.com" className="cursor-pointer hover:text-white transition-colors">
            info@clicksedit.com
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs" style={{ color: 'var(--fg-dim)' }}>
          © {year} ClicksEdit. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
