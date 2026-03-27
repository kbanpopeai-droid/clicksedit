import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortfolioGrid from "./PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse our collection of cinematic wedding films. Each story is unique, carefully crafted to reflect the couple's personality.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Page Hero */}
        <section className="py-24 lg:py-32 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
              <span className="text-xs font-[var(--font-body)] uppercase tracking-[0.25em] text-[var(--gold)]">
                Our Work
              </span>
              <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl text-[var(--cream)] leading-[1.05] mb-6"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Stories We&apos;ve{" "}
              <span className="italic text-[var(--gold)]">Crafted</span>
            </h1>
            <p
              className="text-lg text-[var(--fg-secondary)] leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Over 300 films edited. Each one unique. Each one someone&apos;s most
              important day.
            </p>
          </div>
        </section>

        <PortfolioGrid />
      </main>
      <Footer />
    </>
  );
}
