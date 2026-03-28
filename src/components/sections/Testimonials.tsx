"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "I was drowning in edits, turning down bookings, and burning out every October. Six months after partnering with ClicksEdit, I've doubled my packages and haven't worked a weekend since. The quality is honestly better than what I was producing myself.",
    name: "Ciara Hennessy",
    role: "Wedding Videographer",
    location: "Cork",
    volume: "42",
    unit: "films/yr",
  },
  {
    quote:
      "What amazed me wasn't the speed — it was the consistency. Every film looks like my work. The colour grade, the pacing, the music choices — they genuinely got inside my head and understood what I was going for.",
    name: "Darragh Murphy",
    role: "Founder, Murphy Films",
    location: "Dublin",
    volume: "60",
    unit: "films/yr",
  },
  {
    quote:
      "I was sceptical about outsourcing something so personal. After the first film I understood completely. They treat every edit like it's the only one they're doing that week. The attention to emotional narrative was something I didn't expect.",
    name: "Siobhán Kelly",
    role: "Cinematic Videographer",
    location: "Galway",
    volume: "28",
    unit: "films/yr",
  },
  {
    quote:
      "The 48-hour rough cut guarantee is real. I tested it twice. My clients are getting their films faster than any studio I know and the revision process is remarkably smooth. This has transformed my post-production completely.",
    name: "Eoin Byrne",
    role: "Award-Winning Videographer",
    location: "Kilkenny",
    volume: "35",
    unit: "films/yr",
  },
  {
    quote:
      "I sent them three of my favourite films as reference. They watched every minute. The first edit they returned was closer to my style than edits I'd done myself on a tight deadline. That told me everything.",
    name: "Aoife Brennan",
    role: "Documentary Filmmaker",
    location: "Limerick",
    volume: "22",
    unit: "films/yr",
  },
];

function QuoteMarks() {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path
        d="M0 24V14.4C0 6.4 4.267 1.867 12.8 0l1.6 2.4C10.133 3.6 7.733 6 7.2 9.6H12.8V24H0ZM19.2 24V14.4C19.2 6.4 23.467 1.867 32 0l1.6 2.4C29.333 3.6 26.933 6 26.4 9.6H32V24H19.2Z"
        fill="var(--gold)"
        fillOpacity="0.22"
      />
    </svg>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10%" });
  const total = testimonials.length;

  const next = useCallback(() => setActive((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setActive((p) => (p - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6500);
    return () => clearInterval(id);
  }, [next, paused]);

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-36 px-5 sm:px-6 bg-[var(--bg-alt)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div
          ref={sectionRef}
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
                Client Stories
              </span>
            </motion.div>
            <motion.h2
              className="text-[clamp(2.2rem,5vw,3.75rem)] text-[var(--cream)] leading-[1.05]"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Trusted by{" "}
              <span className="italic text-[var(--gold)]">Ireland&apos;s Best</span>
            </motion.h2>
          </div>

          {/* Prev / Next — 44px touch targets */}
          <motion.div
            className="flex gap-2 flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            aria-label="Testimonial navigation"
          >
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200"
              style={{ border: "1px solid var(--border-strong)", color: "var(--fg-secondary)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--gold)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-strong)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--fg-secondary)";
              }}
              aria-label="Previous testimonial"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path d="M9.5 3.5L6 7.5l3.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200"
              style={{ border: "1px solid var(--border-strong)", color: "var(--fg-secondary)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--gold)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-strong)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--fg-secondary)";
              }}
              aria-label="Next testimonial"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path d="M5.5 3.5L9 7.5l-3.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Testimonial body */}
        <div
          className="relative"
          aria-live="polite"
          aria-atomic="true"
          aria-label={`Testimonial ${active + 1} of ${total}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 48, filter: "blur(4px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -48, filter: "blur(4px)" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-5"
            >
              {/* Quote card */}
              <blockquote
                className="flex flex-col gap-7 p-8 lg:p-12 rounded-2xl"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Quote marks + stars */}
                <div className="flex items-start justify-between">
                  <QuoteMarks />
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="13" height="13" viewBox="0 0 13 13" fill="var(--gold)" aria-hidden="true">
                        <path d="M6.5 1l1.5 3.5H12L9 6.8l1 3.7-3.5-2-3.5 2 1-3.7L1 4.5h4z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p
                  className="text-[clamp(1.1rem,2.2vw,1.5rem)] text-[var(--cream)] italic leading-[1.5]"
                  style={{ fontFamily: "var(--font-display), Georgia, serif", fontWeight: 300 }}
                >
                  {testimonials[active].quote}
                </p>

                {/* Attribution */}
                <footer className="pt-5 border-t border-[var(--border)] flex items-center gap-4">
                  {/* Avatar initial */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--bg-elevated)", border: "1px solid var(--border-strong)" }}
                    aria-hidden="true"
                  >
                    <span
                      className="text-sm italic"
                      style={{ fontFamily: "var(--font-display), Georgia, serif", color: "var(--gold)" }}
                    >
                      {testimonials[active].name[0]}
                    </span>
                  </div>
                  <div>
                    <cite
                      className="not-italic text-[14px] font-medium text-[var(--cream)]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {testimonials[active].name}
                    </cite>
                    <p
                      className="text-[12px] text-[var(--fg-secondary)] mt-0.5"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {testimonials[active].role} · {testimonials[active].location}
                    </p>
                  </div>
                </footer>
              </blockquote>

              {/* Stat sidebar */}
              <div
                className="flex flex-col justify-between p-8 rounded-2xl"
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--gold-border)",
                }}
              >
                <div>
                  <span
                    className="block text-[10px] uppercase tracking-[0.25em] mb-3"
                    style={{ fontFamily: "var(--font-body)", color: "var(--gold)", fontWeight: 500 }}
                  >
                    Annual Volume
                  </span>
                  <span
                    className="block leading-none mb-1.5 tabular-nums"
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontSize: "clamp(3rem,6vw,4.5rem)",
                      color: "var(--cream)",
                    }}
                    aria-label={`${testimonials[active].volume} ${testimonials[active].unit}`}
                  >
                    {testimonials[active].volume}
                  </span>
                  <span
                    className="text-[13px] text-[var(--fg-secondary)]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {testimonials[active].unit}
                  </span>
                </div>

                <div
                  className="mt-8 pt-6 border-t border-[var(--border)]"
                >
                  <p
                    className="text-[11px] italic text-[var(--fg-dim)] leading-relaxed"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    &ldquo;{testimonials[active].name}&rdquo;
                    <br />
                    <span
                      className="not-italic"
                      style={{ fontFamily: "var(--font-body)", fontStyle: "normal" }}
                    >
                      {testimonials[active].location}, Ireland
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div
          className="flex items-center gap-2 mt-8"
          role="tablist"
          aria-label="Select testimonial"
        >
          {testimonials.map((t, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Testimonial by ${t.name}`}
              onClick={() => setActive(i)}
              className="rounded-full cursor-pointer transition-all duration-300"
              style={{
                width: i === active ? "24px" : "6px",
                height: "6px",
                background: i === active ? "var(--gold)" : "var(--fg-dim)",
                minWidth: "6px",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
