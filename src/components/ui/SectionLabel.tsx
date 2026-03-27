interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-[var(--font-body)] font-medium uppercase tracking-[0.2em] text-[var(--gold)] ${className}`}
    >
      <span className="w-6 h-px bg-[var(--gold)] opacity-60" />
      {children}
      <span className="w-6 h-px bg-[var(--gold)] opacity-60" />
    </span>
  );
}
