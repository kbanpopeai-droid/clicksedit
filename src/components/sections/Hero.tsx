"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";

// ── Count-up with IntersectionObserver ──────────────────
function CountUp({
  end,
  suffix = "",
  prefix = "",
}: {
  end: number;
  suffix?: string;
  prefix?: string;
}) {
  const [value, setValue] = useState(0);
  const elRef = useRef<HTMLElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 50;
          const stepMs = 2000 / steps;
          let i = 0;
          const tick = setInterval(() => {
            i++;
            // Ease-out: fast start, slow finish
            const progress = 1 - Math.pow(1 - i / steps, 3);
            setValue(Math.round(progress * end));
            if (i >= steps) { clearInterval(tick); setValue(end); }
          }, stepMs);
        }
      },
      { threshold: 0.8 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return (
    <em
      ref={elRef}
      className="not-italic tabular-nums"
      aria-label={`${prefix}${end}${suffix}`}
    >
      {prefix}{value}{suffix}
    </em>
  );
}

// ── Ambient bokeh orbs ───────────────────────────────────
const orbs = [
  { w: 600, h: 400, x: "-5%",  y: "10%",  color: "rgba(196,154,92,0.09)", dur: 24, delay: 0 },
  { w: 450, h: 450, x: "70%",  y: "5%",   color: "rgba(196,154,92,0.06)", dur: 31, delay: 4 },
  { w: 380, h: 500, x: "45%",  y: "55%",  color: "rgba(120,85,40,0.08)",  dur: 27, delay: 8 },
  { w: 300, h: 300, x: "15%",  y: "70%",  color: "rgba(196,154,92,0.05)", dur: 19, delay: 2 },
];

// ── Stats data ───────────────────────────────────────────
const stats = [
  { value: 300, suffix: "+",   label: "Films Edited",       prefix: "" },
  { value: 5,   suffix: " yrs", label: "In Business",       prefix: "" },
  { value: 98,  suffix: "%",   label: "Client Retention",   prefix: "" },
  { value: 48,  suffix: "hr",  label: "Rough Cut Delivery", prefix: "" },
];

// ── Headline lines ───────────────────────────────────────
const lines = ["Every Wedding", "Deserves a", "Masterpiece."];

