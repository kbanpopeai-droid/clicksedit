"use client";

import { motion } from "framer-motion";

const signals = [
  { label: "300+ wedding films delivered" },
  { label: "5+ years of cinematic editing" },
  { label: "48-hour rough cut guarantee" },
  { label: "98% client retention rate" },
  { label: "Waterford, Ireland · remote-first" },
];

export default function TrustBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="border-y border-[var(--border)] bg-[var(--bg-alt)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 py-4">
          {signals.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: "var(--gold)" }}
                aria-hidden="true"
              />
              <span
                className="text-xs font-[var(--font-body)] text-[var(--fg-secondary)] tracking-wide whitespace-nowrap"
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
