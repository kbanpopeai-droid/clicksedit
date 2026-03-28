"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const scenarios = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="9.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M11 6.5v5l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    headline: "Your hard drives are full and the queue never shrinks",
    body:
      "You finish one wedding only to find three more waiting. The editing never stops, the calendar fills faster than you can keep up, and you start turning down bookings just to breathe.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M4 17V8.5L11 4l7 4.5V17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="8" y="12" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
    headline: "You're a filmmaker pretending to be a post-production house",
    body:
      "You built your business to be behind the camera — to capture genuine emotion. Instead, you spend more time in Premiere than at venues. Something has to give.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 3L13.5 8.5H19l-4.5 3.5 1.75 5.5L11 14l-5.25 3.5L7.5 12 3 8.5h5.5L11 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
    headline: "Peak season hits and the quality you're known for starts slipping",
    body:
      "October arrives and you're editing five weddings at once. The standard you set in quieter months is impossible to maintain. You deliver on time — but you know it could be better.",
  },
];

function ScenarioCard({ scenario, index }: { scenario: typeof scenarios[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative group flex flex-col gap-5 p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-all duration-400"
    >
      {/* Number watermark */}
      <span
        className="absolute top-6 right-7 text-6xl font-[var(--font-display)] italic text-[var(--gold)] opacity-[0.06] group-hover:opacity-[0.10] transition-opacity duration-400 pointer-events-none select-none leading-none"
        style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div className="w-10 h-10 rounded-xl border border-[var(--border-strong)] flex items-center justify-center text-[var(--gold)] flex-shrink-0">
        {scenario.icon}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <h3
          className="text-xl lg:text-2xl text-[var(--cream)] leading-snug"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          {scenario.headline}
        </h3>
        <p
          className="text-sm text-[var(--fg-secondary)] leading-[1.75]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {scenario.body}
        </p>
      </div>
    </motion.div>
  );
}

export default function PainPoints() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="editing-trap" className="py-24 lg:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
            <span className="text-xs font-[var(--font-body)] uppercase tracking-[0.25em] text-[var(--gold)]">
              Sound Familiar?
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl text-[var(--cream)] leading-[1.05] mb-5"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            The Editing Trap{" "}
            <span className="italic text-[var(--gold)]">Every Videographer Knows</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base text-[var(--fg-secondary)] leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            You became a videographer to tell stories. Not to spend sixty hours a week in
            an edit suite. ClicksEdit exists to give you that time back — without
            sacrificing a single frame of quality.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {scenarios.map((scenario, i) => (
            <ScenarioCard key={i} scenario={scenario} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
