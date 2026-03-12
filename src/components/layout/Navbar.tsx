"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { GlowButton } from "@/components/ui/GlowButton";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { isScrolled } = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="/#hero"
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white font-bold font-[family-name:var(--font-space-grotesk)] text-sm transition-shadow duration-300 group-hover:shadow-[0_0_20px_var(--glow-color)]">
              ZA
            </div>
            <span className="hidden sm:block font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground">
              Zeeshan Altaf
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-foreground-muted hover:text-foreground transition-colors rounded-lg hover:bg-accent-primary/5"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="hidden md:block">
              <GlowButton href="/#contact" size="sm">
                Get in Touch
              </GlowButton>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-lg glass flex items-center justify-center text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass border-t border-[var(--glass-border)]"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-foreground-muted hover:text-foreground hover:bg-accent-primary/5 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <GlowButton href="/#contact" size="sm" className="w-full">
                  Get in Touch
                </GlowButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
