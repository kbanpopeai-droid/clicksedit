'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-6" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border-light)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <span className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>ClicksEdit</span>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {['Services', 'How It Works', 'Pricing', 'Contact'].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xs cursor-pointer hover:underline"
                style={{ color: 'var(--fg-secondary)' }}
              >
                {l}
              </a>
            ))}
            <a href="mailto:info@clicksedit.com" className="text-xs cursor-pointer hover:underline" style={{ color: 'var(--fg-secondary)' }}>
              info@clicksedit.com
            </a>
          </div>
        </div>
        <div className="h-px mb-6" style={{ background: 'var(--border-light)' }} />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: 'var(--fg-tertiary)' }}>
            Copyright © {year} ClicksEdit. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--fg-tertiary)' }}>
            1 Merchants Quay, Waterford, Ireland
          </p>
        </div>
      </div>
    </footer>
  )
}
