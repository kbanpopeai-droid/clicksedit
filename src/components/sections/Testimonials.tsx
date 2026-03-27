"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote:
      "ClicksEdit transformed my business. I used to spend weeks editing — now I spend that time shooting. My clients are getting better films and I'm taking on double the bookings.",
    name: "Ciara Hennessy",
    role: "Wedding Videographer, Cork",
  },
  {
    quote:
      "The consistency is incredible. Every film looks like it came from the same creative vision. My brand has never been stronger.",
    name: "Darragh Murphy",
    role: "Founder, Murphy Films, Dublin",
  },
  {
    quote:
      "I was sceptical about outsourcing, but the quality blew me away. The turnaround is faster than I could ever do myself, and the colour grading is exceptional.",
    name: "Siobhán Kelly",
    role: "Wedding Videographer, Galway",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-6 p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-strong)] transition-all duration-300"
    >
      {/* Stars */}
      <div className="flex gap-1" aria-label="5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="var(--gold)" aria-hidden="true">
            <path d="M7 1l1.5 4.5H14l-4 3 1.5 4.5L7 10.5 2.5 13 4 8.5l-4-3h5.5z" />
          </svg>
        ))}
      </div>

      <blockquote>
        <p
          className="text-base lg:text-lg text-[var(--cream)] leading-relaxed italic"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      <div className="mt-auto pt-4 border-t border-[var(--border)]">
        <p className="text-sm font-medium text-[var(--cream)]" style={{ fontFamily: "var(--font-body)" }}>
          {testimonial.name}
        </p>
        <p className="text-xs text-[var(--fg-secondary)] mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
          {testimonial.role}
        </p>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="testimonials" className="py-24 lg:py-36 px-6 bg-[var(--bg-alt)]">
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
              Client Stories
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
            Trusted by{" "}
            <span className="italic text-[var(--gold)]">Ireland&apos;s Best</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
