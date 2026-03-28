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
    row: "lg:row-span-2", // tall card — masonry effect
    bg: "from-[#1E1610] via-[#141009] to-[#0A0806]",
  },
  {
    title: "Emma & Liam",
    location: "Cliff House Hotel, Ardmore",
    style: "Cinematic",
    aspect: "aspect-[4/3]",
    row: "",
    bg: "from-[#1A130A] via-[#12100A] to-[#0A0806]",
  },
  {
    title: "Aoife & Conor",
    location: "Dunbrody Country House",
    style: "Editorial",
    aspect: "aspect-[4/3]",
    row: "",
    bg: "from-[#181410] via-[#121008] to-[#0A0806]",
  },
];

function PlayIcon() {
  return (
    <div
      className="w-[52px] h-[52px] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
      style={{
        background: "rgba(10,8,6,0.30)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(196,154,92,0.50)",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <polygon points="4,2 13,8 4,14" fill="var(--gold)" />
      </svg>
    </div>
  );
}

function WorkCard({
  work,
  index,
}: {
  work: typeof works[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }}
      className={`group cursor-pointer ${work.row}`}
    >
      {/* Card image area */}
      <div
        className={`${work.aspect} rounded-2xl overflow-hidden relative border border-[var(--border)] mb-4`}
        style={{ transform: "translateZ(0)" }}
      >
        {/* Gradient placeholder */}
        <div className={`absolute inset-0 bg-gradient-to-br ${work.bg}`} />

        {/* Subtle texture pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 8px)",
          }}
          aria-hidden="true"
        />

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0"
          style={{ background: "var(--gold-dim)" }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-350">
          <PlayIcon />
        </div>

        {/* Style badge */}
        <div className="absolute top-4 right-4">
          <span
            className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] uppercase tracking-wider"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              color: "var(--gold)",
              background: "rgba(10,8,6,0.55)",
              backdropFilter: "blur(8px)",
              border: "1px solid var(--gold-border)",
            }}
          >
            {work.style}
          </span>
        </div>

        {/* Index watermark */}
        <div
          className="absolute bottom-4 left-5 text-[40px] italic opacity-[0.07]"
          style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--cream)", lineHeight: 1 }}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Meta */}
      <div className="px-0.5">
        <h3
          className="text-[19px] text-[var(--cream)] group-hover:text-[var(--gold)] transition-colors duration-250 leading-snug mb-1"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          {work.title}
        </h3>
        <p
          className="text-[13px] text-[var(--fg-secondary)]"
          style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
        >
          {work.location}
        </p>
      </div>
    </motion.article>
  );
}

export default function FeaturedWork() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="work" className="py-24 lg:py-36 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
              <span
                className="text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]"
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                Featured Work
              </span>
            </motion.div>

            <motion.h2
              className="text-[clamp(2.2rem,5vw,3.75rem)] text-[var(--cream)] leading-[1.05]"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Stories We&apos;ve{" "}
              <span className="italic text-[var(--gold)]">Told</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-[13px] text-[var(--fg-secondary)] hover:text-[var(--gold)] transition-colors duration-200 group min-h-[44px]"
              style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}
            >
              View all films
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                aria-hidden="true"
                className="group-hover:translate-x-1 transition-transform duration-200"
              >
                <path d="M2 7.5h11M9 3l4 4.5-4 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-start">
          {works.map((work, i) => (
            <WorkCard key={work.title} work={work} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
