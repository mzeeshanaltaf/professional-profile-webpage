"use client";

import { ThemedImage } from "@/components/ui/ThemedImage";
import { motion } from "framer-motion";
import { Bot, ArrowRight, ExternalLink } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { TechBadge } from "@/components/ui/TechBadge";
import { automations } from "@/data/automations";

export function AutomationSection() {
  return (
    <SectionWrapper id="automation">
      <SectionHeading
        title="Automation Workflows"
        subtitle="Multi-agent systems that work together to automate complex operations"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {automations.map((automation, index) => (
          <GlassCard
            key={automation.id}
            delay={index * 0.15}
            glow
            className="p-8"
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-tertiary flex items-center justify-center shrink-0">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-foreground">
                  {automation.title}
                </h3>
              </div>
            </div>

            <p className="text-foreground-muted text-sm leading-relaxed mb-6">
              {automation.description}
            </p>

            {/* Screenshot */}
            {automation.image && (
              <div className="rounded-xl overflow-hidden mb-6">
                <ThemedImage
                  src={automation.image}
                  alt={automation.title}
                  width={1200}
                  height={750}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}

            {/* Agent flow visualization */}
            <div className="mb-6 space-y-3">
              <p className="text-xs uppercase tracking-wider text-foreground-muted/70 font-semibold">
                Agent Pipeline
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {automation.agents.map((agent, i) => (
                  <div key={agent} className="flex items-center gap-2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.15 }}
                      className="px-3 py-1.5 rounded-lg glass text-xs font-medium text-foreground font-[family-name:var(--font-jetbrains-mono)]"
                    >
                      {agent}
                    </motion.div>
                    {i < automation.agents.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-accent-primary/50" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {automation.techStack.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>

            {/* Live link */}
            {automation.liveUrl && (
              <div className="mt-5 pt-5 border-t border-white/10">
                <a
                  href={automation.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-accent-secondary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Project
                </a>
              </div>
            )}
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
