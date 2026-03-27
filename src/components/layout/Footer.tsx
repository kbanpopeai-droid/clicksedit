import Link from "next/link";

const links = {
  Work: [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  Studio: [
    { label: "About", href: "/about" },
    { label: "Process", href: "/#process" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-alt)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full border border-[var(--gold)] flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <polygon points="2,1 9,5 2,9" fill="currentColor" className="text-[var(--gold)]" />
                </svg>
              </span>
              <span
                className="text-lg text-[var(--cream)]"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                ClicksEdit
              </span>
            </Link>
            <p className="text-sm text-[var(--fg-secondary)] leading-relaxed max-w-xs">
              Ireland&apos;s premier wedding video editing studio. We turn raw footage into
              cinematic love stories.
            </p>
            <p className="text-xs text-[var(--fg-dim)] mt-2">Waterford, Ireland</p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section} className="flex flex-col gap-4">
              <h4 className="text-xs font-[var(--font-body)] uppercase tracking-[0.2em] text-[var(--gold)]">
                {section}
              </h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[var(--fg-secondary)] hover:text-[var(--cream)] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--fg-dim)]">
            © {new Date().getFullYear()} ClicksEdit. All rights reserved.
          </p>
          <p className="text-xs text-[var(--fg-dim)]">
            Crafted with intention in Waterford, Ireland.
          </p>
        </div>
      </div>
    </footer>
  );
}
