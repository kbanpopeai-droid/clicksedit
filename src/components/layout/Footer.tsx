import Link from "next/link";

const navGroups = [
  {
    label: "Work",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Pricing",   href: "/pricing" },
      { label: "Contact",   href: "/contact" },
    ],
  },
  {
    label: "Studio",
    links: [
      { label: "About",   href: "/about" },
      { label: "Process", href: "/#process" },
    ],
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="12" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="8" cy="8" r="2.8" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="11.5" cy="4.5" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Vimeo",
    href: "https://vimeo.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M13.5 5.5c-.06 1.4-1 3.3-2.8 5.7C8.8 13.8 7.1 15 5.7 15c-.8 0-1.5-.8-2-2.3L2.5 7.8C2.2 6.3 1.8 5.5 1.3 5.5c-.1 0-.5.3-1.1.8L0 5.7C.6 5.2 1.2 4.6 1.8 4 2.6 3.3 3.2 3 3.6 3c.9-.1 1.5.5 1.7 1.7l.8 4.9c.2 1 .5 1.5.8 1.5.2 0 .6-.3 1.1-1 .5-.6.8-1.1.8-1.5 0-.6-.3-1-.8-1-.3 0-.6.1-.9.2.6-1.9 1.7-2.8 3.2-2.7 1.2 0 1.8.8 1.8 2.4-.1 0 0-.2 0-.5l-.1-.5c.8-.1 1.3.5 1.5 1.5z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M10.5 2H9C8.2 2 7.5 2.7 7.5 3.5V5H5.5v2.5H7.5V14h2.5V7.5H12L12.5 5H10V4c0-.3.2-.5.5-.5H12V2h-1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--border)]"
      style={{ background: "var(--bg-alt)" }}
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Main footer grid */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 lg:gap-16">
          {/* Brand column */}
          <div className="flex flex-col gap-5 max-w-xs">
            <Link
              href="/"
              className="flex items-center gap-2.5 group w-fit"
              aria-label="ClicksEdit — Home"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="9" stroke="var(--gold)" strokeWidth="1.2" />
                <polygon points="7.5,6.5 14.5,10 7.5,13.5" fill="var(--gold)" />
              </svg>
              <span
                className="text-[16px] text-[var(--cream)] group-hover:text-[var(--gold)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                ClicksEdit
              </span>
            </Link>

            <p
              className="text-[13px] text-[var(--fg-secondary)] leading-[1.7]"
              style={{ fontFamily: "var(--font-body)", maxWidth: "280px" }}
            >
              Ireland&apos;s premier wedding video editing studio. We turn raw footage into
              cinematic love stories.
            </p>

            <div>
              <p
                className="text-[11px] text-[var(--fg-dim)] tracking-wide"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Waterford, Ireland
              </p>
              <a
                href="mailto:hello@clicksedit.com"
                className="text-[13px] text-[var(--fg-secondary)] hover:text-[var(--gold)] transition-colors duration-200 mt-1 block"
                style={{ fontFamily: "var(--font-body)" }}
              >
                hello@clicksedit.com
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2 mt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[var(--fg-secondary)] hover:text-[var(--gold)] hover:border-[var(--gold-border)] transition-all duration-200"
                  style={{ border: "1px solid var(--border)" }}
                  aria-label={`ClicksEdit on ${s.label}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-4">
              <h3
                className="text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {group.label}
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[var(--fg-secondary)] hover:text-[var(--cream)] transition-colors duration-200 min-h-[36px] flex items-center"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p
            className="text-[11px] text-[var(--fg-dim)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © {year} ClicksEdit. All rights reserved.
          </p>
          <p
            className="text-[11px] text-[var(--fg-dim)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Crafted with intention in Waterford, Ireland.
          </p>
        </div>
      </div>
    </footer>
  );
}
