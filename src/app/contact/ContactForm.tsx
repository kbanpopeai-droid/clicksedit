"use client";

import { useState, FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setState("success");
        setForm({ name: "", email: "", service: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  const inputClass =
    "w-full px-5 py-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--cream)] placeholder-[var(--fg-dim)] focus:outline-none focus:border-[var(--gold)] transition-colors duration-200 text-sm";

  const labelClass =
    "block text-xs font-[var(--font-body)] uppercase tracking-widest text-[var(--fg-secondary)] mb-2";

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-12 rounded-2xl border border-[var(--gold)] bg-[var(--bg-card)] text-center gap-6">
        <div className="w-16 h-16 rounded-full border border-[var(--gold)] flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12l4.5 4.5 9.5-10" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <h3
            className="text-2xl text-[var(--cream)] mb-2"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Message Sent
          </h3>
          <p className="text-sm text-[var(--fg-secondary)]" style={{ fontFamily: "var(--font-body)" }}>
            We&apos;ll be in touch within one business day.
          </p>
        </div>
        <button
          onClick={() => setState("idle")}
          className="text-xs font-[var(--font-body)] uppercase tracking-widest text-[var(--gold)] hover:text-[var(--gold-bright)] transition-colors duration-200"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your Name <span className="text-[var(--gold)]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Jane Smith"
            style={{ fontFamily: "var(--font-body)" }}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-[var(--gold)]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="jane@studio.com"
            style={{ fontFamily: "var(--font-body)" }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Service
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className={`${inputClass} appearance-none cursor-pointer`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          <option value="" style={{ background: "var(--bg-elevated)" }}>
            Select a package...
          </option>
          <option value="highlight" style={{ background: "var(--bg-elevated)" }}>
            Highlight Film — €280
          </option>
          <option value="full-story" style={{ background: "var(--bg-elevated)" }}>
            Full Story — €480
          </option>
          <option value="feature" style={{ background: "var(--bg-elevated)" }}>
            Feature Documentary — €780
          </option>
          <option value="custom" style={{ background: "var(--bg-elevated)" }}>
            Custom / Not sure yet
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Your Brief <span className="text-[var(--gold)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about the wedding — date, venue, style, any reference films..."
          style={{ fontFamily: "var(--font-body)" }}
        />
      </div>

      {state === "error" && (
        <p
          className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-5 py-4"
          role="alert"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Something went wrong. Please try again or email us directly at hello@clicksedit.com
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-[var(--font-body)] uppercase tracking-widest text-[var(--bg)] bg-[var(--gold)] rounded-full hover:bg-[var(--gold-bright)] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {state === "submitting" ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.25" />
              <path d="M12 2a10 10 0 019.8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
