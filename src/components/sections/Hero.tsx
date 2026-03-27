"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const step = end / steps;
          let current = 0;
          const interval = setInterval(() => {
            current = Math.min(current + step, end);
            setValue(Math.round(current));
            if (current >= end) clearInterval(interval);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const bokehOrbs = [
  { size: 500, x: "10%", y: "20%", color: "rgba(196,151,90,0.12)", duration: 22 },
  { size: 350, x: "75%", y: "15%", color: "rgba(196,151,90,0.08)", duration: 28 },
  { size: 420, x: "55%", y: "65%", color: "rgba(120,90,50,0.10)", duration: 32 },
  { size: 280, x: "20%", y: "75%", color: "rgba(196,151,90,0.06)", duration: 18 },
];

const stats = [
  { value: 300, suffix: "+", label: "Films edited" },
  { value: 5, suffix: " yrs", label: "Experience" },
  { value: 98, suffix: "%", label: "Client retention" },
];

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.6 + i * 0.06, duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  const shouldReduce = useReducedMotion();

  const heading = "We Edit So You Can\u00a0Shine";
  const words = heading.split(" ");

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Bokeh background */}
      {!shouldReduce &&
        bokehOrbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: orb.size,
              height: orb.size,
              left: orb.x,
              top: orb.y,
              transform: "translate(-50%, -50%)",
              background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
              filter: "blur(60px)",
            }}
            animate={{
              x: [0, 30, -20, 10, 0],
              y: [0, -20, 15, -10, 0],
              scale: [1, 1.08, 0.95, 1.04, 1],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3,
            }}
          />
        ))}

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 20%, var(--bg) 90%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-[72px]">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-[var(--gold)] opacity-70" />
          <span className="text-xs font-[var(--font-body)] uppercase tracking-[0.25em] text-[var(--gold)]">
            Cinematic Wedding Editing
          </span>
          <span className="w-8 h-px bg-[var(--gold)] opacity-70" />
        </motion.div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight text-[var(--cream)] mb-6"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="inline-block mr-[0.22em] last:mr-0"
            >
              {word === "Shine" ? (
                <span className="italic text-[var(--gold)]">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-[var(--fg-secondary)] max-w-xl leading-relaxed mb-12"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Ireland&apos;s premier wedding video editing studio. We transform raw footage
          into films your clients will treasure forever.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 text-xs font-[var(--font-body)] uppercase tracking-widest text-[var(--bg)] bg-[var(--gold)] rounded-full hover:bg-[var(--gold-bright)] transition-all duration-200"
            >
              Start Your Project
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/portfolio"
              className="inline-flex px-8 py-4 text-xs font-[var(--font-body)] uppercase tracking-widest text-[var(--cream)] border border-[var(--border-strong)] rounded-full hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200"
            >
              View Our Work
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-px"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="px-10 py-5 flex flex-col items-center gap-1"
              style={{
                borderRight: i < stats.length - 1
                  ? "1px solid var(--border)"
                  : "none",
              }}
            >
              <span
                className="text-3xl font-[var(--font-display)] text-[var(--gold)]"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                <CountUp end={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs font-[var(--font-body)] uppercase tracking-widest text-[var(--fg-dim)]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2.2, duration: 1 }}
        aria-hidden="true"
      >
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-[var(--gold)] to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        />
      </motion.div>
    </section>
  );
}
