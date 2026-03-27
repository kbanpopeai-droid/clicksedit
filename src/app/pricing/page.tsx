import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Clear, transparent pricing for wedding video editing. From highlight reels to full-day documentaries.",
};

const plans = [
  {
    name: "Highlight",
    price: "€280",
    duration: "3–5 minute film",
    description: "The perfect shareable highlight reel. Captures the best moments in a cinematic, music-driven edit.",
    includes: [
      "3–5 min cinematic highlight",
      "Professional colour grade",
      "Music licensing included",
      "48-hr rough cut",
      "2 revision rounds",
      "4K export",
    ],
    featured: false,
    cta: "Get Started",
  },
  {
    name: "Full Story",
    price: "€480",
    duration: "Highlight + Full ceremony",
    description: "Everything in Highlight, plus the complete ceremony edit — the film that preserves every vow.",
    includes: [
      "3–5 min cinematic highlight",
      "Full ceremony edit (uncut)",
      "Professional colour grade",
      "Music licensing included",
      "48-hr rough cut",
      "3 revision rounds",
      "4K export",
      "Private Vimeo delivery",
    ],
    featured: true,
    cta: "Most Popular",
  },
  {
    name: "Feature",
    price: "€780",
    duration: "Full day documentary",
    description: "The complete cinematic experience. Every moment from getting ready to the first dance and beyond.",
    includes: [
      "3–5 min cinematic highlight",
      "Extended 20–40 min documentary",
      "Full ceremony & speeches",
      "Advanced colour grade",
      "Music licensing included",
      "24-hr rough cut",
      "Unlimited revisions",
      "4K + web export",
      "Private Vimeo delivery",
    ],
    featured: false,
    cta: "Get Started",
  },
];

const addons = [
  { name: "Same-day edit", price: "€180" },
  { name: "Drone footage edit", price: "€80" },
  { name: "Additional revision round", price: "€40" },
  { name: "Aerial photography", price: "€120" },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="py-24 lg:py-32 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
              <span className="text-xs font-[var(--font-body)] uppercase tracking-[0.25em] text-[var(--gold)]">
                Pricing
              </span>
              <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl text-[var(--cream)] leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Clear Pricing,{" "}
              <span className="italic text-[var(--gold)]">No Surprises</span>
            </h1>
            <p
              className="text-lg text-[var(--fg-secondary)] leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Every package is all-inclusive. No hidden fees, no nickel-and-diming. Just
              great editing at a fair price.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
                    plan.featured
                      ? "border-[var(--gold)] bg-[var(--bg-elevated)]"
                      : "border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-strong)]"
                  }`}
                >
                  {plan.featured && (
                    <div className="mb-4">
                      <span className="text-xs font-[var(--font-body)] uppercase tracking-widest text-[var(--bg)] bg-[var(--gold)] px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h2
                    className="text-3xl text-[var(--cream)] mb-1"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {plan.name}
                  </h2>
                  <p className="text-sm text-[var(--fg-secondary)] mb-6" style={{ fontFamily: "var(--font-body)" }}>
                    {plan.duration}
                  </p>
                  <p
                    className="text-5xl font-[var(--font-display)] text-[var(--gold)] mb-2"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {plan.price}
                  </p>
                  <p className="text-sm text-[var(--fg-secondary)] mb-8 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {plan.description}
                  </p>

                  <ul className="flex flex-col gap-3 mb-10 flex-1">
                    {plan.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-[var(--fg-secondary)]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <svg
                          className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 8l3.5 3.5 6.5-7"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`inline-flex items-center justify-center px-6 py-3.5 text-xs font-[var(--font-body)] uppercase tracking-widest rounded-full transition-all duration-200 ${
                      plan.featured
                        ? "bg-[var(--gold)] text-[var(--bg)] hover:bg-[var(--gold-bright)]"
                        : "border border-[var(--border-strong)] text-[var(--cream)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="py-16 lg:py-24 px-6 bg-[var(--bg-alt)]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-3xl sm:text-4xl text-[var(--cream)]"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Optional <span className="italic text-[var(--gold)]">Add-ons</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {addons.map((addon) => (
                <div
                  key={addon.name}
                  className="flex items-center justify-between px-6 py-5 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]"
                >
                  <span className="text-sm text-[var(--cream)]" style={{ fontFamily: "var(--font-body)" }}>
                    {addon.name}
                  </span>
                  <span
                    className="text-lg text-[var(--gold)]"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ teaser */}
        <section className="py-16 px-6 text-center">
          <div className="max-w-xl mx-auto">
            <p className="text-[var(--fg-secondary)] mb-6" style={{ fontFamily: "var(--font-body)" }}>
              Have questions about our process or packages?
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-3.5 text-xs font-[var(--font-body)] uppercase tracking-widest text-[var(--bg)] bg-[var(--gold)] rounded-full hover:bg-[var(--gold-bright)] transition-all duration-200"
            >
              Talk to Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
