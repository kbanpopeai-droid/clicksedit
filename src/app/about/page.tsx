import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about ClicksEdit — Ireland's premier wedding video editing studio based in Waterford.",
};

const values = [
  {
    title: "Craftsmanship",
    body: "We treat every frame like it matters — because to someone, it does. No shortcuts, no templates.",
  },
  {
    title: "Partnership",
    body: "We're not a vendor, we're an extension of your studio. Your growth is our goal.",
  },
  {
    title: "Clarity",
    body: "Clear briefs, honest timelines, and transparent pricing. No surprises, ever.",
  },
  {
    title: "Excellence",
    body: "We hold our work to the same standard you hold yours. The bar is high, on purpose.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="py-24 lg:py-32 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
              <span className="text-xs font-[var(--font-body)] uppercase tracking-[0.25em] text-[var(--gold)]">
                About ClicksEdit
              </span>
              <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl text-[var(--cream)] leading-[1.05] mb-8"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Built for Videographers{" "}
              <span className="italic text-[var(--gold)]">Who Care</span>
            </h1>
            <p
              className="text-lg text-[var(--fg-secondary)] max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              ClicksEdit was founded by a videographer who understood the pressure of
              delivering world-class films while also running a business, shooting new
              weddings, and maintaining creative standards. We built the studio we wish had
              existed.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 lg:py-24 px-6 bg-[var(--bg-alt)]">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl text-[var(--cream)] mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  Waterford, Ireland.{" "}
                  <span className="italic text-[var(--gold)]">Global Standard.</span>
                </h2>
                <p
                  className="text-base text-[var(--fg-secondary)] leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  We&apos;re based in Waterford, one of Ireland&apos;s oldest and most beautiful cities.
                  But we work with videographers across Ireland, the UK, and beyond. Distance
                  is no barrier to great storytelling.
                </p>
                <p
                  className="text-base text-[var(--fg-secondary)] leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Every editor on our team has a background in wedding videography. We know
                  what couples want, what photographers expect, and what makes a film go from
                  good to unforgettable.
                </p>
              </div>
              <div className="aspect-square rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-elevated)] via-[var(--bg-card)] to-[var(--bg)]" />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 60% 40%, rgba(196,151,90,0.12), transparent 60%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-7xl font-[var(--font-display)] italic text-[var(--gold)] opacity-20"
                    aria-hidden="true"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    CE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 lg:py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
                <span className="text-xs font-[var(--font-body)] uppercase tracking-[0.25em] text-[var(--gold)]">
                  What We Stand For
                </span>
                <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
              </div>
              <h2
                className="text-4xl sm:text-5xl text-[var(--cream)]"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Our <span className="italic text-[var(--gold)]">Values</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--border-strong)] transition-all duration-300"
                >
                  <h3
                    className="text-2xl text-[var(--cream)] mb-3"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm text-[var(--fg-secondary)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
