"use client";

import { motion } from "framer-motion";
import { Rocket, Brain, Workflow, Database } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  Brain,
  Workflow,
  Database,
};

export function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        title="What I Build"
        subtitle="Specialized AI solutions that turn complex challenges into competitive advantages"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] || Rocket;

          return (
            <GlassCard
              key={service.id}
              delay={index * 0.15}
              glow
              className="p-8 group"
            >
              {/* Icon */}
              <div
                className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
                  "bg-gradient-to-br",
                  service.gradient,
                  "shadow-lg transition-transform duration-300 group-hover:scale-110"
                )}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-foreground mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-foreground-muted text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground-muted"
                  >
                    <span className={cn("w-1.5 h-1.5 rounded-full bg-gradient-to-r", service.gradient)} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Bottom gradient accent */}
              <div
                className={cn(
                  "mt-6 h-0.5 rounded-full bg-gradient-to-r opacity-40 group-hover:opacity-80 transition-opacity",
                  service.gradient
                )}
              />
            </GlassCard>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
