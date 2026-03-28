"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "I was drowning in edits, turning down bookings, and burning out every October. Six months after partnering with ClicksEdit, I've doubled my packages and haven't worked a weekend since. The quality is honestly better than what I was producing myself.",
    name: "Ciara Hennessy",
    role: "Wedding Videographer",
    location: "Cork, Ireland",
    films: "42 films/year",
  },
  {
    quote:
      "What amazed me wasn't the speed — it was the consistency. Every film looks like my work. The colour grade, the pacing, the music choices — they genuinely got inside my head and understood what I was going for.",
    name: "Darragh Murphy",
    role: "Founder, Murphy Films",
    location: "Dublin, Ireland",
    films: "60 films/year",
  },
  {
    quote:
      "I was sceptical about outsourcing something so personal. After the first film I understood. They treat every edit like it's the only one they're doing that week. The attention to the emotional narrative is something I didn't expect.",
    name: "Siobhán Kelly",
    role: "Cinematic Videographer",
    location: "Galway, Ireland",
    films: "28 films/year",
  },
  {
    quote:
      "The 48-hour rough cut guarantee is real. I tested it twice. My clients are getting their films faster than any studio I know and the revision process is remarkably smooth. This has transformed my post-production completely.",
    name: "Eoin Byrne",
    role: "Award-Winning Videographer",
    location: "Kilkenny, Ireland",
    films: "35 films/year",
  },
  {
    quote:
      "I sent them three of my favourite films as reference. They watched every minute. The first edit they returned was closer to my style than edits I'd done myself on a tight deadline. That told me everything.",
    name: "Aoife Brennan",
    role: "Documentary Filmmaker",
    location: "Limerick, Ireland",
    films: "22 films/year",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="var(--gold)" aria-hidden="true">
          <path d="M7 1l1.56 3.51L12.5 5l-3 2.77.71 3.73L7 9.5l-3.21 2 .71-3.73L1.5 5l3.94-.49L7 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10%" });
  const total = testimonials.length;

  const next = useCallback(() => setActive((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setActive((p) => (p - 1 + total) % total), [total]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next, isPaused]);

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-36 px-6 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={sectionRef} className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
              <span className="text-xs font-[var(--font-body)] uppercase tracking-[0.25em] text-[var(--gold)]">
                Client Stories
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl text-[var(--cream)] leading-[1.05]"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Trusted by{" "}
              <span className="italic text-[var(--gold)]">Ireland&apos;s Best</span>
            </motion.h2>
          </div>

          {/* Nav controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex gap-3 flex-shrink-0"
          >
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-[var(--border-strong)] flex items-center justify-center text-[var(--fg-secondary)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all duration-200 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-[var(--border-strong)] flex items-center justify-center text-[var(--fg-secondary)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-all duration-200 cursor-pointer"
              aria-label="Next testimonial"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Testimonial display */}
        <div className="relative min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8"
            >
              {/* Quote */}
              <div className="flex flex-col gap-6 p-8 lg:p-12 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]">
                <StarRating />
                <blockquote>
                  <p
                    className="text-xl sm:text-2xl lg:text-3xl text-[var(--cream)] leading-[1.45] italic"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    &ldquo;{testimonials[active].quote}&rdquo;
                  </p>
                </blockquote>
                <div className="pt-4 border-t border-[var(--border)] flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-strong)] flex items-center justify-center flex-shrink-0">
                    <span
                      className="text-sm font-[var(--font-display)] italic text-[var(--gold)]"
                      aria-hidden="true"
                      style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                    >
                      {testimonials[active].name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--cream)]" style={{ fontFamily: "var(--font-body)" }}>
                      {testimonials[active].name}
                    </p>
                    <p className="text-xs text-[var(--fg-secondary)]" style={{ fontFamily: "var(--font-body)" }}>
                      {testimonials[active].role} · {testimonials[active].location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat card */}
              <div className="flex flex-col justify-between p-8 rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-elevated)]">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-[var(--font-body)] uppercase tracking-widest text-[var(--gold)]">
                    Annual Volume
                  </span>
                  <span
                    className="text-5xl font-[var(--font-display)] text-[var(--cream)] leading-none"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {testimonials[active].films.split(" ")[0]}
                  </span>
                  <span className="text-sm text-[var(--fg-secondary)]" style={{ fontFamily: "var(--font-body)" }}>
                    {testimonials[active].films.split(" ").slice(1).join(" ")}
                  </span>
                </div>
                <div className="mt-6">
                  <p className="text-xs text-[var(--fg-dim)] italic" style={{ fontFamily: "var(--font-body)" }}>
                    &ldquo;{testimonials[active].name}&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2 mt-8" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                i === active
                  ? "w-6 h-1.5 bg-[var(--gold)]"
                  : "w-1.5 h-1.5 bg-[var(--fg-dim)] hover:bg-[var(--fg-secondary)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
