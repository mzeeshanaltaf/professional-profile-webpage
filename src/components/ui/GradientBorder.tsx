"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface GradientBorderProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
}

export function GradientBorder({
  children,
  className,
  gradient = "from-accent-primary via-accent-secondary to-accent-tertiary",
}: GradientBorderProps) {
  return (
    <div className={cn("relative rounded-2xl p-[1px]", className)}>
      <div
        className={cn(
          "absolute inset-0 rounded-2xl bg-gradient-to-r opacity-60 blur-[1px]",
          gradient
        )}
      />
      <div className="relative rounded-2xl bg-background">{children}</div>
    </div>
  );
}
