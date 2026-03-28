"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      className="relative py-24 lg:py-36 px-6 overflow-hidden"
      aria-label="Brand statement"
      ref={ref}
    >
      {/* Subtle center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(196,151,90,0.05), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span className="w-10 h-px bg-[var(--gold)] opacity-50" />
          <span className="text-xs font-[var(--font-body)] uppercase tracking-[0.3em] text-[var(--gold)]">
            Our Philosophy
          </span>
          <span className="w-10 h-px bg-[var(--gold)] opacity-50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[var(--cream)] leading-[1.08] tracking-tight"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Your footage holds a story.
            <br />
            <span className="italic text-[var(--gold)]">
              We find it, shape it, and make it last.
            </span>
          </h2>
        </motion.div>

        <motion.p
          className="mt-10 text-lg sm:text-xl text-[var(--fg-secondary)] max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          Every wedding film we edit is treated as a singular piece of work — never a
          template, never rushed, never generic. We care about the stories entrusted to us,
          because someone will watch this film on their anniversary for the next fifty years.
        </motion.p>
      </div>
    </section>
  );
}
