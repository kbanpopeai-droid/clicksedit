"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

// Logo mark SVG
function LogoMark({ gold }: { gold: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle
        cx="10"
        cy="10"
        r="9"
        stroke={gold ? "var(--gold)" : "var(--cream)"}
        strokeWidth="1.2"
        className="transition-colors duration-300"
      />
      <polygon
        points="7.5,6.5 14.5,10 7.5,13.5"
        fill={gold ? "var(--gold)" : "var(--cream)"}
        className="transition-colors duration-300"
      />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 32);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isHome = pathname === "/";

  return (
    <>
      <motion.header
        role="banner"
        className="fixed top-0 left-0 right-0 z-[var(--z-nav)]"
        style={{
          background: scrolled ? "rgba(10,8,6,0.82)" : "transparent",
          backdropFilter: scrolled ? "blur(28px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(28px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "background 0.45s var(--ease-out-expo), border-color 0.45s var(--ease-out-expo)",
        }}
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between"
          style={{ height: "72px" }}
          aria-label="Main navigation"
        >
          {/* ── Wordmark ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="ClicksEdit — Home"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <LogoMark gold={scrolled || !isHome} />
            </motion.div>
            <span
              className="text-[17px] tracking-wide text-[var(--cream)] group-hover:text-[var(--gold)] transition-colors duration-250"
              style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 400 }}
            >
              ClicksEdit
            </span>
          </Link>

          {/* ── Desktop links ── */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative inline-flex items-center justify-center min-h-[44px] px-4 text-[13px] font-medium uppercase tracking-widest transition-colors duration-200 rounded-full ${
                      active
                        ? "text-[var(--gold)]"
                        : "text-[var(--fg-secondary)] hover:text-[var(--cream)]"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-[var(--gold-dim)]"
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 min-h-[40px] px-6 text-[11px] font-medium uppercase tracking-widest text-[var(--bg)] bg-[var(--gold)] rounded-full hover:bg-[var(--gold-bright)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden flex flex-col gap-[6px] min-h-[44px] min-w-[44px] items-center justify-center cursor-pointer rounded-full hover:bg-[var(--gold-dim)] transition-colors duration-200"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <motion.span
              className="w-5 h-[1.5px] bg-[var(--cream)] block origin-center"
              animate={{ rotate: open ? 45 : 0, y: open ? 7.5 : 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              className="w-5 h-[1.5px] bg-[var(--cream)] block"
              animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-5 h-[1.5px] bg-[var(--cream)] block origin-center"
              animate={{ rotate: open ? -45 : 0, y: open ? -7.5 : 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            />
          </button>
        </nav>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[70] md:hidden"
              style={{ background: "rgba(10,8,6,0.96)", backdropFilter: "blur(20px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer content */}
            <motion.nav
              id="mobile-nav"
              className="fixed inset-x-0 top-[72px] bottom-0 z-[75] md:hidden flex flex-col justify-center px-8 pb-12"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-2" role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{
                      delay: 0.05 + i * 0.07,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center min-h-[56px] text-5xl italic transition-colors duration-200 ${
                        pathname === link.href
                          ? "text-[var(--gold)]"
                          : "text-[var(--cream)] hover:text-[var(--gold)]"
                      }`}
                      style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 300 }}
                      aria-current={pathname === link.href ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.32, duration: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center min-h-[52px] px-8 text-[11px] font-medium uppercase tracking-widest text-[var(--bg)] bg-[var(--gold)] rounded-full"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
