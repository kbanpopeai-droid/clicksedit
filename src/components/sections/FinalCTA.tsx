"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="relative py-28 lg:py-44 px-6 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(196,151,90,0.10), transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent" />

      <div ref={ref} className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 mb-7"
        >
          <span className="w-10 h-px bg-[var(--gold)] opacity-60" />
          <span className="text-xs font-[var(--font-body)] uppercase tracking-[0.3em] text-[var(--gold)]">
            Ready to Begin?
          </span>
          <span className="w-10 h-px bg-[var(--gold)] opacity-60" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[var(--cream)] leading-[1.0] tracking-tight mb-7"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          Stop Editing.
          <br />
          <span className="italic text-[var(--gold)]">Start Growing.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-[var(--fg-secondary)] mb-12 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Send us your brief and we&apos;ll respond within one business day.
          No commitment. Just an honest conversation about your edit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-10 py-4.5 py-[18px] text-xs font-[var(--font-body)] uppercase tracking-widest text-[var(--bg)] bg-[var(--gold)] rounded-full hover:bg-[var(--gold-bright)] transition-all duration-200"
            >
              Start Your Project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2.5 px-10 py-[18px] text-xs font-[var(--font-body)] uppercase tracking-widest text-[var(--cream)] border border-[var(--border-strong)] rounded-full hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200"
            >
              View Pricing
            </Link>
          </motion.div>
        </motion.div>

        {/* Reassurance line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 text-xs font-[var(--font-body)] text-[var(--fg-dim)] tracking-wide"
        >
          No subscription · No minimum volume · Response within 1 business day
        </motion.p>
      </div>
    </section>
  );
}
