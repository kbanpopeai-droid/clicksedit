"use client";

const signals = [
  "300+ Wedding Films Delivered",
  "5+ Years of Cinematic Editing",
  "48-Hour Rough Cut Guarantee",
  "98% Client Retention Rate",
  "Unlimited Revisions on Every Project",
  "Waterford, Ireland · Serving Studios Globally",
  "Music Licensing Included",
  "4K Broadcast-Quality Export",
];

// Duplicate for seamless loop
const all = [...signals, ...signals];

export default function TrustBar() {
  return (
    <div
      className="border-y border-[var(--border)] overflow-hidden bg-[var(--bg-alt)]"
      aria-label="Studio highlights"
    >
      <div
        className="flex items-center whitespace-nowrap py-3.5"
        aria-hidden="true"
      >
        <div className="flex items-center gap-0 animate-marquee">
          {all.map((s, i) => (
            <span key={i} className="flex items-center gap-0">
              <span
                className="text-[11px] uppercase tracking-[0.2em] px-7"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  color: i % 2 === 0 ? "var(--fg-secondary)" : "var(--fg-dim)",
                }}
              >
                {s}
              </span>
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: "var(--gold)", opacity: 0.4 }}
              />
            </span>
          ))}
        </div>
      </div>

      {/* Accessible text (hidden from marquee) */}
      <ul className="sr-only">
        {signals.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
