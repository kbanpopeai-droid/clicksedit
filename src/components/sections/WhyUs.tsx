"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 17.5c0-3.31 3.13-6 7-6s7 2.69 7 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Dedicated Editor",
    body: "One editor owns your account. They study your portfolio, your style, your preferences — and stay with you long-term.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3.5 10.5l3.5 3.5 9-9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5 5l-1.5-1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Internal Quality Review",
    body: "Every film passes a senior editor review before it reaches you. Two pairs of eyes minimum, always.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2.5v15M2.5 10h15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "No Monthly Minimums",
    body: "One wedding or fifty — you pay per project, no subscriptions, no retainers. Use us when you need us.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Music Licensing Included",
    body: "Every deliverable includes licensed music — cleared for web and client delivery. No grey areas, ever.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2.5" y="5.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6.5 5.5V4a1.5 1.5 0 013 0v1.5M10.5 5.5V4a1.5 1.5 0 013 0v1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Project Files Delivered",
    body: "You receive the raw project file with every edit. Full creative ownership — always yours to revisit or revise.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2.5L12.5 8H18l-4.5 3.5 1.75 5.5L10 14l-5.25 3.5L6.5 12 2 8.5h5.5L10 2.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
    title: "Unlimited Revisions",
    body: "We're not done until you are. Revision rounds are built into every package — we iterate until it's perfect.",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex gap-5 p-7 rounded-2xl border border-[var(--border)] hover:border-[var(--border-strong)] bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--border-strong)] text-[var(--gold)] group-hover:bg-[var(--gold-dim)] transition-colors duration-300 flex-shrink-0">
        {feature.icon}
      </div>
      {/* Content */}
      <div>
        <h3
          className="text-lg text-[var(--cream)] mb-2 leading-snug"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          {feature.title}
        </h3>
        <p
          className="text-sm text-[var(--fg-secondary)] leading-[1.7]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {feature.body}
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
        {/* Header */}
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
            <span className="text-xs font-[var(--font-body)] uppercase tracking-[0.25em] text-[var(--gold)]">
              Why ClicksEdit
            </span>
            <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl text-[var(--cream)] leading-[1.05]"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            The Studio Built{" "}
            <span className="italic text-[var(--gold)]">Around Your Work</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
