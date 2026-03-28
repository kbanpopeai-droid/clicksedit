"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Highlight",
    price: "€280",
    duration: "3–5 min film",
    highlight: "The shareable reel",
    features: ["Colour grade", "Music licensed", "48hr rough cut", "2 revisions"],
    featured: false,
  },
  {
    name: "Full Story",
    price: "€480",
    duration: "Highlight + Ceremony",
    highlight: "Most popular",
    features: ["Everything in Highlight", "Full ceremony edit", "3 revisions", "Vimeo delivery"],
    featured: true,
  },
  {
    name: "Feature",
    price: "€780",
    duration: "Full-day documentary",
    highlight: "The complete film",
    features: ["20–40 min documentary", "Highlight + Ceremony", "Unlimited revisions", "Project files"],
    featured: false,
  },
];

function PlanCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col gap-6 p-8 rounded-2xl border transition-all duration-300 ${
        plan.featured
          ? "border-[var(--gold)] bg-[var(--bg-elevated)]"
          : "border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-strong)]"
      }`}
    >
      {plan.featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 text-[10px] font-[var(--font-body)] uppercase tracking-widest text-[var(--bg)] bg-[var(--gold)] rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div>
        <div className="flex items-baseline justify-between mb-1">
          <h3
            className="text-2xl text-[var(--cream)]"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {plan.name}
          </h3>
          <span
            className="text-3xl text-[var(--gold)]"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {plan.price}
          </span>
        </div>
        <p className="text-xs font-[var(--font-body)] text-[var(--fg-secondary)] tracking-wide">
          {plan.duration}
        </p>
      </div>

      <div className="h-px bg-[var(--border)]" />

      <ul className="flex flex-col gap-2.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--fg-secondary)]" style={{ fontFamily: "var(--font-body)" }}>
            <svg className="w-3.5 h-3.5 text-[var(--gold)] flex-shrink-0 mt-0.5" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7l3.5 3.5 6.5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function PricingPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="pricing-preview" className="py-24 lg:py-36 px-6 bg-[var(--bg-alt)]">
      <div className="max-w-5xl mx-auto">
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
              Pricing
            </span>
            <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl text-[var(--cream)] leading-[1.05] mb-4"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Clear Pricing,{" "}
            <span className="italic text-[var(--gold)]">No Surprises</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-base text-[var(--fg-secondary)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Per-project pricing. No subscriptions. No minimums.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Link to full pricing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-[var(--font-body)] text-[var(--fg-secondary)] hover:text-[var(--gold)] transition-colors duration-200 group"
          >
            View full pricing details & add-ons
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-200">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
