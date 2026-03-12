import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";
import { BlogCard } from "@/components/blog/BlogCard";
import { getAllBlogPosts } from "@/lib/mdx";
import { ArrowRight } from "lucide-react";

export function BlogSection() {
  const posts = getAllBlogPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <SectionWrapper id="blog">
      <SectionHeading
        title="Latest Insights"
        subtitle="Thoughts on AI engineering, multi-agent systems, and intelligent automation"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>

      <div className="text-center mt-12">
        <GlowButton href="/blog" variant="outline">
          View All Posts
          <ArrowRight className="w-4 h-4" />
        </GlowButton>
      </div>
    </SectionWrapper>
  );
}
