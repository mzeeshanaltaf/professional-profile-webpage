"use client";

import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { TechBadge } from "@/components/ui/TechBadge";
import type { BlogPostMeta } from "@/types";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPostMeta;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <GlassCard delay={index * 0.1} glow className="group overflow-hidden">
      {/* Gradient header strip */}
      <div className="h-2 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary" />

      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-foreground-muted mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-lg font-bold font-[family-name:var(--font-space-grotesk)] text-foreground mb-2 group-hover:text-accent-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-foreground-muted text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>

        {/* Read more */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 mt-4 text-sm text-accent-primary hover:underline"
        >
          Read more
          <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>
    </GlassCard>
  );
}
