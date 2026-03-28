"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Highlight",
    price: "€280",
    duration: "3–5 minute film",
    tagline: "The shareable reel",
    features: ["Colour graded", "Music licensed", "48hr rough cut", "2 revision rounds"],
    featured: false,
  },
  {
    name: "Full Story",
    price: "€480",
    duration: "Highlight + Full ceremony",
    tagline: "Most popular",
    features: ["Everything in Highlight", "Full ceremony edit", "3 revision rounds", "Private Vimeo delivery"],
    featured: true,
  },
  {
    name: "Feature",
    price: "€780",
    duration: "Full-day documentary",
    tagline: "The complete film",
    features: ["20–40 min documentary", "Highlight + Ceremony", "Unlimited revisions", "Project files included"],
    featured: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

function PlanCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative flex flex-col p-8 rounded-2xl transition-all duration-300"
      style={{
        background: plan.featured ? "var(--bg-elevated)" : "var(--bg-card)",
        border: plan.featured
          ? "1px solid var(--gold-border-strong)"
          : "1px solid var(--border)",
      }}
      whileHover={!plan.featured ? {
        borderColor: "var(--gold-border)",
      } : {}}
    >
      {/* Featured badge */}
      {plan.featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span
            className="inline-flex px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              color: "var(--bg)",
              background: "var(--gold)",
            }}
          >
            Most Popular
          </span>
        </div>
      )}

      {/* Plan name + tagline */}
      <div className="mb-6">
        <span
          className="block text-[10px] uppercase tracking-[0.28em] mb-2"
          style={{ fontFamily: "var(--font-body)", fontWeight: 500, color: "var(--gold)" }}
        >
          {plan.tagline}
        </span>
        <h3
          className="text-2xl text-[var(--cream)] leading-none mb-1"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          {plan.name}
        </h3>
        <p
          className="text-[12px] text-[var(--fg-secondary)]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {plan.duration}
        </p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <span
          className="text-[3rem] leading-none tabular-nums"
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            color: "var(--gold)",
            fontVariantNumeric: "tabular-nums",
          }}
          aria-label={`Price: ${plan.price}`}
        >
          {plan.price}
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-[var(--border)] mb-6" />

      {/* Feature list */}
      <ul className="flex flex-col gap-3 flex-1 mb-8" role="list">
        {plan.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-3 text-[13px] text-[var(--fg-secondary)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <svg
              className="w-4 h-4 flex-shrink-0 mt-0.5"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8l3.5 3.5 6.5-6"
                stroke="var(--gold)"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
        <Link
          href="/contact"
          className="flex items-center justify-center min-h-[46px] px-6 rounded-full text-[11px] uppercase tracking-widest transition-all duration-200"
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            ...(plan.featured
              ? { background: "var(--gold)", color: "var(--bg)" }
              : { border: "1px solid var(--border-strong)", color: "var(--cream)" }),
          }}
        >
          Get Started
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function PricingPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="pricing-preview" className="py-24 lg:py-36 px-5 sm:px-6 bg-[var(--bg-alt)]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={ref} className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            className="flex items-center justify-center gap-3 mb-5"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
            <span
              className="text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Pricing
            </span>
            <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
          </motion.div>
          <motion.h2
            className="text-[clamp(2.2rem,5vw,3.75rem)] text-[var(--cream)] leading-[1.05] mb-4"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Clear Pricing,{" "}
            <span className="italic text-[var(--gold)]">No Surprises</span>
          </motion.h2>
          <motion.p
            className="text-[15px] text-[var(--fg-secondary)] leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Per-project pricing. No subscriptions. No minimums. No hidden fees.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Full pricing link */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-[13px] text-[var(--fg-secondary)] hover:text-[var(--gold)] transition-colors duration-200 group min-h-[44px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            View full pricing details and add-ons
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
              className="group-hover:translate-x-1 transition-transform duration-200"
            >
              <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
