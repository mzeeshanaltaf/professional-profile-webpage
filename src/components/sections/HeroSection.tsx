"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { GlowButton } from "@/components/ui/GlowButton";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

const socialLinks = [
  { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: SOCIAL_LINKS.twitter, label: "X" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent-primary/20 blur-[100px]"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent-secondary/20 blur-[100px]"
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 20, -30, 0],
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-accent-tertiary/10 blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Radial overlay for focus */}
      <div className="absolute inset-0 -z-5 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_75%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass text-sm text-foreground-muted"
        >
          <span className="w-2 h-2 rounded-full bg-accent-tertiary animate-pulse" />
          {SITE_CONFIG.title}
        </motion.div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] leading-[1.1] mb-6">
          <AnimatedText text="Architecting Agentic AI Systems" className="text-foreground" />
          <br />
          <AnimatedText
            text="AI Systems"
            className="text-gradient"
            delay={0.3}
          />
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-10"
        >
          Agentic workflows, multi-agent systems & intelligent automation
          — transforming complex processes into streamlined AI-powered solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <GlowButton href="/#projects" size="lg">
            View Projects
            <ArrowRight className="w-5 h-5" />
          </GlowButton>
          <GlowButton href="/#contact" variant="outline" size="lg">
            Get in Touch
          </GlowButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-xl glass flex items-center justify-center text-foreground-muted hover:text-accent-primary hover:border-accent-primary/30 transition-all duration-300 hover:shadow-[0_0_15px_var(--glow-color)]"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-foreground-muted/30 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
