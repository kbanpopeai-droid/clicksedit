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
          const duration = 2000;
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

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 60, skewY: 3 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      delay: 0.8 + i * 0.08,
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const stats = [
  { value: 300, suffix: "+", label: "Films Edited" },
  { value: 5, suffix: " yrs", label: "In Business" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 48, suffix: "hr", label: "Rough Cut Delivery" },
];

const lines = [
  { text: "Every Wedding", italic: false },
  { text: "Deserves a", italic: false },
  { text: "Masterpiece.", italic: true },
];

export default function Hero() {
  const shouldReduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <section
      className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Video background ── */}
      <div className="absolute inset-0 z-0">
        {/* Fallback gradient (shown until video loads or if no video) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0A0806 0%, #1E1510 40%, #0A0806 100%)",
          }}
        />
        {/*
          REPLACE the src below with your real video URL.
          Recommended: WebM + MP4 fallback, 1080p max, compressed < 5MB.
          Example: src="/videos/hero-reel.webm"
        */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-2000"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          onCanPlay={(e) => {
            (e.currentTarget as HTMLVideoElement).style.opacity = "0.35";
          }}
        >
          {/* <source src="/videos/hero-reel.webm" type="video/webm" /> */}
          {/* <source src="/videos/hero-reel.mp4" type="video/mp4" /> */}
        </video>

        {/* Cinematic gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,8,6,0.55) 0%, rgba(10,8,6,0.1) 40%, rgba(10,8,6,0.2) 65%, rgba(10,8,6,0.95) 100%)",
          }}
        />
        {/* Ambient warm glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 60%, rgba(196,151,90,0.07), transparent 70%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto w-full pt-[72px]">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-10 h-px bg-[var(--gold)] opacity-50" />
          <span className="text-xs font-[var(--font-body)] uppercase tracking-[0.3em] text-[var(--gold)]">
            Wedding Video Editing Studio · Waterford, Ireland
          </span>
          <span className="w-10 h-px bg-[var(--gold)] opacity-50" />
        </motion.div>

        {/* Headline — stacked lines with clip reveal */}
        <h1 className="overflow-hidden" aria-label="Every Wedding Deserves a Masterpiece.">
          {lines.map((line, lineIdx) => (
            <div key={lineIdx} className="overflow-hidden">
              <motion.div
                custom={lineIdx}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className={`block leading-[1.0] tracking-[-0.02em] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl ${
                  line.italic
                    ? "italic text-[var(--gold)]"
                    : "text-[var(--cream)]"
                }`}
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {line.text}
              </motion.div>
            </div>
          ))}
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg sm:text-xl text-[var(--fg-secondary)] max-w-lg leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Ireland&apos;s premier wedding video editing studio. We edit your films
          so you can focus on capturing the next one.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-9 py-4 text-xs font-[var(--font-body)] uppercase tracking-widest text-[var(--bg)] bg-[var(--gold)] rounded-full hover:bg-[var(--gold-bright)] transition-all duration-200"
            >
              Start Your Project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2.5 px-9 py-4 text-xs font-[var(--font-body)] uppercase tracking-widest text-[var(--cream)] border border-[rgba(237,224,204,0.25)] rounded-full hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200 backdrop-blur-sm"
            >
              Watch Our Films
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 w-full max-w-2xl mx-auto"
        >
          <div
            className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(10, 8, 6, 0.6)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(196,151,90,0.12)",
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center py-6 px-4 gap-1"
                style={{
                  borderRight:
                    i < stats.length - 1
                      ? "1px solid rgba(196,151,90,0.10)"
                      : "none",
                }}
              >
                <span
                  className="text-2xl sm:text-3xl text-[var(--gold)]"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </span>
                <span
                  className="text-[10px] sm:text-xs font-[var(--font-body)] uppercase tracking-widest text-[var(--fg-dim)] text-center"
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {!shouldReduce && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2.4, duration: 1 }}
          aria-hidden="true"
        >
          <span className="text-[9px] font-[var(--font-body)] uppercase tracking-[0.3em] text-[var(--fg-dim)]">
            Scroll
          </span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-[var(--gold)] to-transparent"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 2.6 }}
          />
        </motion.div>
      )}
    </section>
  );
}
