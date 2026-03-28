"use client";

import { useState, FormEvent, useRef } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

interface FieldError {
  name?: string;
  email?: string;
  message?: string;
}

const inputBase =
  "w-full px-5 rounded-xl bg-[var(--bg-elevated)] border text-[var(--cream)] placeholder-[var(--fg-dim)] focus:outline-none transition-all duration-200 text-[14px]";

const inputIdle = "border-[var(--border)] focus:border-[var(--gold)] focus:shadow-[0_0_0_3px_rgba(196,154,92,0.10)]";
const inputError = "border-[var(--error)] focus:border-[var(--error)] focus:shadow-[0_0_0_3px_rgba(248,113,113,0.10)]";

const labelClass =
  "block text-[10px] uppercase tracking-[0.25em] text-[var(--fg-secondary)] mb-2";

function FieldErrorMsg({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p
      className="mt-1.5 text-[12px] text-[var(--error)] flex items-center gap-1.5"
      role="alert"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="1" />
        <path d="M6 3.5v3M6 8.5v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      {msg}
    </p>
  );
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FieldError>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const firstErrorRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof FieldError]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Validate on blur (not keystroke) — per UX guidelines
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "name" && !value.trim()) {
      setErrors((prev) => ({ ...prev, name: "Your name is required." }));
    }
    if (name === "email") {
      if (!value.trim()) {
        setErrors((prev) => ({ ...prev, email: "Email address is required." }));
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        setErrors((prev) => ({ ...prev, email: "Please enter a valid email address." }));
      }
    }
    if (name === "message" && !value.trim()) {
      setErrors((prev) => ({ ...prev, message: "Please tell us about your project." }));
    }
  };

  const validate = (): FieldError => {
    const newErrors: FieldError = {};
    if (!form.name.trim()) newErrors.name = "Your name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) newErrors.message = "Please tell us about your project.";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus first invalid field — per WCAG focus management
      setTimeout(() => firstErrorRef.current?.focus(), 50);
      return;
    }

    setState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setState(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", email: "", service: "", message: "" });
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div
        className="flex flex-col items-center justify-center p-12 rounded-2xl text-center gap-6"
        style={{ background: "var(--bg-card)", border: "1px solid var(--gold-border-strong)" }}
        role="status"
        aria-live="polite"
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ border: "1px solid var(--gold)" }}
        >
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
          <p
            className="text-[13px] text-[var(--fg-secondary)]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            We&apos;ll be in touch within one business day.
          </p>
        </div>
        <button
          onClick={() => setState("idle")}
          className="text-[11px] uppercase tracking-widest text-[var(--gold)] hover:text-[var(--gold-bright)] transition-colors duration-200 cursor-pointer"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 p-8 rounded-2xl"
      style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
      noValidate
      aria-label="Contact form"
    >
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass} style={{ fontFamily: "var(--font-body)" }}>
            Your Name <span style={{ color: "var(--gold)" }} aria-hidden="true">*</span>
          </label>
          <input
            ref={(el) => { if (errors.name && !errors.email && !errors.message) firstErrorRef.current = el; }}
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputBase} h-[50px] ${errors.name ? inputError : inputIdle}`}
            placeholder="Jane Smith"
            style={{ fontFamily: "var(--font-body)" }}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          <FieldErrorMsg msg={errors.name} />
        </div>

        <div>
          <label htmlFor="email" className={labelClass} style={{ fontFamily: "var(--font-body)" }}>
            Email <span style={{ color: "var(--gold)" }} aria-hidden="true">*</span>
          </label>
          <input
            ref={(el) => { if (errors.email && !errors.name) firstErrorRef.current = el; }}
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${inputBase} h-[50px] ${errors.email ? inputError : inputIdle}`}
            placeholder="jane@studio.com"
            style={{ fontFamily: "var(--font-body)" }}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          <FieldErrorMsg msg={errors.email} />
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className={labelClass} style={{ fontFamily: "var(--font-body)" }}>
          Service
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className={`${inputBase} h-[50px] appearance-none cursor-pointer ${inputIdle}`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          <option value="" style={{ background: "var(--bg-elevated)" }}>
            Select a package…
          </option>
          <option value="highlight" style={{ background: "var(--bg-elevated)" }}>Highlight Film — €280</option>
          <option value="full-story" style={{ background: "var(--bg-elevated)" }}>Full Story — €480</option>
          <option value="feature" style={{ background: "var(--bg-elevated)" }}>Feature Documentary — €780</option>
          <option value="custom" style={{ background: "var(--bg-elevated)" }}>Custom / Not sure yet</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass} style={{ fontFamily: "var(--font-body)" }}>
          Your Brief <span style={{ color: "var(--gold)" }} aria-hidden="true">*</span>
        </label>
        <textarea
          ref={(el) => { if (errors.message && !errors.name && !errors.email) firstErrorRef.current = el; }}
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${inputBase} py-4 resize-none ${errors.message ? inputError : inputIdle}`}
          placeholder="Tell us about the wedding — date, venue, style, any reference films…"
          style={{ fontFamily: "var(--font-body)" }}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        <FieldErrorMsg msg={errors.message} />
      </div>

      {/* Global error */}
      {state === "error" && (
        <div
          className="px-5 py-4 rounded-xl text-[13px] text-[var(--error)] flex items-start gap-3"
          style={{ background: "rgba(248,113,113,0.08)", border: "1px solid rgba(248,113,113,0.20)" }}
          role="alert"
          aria-live="assertive"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" />
            <path d="M8 5v3.5M8 10.5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
          <span style={{ fontFamily: "var(--font-body)" }}>
            Something went wrong. Please try again or email us at{" "}
            <a href="mailto:hello@clicksedit.com" className="underline hover:text-[var(--cream)] transition-colors">
              hello@clicksedit.com
            </a>
          </span>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex items-center justify-center gap-3 min-h-[50px] px-8 text-[11px] uppercase tracking-widest text-[var(--bg)] bg-[var(--gold)] rounded-full hover:bg-[var(--gold-bright)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer mt-1"
        style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
        aria-busy={state === "submitting"}
      >
        {state === "submitting" ? (
          <>
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.25" />
              <path d="M12 2a10 10 0 019.8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>

      <p
        className="text-[11px] text-[var(--fg-dim)] text-center"
        style={{ fontFamily: "var(--font-body)" }}
      >
        We respond within 1 business day.
      </p>
    </form>
  );
}
