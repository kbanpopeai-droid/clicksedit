"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-24 lg:py-40 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(196,151,90,0.08), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
          <span className="text-xs font-[var(--font-body)] uppercase tracking-[0.25em] text-[var(--gold)]">
            Ready to Begin?
          </span>
          <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl text-[var(--cream)] leading-[1.1] mb-6"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          Let&apos;s Create Something{" "}
          <span className="italic text-[var(--gold)]">Unforgettable</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-[var(--fg-secondary)] mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Send us your brief and we&apos;ll respond within one business day. No commitment,
          no pressure — just an honest conversation about your edit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-flex px-10 py-4 text-xs font-[var(--font-body)] uppercase tracking-widest text-[var(--bg)] bg-[var(--gold)] rounded-full hover:bg-[var(--gold-bright)] transition-all duration-200"
            >
              Start Your Project
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/pricing"
              className="inline-flex px-10 py-4 text-xs font-[var(--font-body)] uppercase tracking-widest text-[var(--cream)] border border-[var(--border-strong)] rounded-full hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200"
            >
              View Pricing
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
