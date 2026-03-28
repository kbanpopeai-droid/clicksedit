"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const benefits = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2.5C6.41 2.5 3.5 5.41 3.5 9c0 2.2 1.07 4.15 2.72 5.38L5.5 17.5h9l-.72-3.12A6.47 6.47 0 0016.5 9c0-3.59-2.91-6.5-6.5-6.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M7.5 17.5h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Book More Weddings",
    body: "Every hour not editing is an hour spent marketing, shooting, or resting. Remove the bottleneck and watch your annual bookings grow.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 6v4.5l3 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Faster Delivery to Clients",
    body: "Rough cuts in 48 hours. Finals in 5 business days. Your clients receive their memories quickly — and remember you for it.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3.5 10.5l4 4 9-9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Consistent Quality, Every Film",
    body: "Your dedicated editor learns your style deeply. Every film sounds, looks, and flows the same — your brand, reliably.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 15l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 17.5h15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Scale Without Hiring",
    body: "Peak season hits? We scale with you. No interviewing, no training, no employment costs. Capacity on demand.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2.5v3M10 14.5v3M2.5 10h3M14.5 10h3M4.7 4.7l2.1 2.1M13.2 13.2l2.1 2.1M4.7 15.3l2.1-2.1M13.2 6.8l2.1-2.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Reclaim Your Creative Energy",
    body: "Editing your own work leads to creative fatigue. Fresh eyes find the emotional moments you've stopped seeing. The result shows.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M5 10c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M3 12l2-2-2-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Your Style. Your Vision.",
    body: "We don't impose a house style. We immerse ourselves in your editing philosophy and deliver films that are unmistakably yours.",
  },
];

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col gap-5 p-7 rounded-2xl border border-[var(--border)] hover:border-[var(--border-strong)] bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--border-strong)] text-[var(--gold)] group-hover:bg-[var(--gold-dim)] transition-colors duration-300 flex-shrink-0">
        {benefit.icon}
      </div>
      <div>
        <h3
          className="text-lg lg:text-xl text-[var(--cream)] mb-2.5 leading-snug"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          {benefit.title}
        </h3>
        <p
          className="text-sm text-[var(--fg-secondary)] leading-[1.75]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {benefit.body}
        </p>
      </div>
    </motion.div>
  );
}

export default function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="benefits" className="py-24 lg:py-36 px-6 bg-[var(--bg-alt)]">
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
              Your Studio, Amplified
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
            What Changes When You{" "}
            <span className="italic text-[var(--gold)]">Stop Editing Alone</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <BenefitCard key={b.title} benefit={b} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
