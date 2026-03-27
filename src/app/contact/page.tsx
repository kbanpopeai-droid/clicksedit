import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ClicksEdit. Send us your brief and we'll respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <section className="py-24 lg:py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-[var(--gold)] opacity-60" />
                  <span className="text-xs font-[var(--font-body)] uppercase tracking-[0.25em] text-[var(--gold)]">
                    Get in Touch
                  </span>
                </div>
                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl text-[var(--cream)] leading-[1.1] mb-8"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  Let&apos;s Start Your{" "}
                  <span className="italic text-[var(--gold)]">Project</span>
                </h1>
                <p
                  className="text-base text-[var(--fg-secondary)] leading-relaxed mb-10"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Tell us about your upcoming wedding edits and we&apos;ll get back to you
                  within one business day. No obligation, just a conversation.
                </p>

                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-[var(--border-strong)] flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M2 4l6 5 6-5M2 4h12v9a1 1 0 01-1 1H3a1 1 0 01-1-1V4z" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-[var(--font-body)] uppercase tracking-widest text-[var(--gold)] mb-1">Email</p>
                      <a
                        href="mailto:hello@clicksedit.com"
                        className="text-sm text-[var(--cream)] hover:text-[var(--gold)] transition-colors duration-200"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        hello@clicksedit.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-[var(--border-strong)] flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M8 1.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM1.5 8A6.5 6.5 0 018 1.5v0A6.5 6.5 0 0114.5 8M8 10.5v4M5.5 12.5h5" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-[var(--font-body)] uppercase tracking-widest text-[var(--gold)] mb-1">Location</p>
                      <p className="text-sm text-[var(--cream)]" style={{ fontFamily: "var(--font-body)" }}>
                        Waterford, Ireland
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-[var(--border-strong)] flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="6.5" stroke="var(--gold)" strokeWidth="1.5" />
                        <path d="M8 4.5v3.75l2.5 1.75" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-[var(--font-body)] uppercase tracking-widest text-[var(--gold)] mb-1">Response Time</p>
                      <p className="text-sm text-[var(--cream)]" style={{ fontFamily: "var(--font-body)" }}>
                        Within 1 business day
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — Form */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
