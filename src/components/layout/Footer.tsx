"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { navItems } from "@/data/navigation";

const socialLinks = [
  { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: SOCIAL_LINKS.twitter, label: "X / Twitter" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--glass-border)]">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white font-bold font-[family-name:var(--font-space-grotesk)] text-sm">
                ZA
              </div>
              <span className="font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-foreground-muted text-sm leading-relaxed max-w-xs">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground mb-4">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-foreground-muted hover:text-accent-primary transition-colors w-fit"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold font-[family-name:var(--font-space-grotesk)] text-foreground mb-4">
              Connect
            </h3>
            <div className="flex gap-3 mb-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-foreground-muted hover:text-accent-primary hover:border-accent-primary/30 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-sm text-foreground-muted hover:text-accent-primary transition-colors"
            >
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[var(--glass-border)] text-center">
          <p className="text-sm text-foreground-muted">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
