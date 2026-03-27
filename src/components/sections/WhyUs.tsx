"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Dedicated Editor",
    body: "One editor. Every project. No handoffs, no inconsistency — the same creative voice across every film we touch.",
  },
  {
    number: "02",
    title: "Fast Turnaround",
    body: "48-hour rough cuts. 5-day final delivery. Your clients deserve their memories quickly, and we make that possible.",
  },
  {
    number: "03",
    title: "Your Style, Perfected",
    body: "We study your brand, your edit style, and your client base. The result feels unmistakably like you.",
  },
  {
    number: "04",
    title: "Unlimited Revisions",
    body: "We don't stop until it's right. Revision rounds are built into every package, because perfection matters.",
  },
];

function ReasonCard({ reason, index }: { reason: typeof reasons[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex gap-6 p-6 lg:p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-strong)] transition-all duration-300 group"
    >
      <span
        className="text-5xl font-[var(--font-display)] italic text-[var(--gold)] opacity-30 group-hover:opacity-50 transition-opacity duration-300 leading-none flex-shrink-0"
        aria-hidden="true"
        style={{ fontFamily: "var(--font-display), Georgia, serif" }}
      >
        {reason.number}
      </span>
      <div>
        <h3
          className="text-xl lg:text-2xl text-[var(--cream)] mb-3"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          {reason.title}
        </h3>
        <p className="text-sm text-[var(--fg-secondary)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
          {reason.body}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="why-us" className="py-24 lg:py-36 px-6 bg-[var(--bg-alt)]">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
            <span className="text-xs font-[var(--font-body)] uppercase tracking-[0.25em] text-[var(--gold)]">
              Why ClicksEdit
            </span>
            <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl text-[var(--cream)]"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            The Studio Built{" "}
            <span className="italic text-[var(--gold)]">For Videographers</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((reason, i) => (
            <ReasonCard key={reason.number} reason={reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
