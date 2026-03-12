import { getAllBlogPosts } from "@/lib/mdx";
import { BlogCard } from "@/components/blog/BlogCard";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Zeeshan Altaf — AI Engineering Insights",
  description:
    "Articles on AI engineering, multi-agent systems, RAG, automation workflows, and intelligent system design.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              Insights on AI engineering, multi-agent systems, and building
              intelligent automation.
            </p>
          </div>

          {/* Posts grid */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-foreground-muted text-lg">
                No posts yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
