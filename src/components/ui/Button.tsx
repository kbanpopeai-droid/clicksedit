"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const variants = {
  gold:
    "bg-[var(--gold)] text-[var(--bg)] hover:bg-[var(--gold-bright)] border border-transparent",
  outline:
    "bg-transparent text-[var(--cream)] border border-[var(--border-strong)] hover:border-[var(--gold)] hover:text-[var(--gold)]",
  ghost:
    "bg-transparent text-[var(--fg-secondary)] border border-transparent hover:text-[var(--cream)]",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm tracking-wide",
  md: "px-7 py-3.5 text-sm tracking-widest",
  lg: "px-10 py-4 text-base tracking-widest",
};

export default function Button({
  href,
  onClick,
  variant = "gold",
  size = "md",
  children,
  className = "",
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-[var(--font-body)] font-medium uppercase transition-all duration-200 cursor-pointer select-none";

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${
    disabled ? "opacity-40 pointer-events-none" : ""
  } ${className}`;

  const MotionTag = motion.button;

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex"
      >
        <Link
          href={href}
          className={cls}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <MotionTag
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </MotionTag>
  );
}
