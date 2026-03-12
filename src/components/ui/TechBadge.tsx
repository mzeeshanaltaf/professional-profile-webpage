import { cn } from "@/lib/utils";

interface TechBadgeProps {
  label: string;
  className?: string;
}

export function TechBadge({ label, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        "bg-accent-primary/10 text-accent-primary border border-accent-primary/20",
        "font-[family-name:var(--font-jetbrains-mono)]",
        className
      )}
    >
      {label}
    </span>
  );
}
