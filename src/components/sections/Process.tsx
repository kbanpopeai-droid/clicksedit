"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    step: "1",
    title: "Send Your Footage",
    body: "Upload raw files via our secure transfer link. We accept all major formats and camera systems.",
  },
  {
    step: "2",
    title: "We Edit",
    body: "Your dedicated editor reviews your brief, selects the best moments, colour grades, and crafts the film.",
  },
  {
    step: "3",
    title: "Review & Refine",
    body: "You receive a timestamped rough cut within 48 hours. Feedback is easy — just note the time and the change.",
  },
  {
    step: "4",
    title: "Deliver to Client",
    body: "Final export in broadcast-quality 4K. Private Vimeo link included, ready to share directly with your clients.",
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-4"
    >
      <div className="flex items-center gap-3">
        <span
          className="w-10 h-10 rounded-full border border-[var(--border-strong)] flex items-center justify-center text-sm font-[var(--font-body)] text-[var(--gold)]"
        >
          {step.step}
        </span>
        {index < steps.length - 1 && (
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--border-strong)] to-transparent hidden lg:block" />
        )}
      </div>
      <h3
        className="text-xl lg:text-2xl text-[var(--cream)]"
        style={{ fontFamily: "var(--font-display), Georgia, serif" }}
      >
        {step.title}
      </h3>
      <p className="text-sm text-[var(--fg-secondary)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
        {step.body}
      </p>
    </motion.div>
  );
}

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="process" className="py-24 lg:py-36 px-6">
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
              How It Works
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
            Simple Process,{" "}
            <span className="italic text-[var(--gold)]">Exceptional Results</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((step, i) => (
            <StepCard key={step.step} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
