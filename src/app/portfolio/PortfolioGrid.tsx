"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const films = [
  { title: "Sarah & James", location: "Waterford Castle", style: "Documentary", aspect: "aspect-[4/5]" },
  { title: "Emma & Liam", location: "Cliff House Hotel, Ardmore", style: "Cinematic", aspect: "aspect-[3/4]" },
  { title: "Aoife & Conor", location: "Dunbrody Country House", style: "Editorial", aspect: "aspect-[4/5]" },
  { title: "Rachel & Sean", location: "Ballynatray Estate", style: "Documentary", aspect: "aspect-[3/4]" },
  { title: "Sophie & Kieran", location: "Delphi Resort, Mayo", style: "Cinematic", aspect: "aspect-[4/5]" },
  { title: "Laura & Patrick", location: "Kilkea Castle, Kildare", style: "Editorial", aspect: "aspect-[3/4]" },
  { title: "Niamh & Eoin", location: "The Westin, Dublin", style: "Documentary", aspect: "aspect-[4/5]" },
  { title: "Grace & Cian", location: "Mount Juliet Estate", style: "Cinematic", aspect: "aspect-[3/4]" },
];

function FilmCard({ film, index }: { film: typeof films[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group cursor-pointer"
    >
      <div
        className={`${film.aspect} rounded-2xl overflow-hidden relative mb-4 border border-[var(--border)] bg-[var(--bg-elevated)]`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-elevated)] via-[var(--bg-card)] to-[var(--bg)]" />
        <div className="absolute inset-0 bg-[var(--gold-dim)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
          <div className="w-14 h-14 rounded-full border border-[var(--gold)] flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <svg width="14" height="14" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <polygon points="2,1 9,5 2,9" fill="var(--gold)" />
            </svg>
          </div>
        </div>
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-[var(--border)]">
          <span className="text-xs font-[var(--font-body)] uppercase tracking-wider text-[var(--gold)]">
            {film.style}
          </span>
        </div>
      </div>
      <h3
        className="text-xl text-[var(--cream)] group-hover:text-[var(--gold)] transition-colors duration-300"
        style={{ fontFamily: "var(--font-display), Georgia, serif" }}
      >
        {film.title}
      </h3>
      <p className="text-sm text-[var(--fg-secondary)] mt-1" style={{ fontFamily: "var(--font-body)" }}>
        {film.location}
      </p>
    </motion.div>
  );
}

export default function PortfolioGrid() {
  return (
    <section className="px-6 pb-24 lg:pb-36">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
          {films.map((film, i) => (
            <FilmCard key={film.title} film={film} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
