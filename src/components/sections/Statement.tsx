"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  const line1 = "Your footage holds a story.";
  const line2 = "We find it, shape it, and make it last.";

  return (
    <section className="py-28 lg:py-40 px-6 overflow-hidden" aria-label="Brand statement" ref={ref}>
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
          <span className="text-xs font-[var(--font-body)] uppercase tracking-[0.25em] text-[var(--gold)]">
            Our Philosophy
          </span>
          <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
        </motion.div>

        <h2
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[var(--cream)] leading-[1.1] tracking-tight"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {line1}
          </motion.span>
          <motion.span
            className="block italic text-[var(--gold)] mt-2"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {line2}
          </motion.span>
        </h2>

        <motion.p
          className="mt-10 text-lg text-[var(--fg-secondary)] max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Every wedding is unique. Every edit should feel that way too. We&apos;re not a
          production line — we&apos;re a creative partner who cares deeply about the
          stories entrusted to us.
        </motion.p>
      </div>
    </section>
  );
}
