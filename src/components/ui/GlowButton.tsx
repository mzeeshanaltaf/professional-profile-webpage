"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  target?: string;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function GlowButton({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  target,
  className,
  type = "button",
  disabled = false,
}: GlowButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary: cn(
      "bg-gradient-to-r from-accent-primary to-accent-secondary text-white",
      "shadow-[0_0_20px_var(--glow-color)]",
      "hover:shadow-[0_0_35px_var(--glow-color-strong)]"
    ),
    outline: cn(
      "border border-accent-primary/40 text-accent-primary",
      "hover:bg-accent-primary/10",
      "hover:border-accent-primary/70"
    ),
  };

  const baseClasses = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-xl font-medium",
    "transition-all duration-300 font-[family-name:var(--font-space-grotesk)]",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    sizes[size],
    variants[variant],
    className
  );

  const motionProps = {
    whileHover: disabled ? undefined : { scale: 1.03 },
    whileTap: disabled ? undefined : { scale: 0.97 },
    transition: { duration: 0.2 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={baseClasses}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
