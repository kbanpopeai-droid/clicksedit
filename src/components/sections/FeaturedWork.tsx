"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const works = [
  {
    title: "Sarah & James",
    location: "Waterford Castle, Ireland",
    style: "Documentary",
    aspect: "aspect-[3/4]",
    bg: "bg-[var(--bg-elevated)]",
  },
  {
    title: "Emma & Liam",
    location: "Cliff House Hotel, Ardmore",
    style: "Cinematic",
    aspect: "aspect-[4/5]",
    bg: "bg-[var(--bg-card)]",
  },
  {
    title: "Aoife & Conor",
    location: "Dunbrody Country House",
    style: "Editorial",
    aspect: "aspect-[3/4]",
    bg: "bg-[var(--bg-elevated)]",
  },
];

function WorkCard({ work, index }: { work: typeof works[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer"
    >
      <div
        className={`${work.aspect} ${work.bg} rounded-2xl overflow-hidden relative mb-4 border border-[var(--border)]`}
        style={{ transform: "translateZ(0)" }}
      >
        {/* Placeholder gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-elevated)] via-[var(--bg-card)] to-[var(--bg)]" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[var(--gold-dim)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
          <div className="w-14 h-14 rounded-full border border-[var(--gold)] flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <svg width="14" height="14" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <polygon points="2,1 9,5 2,9" fill="var(--gold)" />
            </svg>
          </div>
        </div>

        {/* Style badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-[var(--border)]">
          <span className="text-xs font-[var(--font-body)] uppercase tracking-wider text-[var(--gold)]">
            {work.style}
          </span>
        </div>
      </div>

      <div>
        <h3
          className="text-xl text-[var(--cream)] group-hover:text-[var(--gold)] transition-colors duration-300"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          {work.title}
        </h3>
        <p className="text-sm text-[var(--fg-secondary)] mt-1 font-[var(--font-body)]">
          {work.location}
        </p>
      </div>
    </motion.div>
  );
}

export default function FeaturedWork() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="work" className="py-24 lg:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
              <span className="text-xs font-[var(--font-body)] uppercase tracking-[0.25em] text-[var(--gold)]">
                Featured Work
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl text-[var(--cream)]"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Stories We&apos;ve{" "}
              <span className="italic text-[var(--gold)]">Told</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/portfolio"
              className="text-sm font-[var(--font-body)] text-[var(--fg-secondary)] hover:text-[var(--gold)] transition-colors duration-200 flex items-center gap-2 group"
            >
              View all films
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="group-hover:translate-x-1 transition-transform duration-200"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {works.map((work, i) => (
            <WorkCard key={work.title} work={work} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
