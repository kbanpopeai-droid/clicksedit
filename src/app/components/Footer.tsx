'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
      {/* Brand accent line at top */}
      <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }} />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent)' }}>
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true">
                  <path d="M2 1.5L10.5 7L2 12.5V1.5Z" fill="white" />
                </svg>
              </div>
              <span className="font-semibold" style={{ fontFamily: 'var(--font-display)', color: 'var(--fg)', letterSpacing: '-0.01em' }}>
                Clicks<span style={{ color: 'var(--accent)' }}>Edit</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-secondary)', fontFamily: 'var(--font-body)' }}>
              Your invisible production department. Based in Waterford, Ireland — serving clients worldwide.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
              ].map(({ label, path }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer transition-colors hover:bg-white/10"
                  style={{ border: '1px solid var(--border)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--fg-secondary)" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: 'var(--fg-dim)' }}>Navigate</p>
            {['Services', 'How It Works', 'Pricing', 'FAQ', 'Contact'].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm cursor-pointer hover:text-white transition-colors"
                style={{ color: 'var(--fg-secondary)', fontFamily: 'var(--font-body)' }}
              >
                {l}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: 'var(--fg-dim)' }}>Contact</p>
            {[
              { label: 'info@clicksedit.com', href: 'mailto:info@clicksedit.com' },
              { label: '+353 85 276 8556', href: 'tel:+353852768556' },
              { label: '+1 (605) 659-8176', href: 'tel:+16056598176' },
              { label: '1 Merchants Quay, Waterford', href: '#' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm cursor-pointer hover:text-white transition-colors"
                style={{ color: 'var(--fg-secondary)', fontFamily: 'var(--font-body)' }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="h-px mb-6" style={{ background: 'var(--border)' }} />
        <p className="text-xs text-center" style={{ color: 'var(--fg-dim)', fontFamily: 'var(--font-body)' }}>
          © {year} ClicksEdit. All rights reserved. · 1 Merchants Quay, Waterford, Ireland X91AV9W
        </p>
      </div>
    </footer>
  )
}
