"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-background-secondary/50">
      <SectionHeading
        title="Featured Projects"
        subtitle="AI-powered applications built to solve real-world problems"
      />

      <div className="space-y-16 lg:space-y-24">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: isEven ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center",
                !isEven && "lg:direction-rtl"
              )}
            >
              {/* Visual card */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: isEven ? 3 : -3 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "relative rounded-2xl overflow-hidden",
                  !project.image && "aspect-[16/10]",
                  !isEven && "lg:order-2",
                  "group"
                )}
                style={{ perspective: "1000px" }}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={750}
                    className="w-full h-auto"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <>
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-20",
                        project.gradient
                      )}
                    />
                    <div className="absolute inset-0 glass flex items-center justify-center">
                      <div className="text-center p-8">
                        <h4 className={cn(
                          "text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] bg-gradient-to-r bg-clip-text text-transparent",
                          project.gradient
                        )}>
                          {project.title}
                        </h4>
                        <p className="text-foreground-muted mt-2 text-sm">
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {/* Hover glow */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r blur-xl",
                    project.gradient
                  )}
                  style={{ mixBlendMode: "overlay" }}
                />
              </motion.div>

              {/* Content */}
              <div className={cn(!isEven && "lg:order-1 lg:text-right")}>
                <motion.span
                  className={cn(
                    "inline-block px-3 py-1 rounded-full text-xs font-medium mb-4",
                    "bg-accent-primary/10 text-accent-primary border border-accent-primary/20"
                  )}
                >
                  {project.tagline}
                </motion.span>

                <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-foreground mb-4">
                  {project.title}
                </h3>

                <p className="text-foreground-muted leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Links */}
                <div className={cn(
                  "flex gap-3",
                  !isEven && "lg:justify-end"
                )}>
                  {project.githubUrl && (
                    <GlowButton
                      href={project.githubUrl}
                      target="_blank"
                      variant="outline"
                      size="sm"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </GlowButton>
                  )}
                  {project.liveUrl && (
                    <GlowButton href={project.liveUrl} target="_blank" size="sm">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </GlowButton>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