const lineVariants: Variants = {
  hidden: { y: "110%", opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      delay: 0.65 + i * 0.13,
      duration: 1.05,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.7;
  }, []);

  return (
    <section
      id="main-content"
      className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      aria-label="ClicksEdit — Cinematic Wedding Video Editing Studio"
    >
      {/* ── Video / Background ────────────────────────── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Base warm gradient fallback */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 80% at 60% 30%, #1C1208 0%, #0A0806 55%, #06050300 100%)",
          }}
        />

        {/*
          VIDEO BACKGROUND
          Replace the src values below with your actual reel files.
          Recommended: WebM (VP9) + MP4 (H.264) for maximum browser support.
          Target: ≤5MB, 1080p, no audio track, visually blurred/slow motion.
        */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0, transition: "opacity 2.5s ease-in-out" }}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          onCanPlay={(e) => {
            (e.target as HTMLVideoElement).style.opacity = "0.32";
          }}
        >
          {/* <source src="/videos/hero-reel.webm" type="video/webm" /> */}
          {/* <source src="/videos/hero-reel.mp4"  type="video/mp4" />  */}
        </video>

        {/* Cinematic letterbox + vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              "linear-gradient(to bottom,  rgba(10,8,6,0.70) 0%, transparent 22%, transparent 65%, rgba(10,8,6,0.98) 100%)",
              "radial-gradient(ellipse 90% 70% at 50% 50%, transparent 30%, rgba(10,8,6,0.55) 100%)",
            ].join(", "),
          }}
        />

        {/* Ambient warm glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 65%, rgba(196,154,92,0.07), transparent 65%)",
          }}
        />

        {/* Animated bokeh orbs */}
        {!shouldReduce &&
          orbs.map((orb, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width:  orb.w,
                height: orb.h,
                left:   orb.x,
                top:    orb.y,
                background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
                filter: "blur(55px)",
              }}
              animate={
                shouldReduce
                  ? {}
                  : {
                      x: [0, 28, -18, 12, 0],
                      y: [0, -22, 14, -8, 0],
                      scale: [1, 1.07, 0.96, 1.04, 1],
                    }
              }
              transition={{
                duration: orb.dur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: orb.delay,
              }}
            />
          ))}
      </div>

      {/* ── Content ──────────────────────────────────── */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-5 sm:px-6 max-w-6xl mx-auto w-full pt-[72px]"
      >
        {/* Label */}
        <motion.div
          className="flex items-center gap-3 mb-9"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="w-10 h-px opacity-60"
            style={{ background: "var(--gold)" }}
          />
          <span
            className="text-[10px] sm:text-xs uppercase tracking-[0.32em] text-[var(--gold)]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Wedding Video Editing Studio &nbsp;·&nbsp; Waterford, Ireland
          </span>
          <span
            className="w-10 h-px opacity-60"
            style={{ background: "var(--gold)" }}
          />
        </motion.div>

        {/* Headline — clip reveal (line-by-line) */}
        <h1
          className="flex flex-col items-center gap-[0.02em]"
          aria-label="Every Wedding Deserves a Masterpiece."
        >
          {lines.map((line, i) => (
            <div key={i} className="overflow-hidden" aria-hidden="true">
              <motion.div
                custom={i}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className={[
                  "block leading-[1.0] tracking-[-0.025em]",
                  "text-[clamp(2.8rem,8vw,7rem)]",
                  i === lines.length - 1
                    ? "italic text-[var(--gold)]"
                    : "text-[var(--cream)]",
                ].join(" ")}
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {line}
              </motion.div>
            </div>
          ))}
        </h1>

        {/* Sub-headline */}
        <motion.p
          className="mt-8 text-[17px] sm:text-lg text-[var(--fg-secondary)] max-w-[480px] leading-[1.7]"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
        >
          Ireland&apos;s premier wedding video editing studio. We edit your films so
          you can focus on capturing the next love story.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mt-9"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Primary CTA — gold with glow */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{ position: "relative" }}
          >
            {/* Glow behind button */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: "var(--gold)",
                filter: "blur(18px)",
                opacity: 0.28,
                transform: "scale(0.9)",
              }}
              aria-hidden="true"
            />
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2.5 min-h-[48px] px-9 text-[11px] font-medium uppercase tracking-widest text-[var(--bg)] bg-[var(--gold)] rounded-full hover:bg-[var(--gold-bright)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Start Your Project
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2 6.5h9M7.5 3l3 3.5-3 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2.5 min-h-[48px] px-9 text-[11px] font-medium uppercase tracking-widest text-[var(--cream)] rounded-full transition-all duration-200"
              style={{
                fontFamily: "var(--font-body)",
                border: "1px solid rgba(237,224,204,0.20)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gold)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(237,224,204,0.20)";
                (e.currentTarget as HTMLAnchorElement).style.color = "var(--cream)";
              }}
            >
              Watch Our Films
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats — glass card row */}
        <motion.div
          className="mt-16 w-full max-w-[640px] mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.65, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Key statistics"
        >
          <div
            className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(10,8,6,0.65)",
              backdropFilter: "blur(20px) saturate(150%)",
              WebkitBackdropFilter: "blur(20px) saturate(150%)",
              border: "1px solid var(--border)",
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center py-6 px-3 gap-1.5"
                style={{
                  borderRight:
                    i < stats.length - 1 ? "1px solid var(--border)" : "none",
                  borderBottom:
                    i < 2 ? "1px solid var(--border)" : "none",
                }}
              >
                <span
                  className="text-[26px] sm:text-[28px] leading-none"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    color: "var(--gold)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                  aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
                >
                  <CountUp end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </span>
                <span
                  className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-center"
                  style={{ fontFamily: "var(--font-body)", color: "var(--fg-dim)", fontWeight: 500 }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Scroll cue ───────────────────────────────── */}
      {!shouldReduce && (
        <motion.div
          className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.38 }}
          transition={{ delay: 2.6, duration: 1 }}
          aria-hidden="true"
        >
          <span
            className="text-[8px] uppercase tracking-[0.35em]"
            style={{ color: "var(--fg-dim)", fontFamily: "var(--font-body)" }}
          >
            Scroll
          </span>
          <motion.div
            className="w-px h-10"
            style={{
              originY: 0,
              background: "linear-gradient(to bottom, var(--gold), transparent)",
            }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.8,
              repeatDelay: 0.4,
            }}
          />
        </motion.div>
      )}
    </section>
  );
}
