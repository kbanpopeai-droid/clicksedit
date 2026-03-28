"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    step: "01",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2.5v4M11 15.5v4M2.5 11h4M15.5 11h4M4.7 4.7l2.8 2.8M14.5 14.5l2.8 2.8M4.7 17.3l2.8-2.8M14.5 7.5l2.8-2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Send Your Brief",
    body: "Upload your raw footage via secure transfer link. Attach your style notes, music preferences, and any reference films. We read every word.",
    detail: "All major formats accepted",
  },
  {
    step: "02",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M5 11h12M5 7h12M5 15h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "We Edit",
    body: "Your dedicated editor selects the best moments, crafts the narrative arc, applies colour grading aligned with your aesthetic, and licenses the music.",
    detail: "48-hour rough cut turnaround",
  },
  {
    step: "03",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="8.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.5 11l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Review & Refine",
    body: "Receive a timestamped rough cut within 48 hours. Leave timestamped notes directly in the player. We turn revisions around within 24 hours.",
    detail: "Unlimited revision rounds",
  },
  {
    step: "04",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M4.5 15.5l3.5-3.5 3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2.5" y="4.5" width="17" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Final Delivery",
    body: "4K broadcast-quality export. Private Vimeo link ready to share with your clients. Project files included. Done.",
    detail: "4K + private Vimeo delivery",
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col"
    >
      {/* Connector line (desktop only, not last) */}
      {index < steps.length - 1 && (
        <div
          className="absolute top-5 left-[calc(50%+2.5rem)] right-0 h-px hidden lg:block"
          style={{
            background:
              "linear-gradient(to right, rgba(196,151,90,0.25), transparent)",
          }}
          aria-hidden="true"
        />
      )}

      <div className="flex flex-col gap-5">
        {/* Step header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-[var(--border-strong)] flex items-center justify-center text-[var(--gold)] flex-shrink-0 bg-[var(--bg-card)]">
            {step.icon}
          </div>
          <span
            className="text-xs font-[var(--font-body)] uppercase tracking-widest text-[var(--fg-dim)]"
          >
            Step {step.step}
          </span>
        </div>

        {/* Content */}
        <div>
          <h3
            className="text-xl lg:text-2xl text-[var(--cream)] mb-3 leading-snug"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {step.title}
          </h3>
          <p
            className="text-sm text-[var(--fg-secondary)] leading-[1.75] mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {step.body}
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[var(--gold)]" aria-hidden="true" />
            <span className="text-xs text-[var(--gold)] font-[var(--font-body)]">
              {step.detail}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="process" className="py-24 lg:py-36 px-6">
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
              How It Works
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
            Simple Process,{" "}
            <span className="italic text-[var(--gold)]">Exceptional Results</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {steps.map((step, i) => (
            <StepCard key={step.step} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
