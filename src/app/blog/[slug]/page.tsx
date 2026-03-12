import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getAllBlogPosts, getBlogPost } from "@/lib/mdx";
import { BlogContent } from "@/components/blog/BlogContent";
import { TechBadge } from "@/components/ui/TechBadge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.meta.title} | Zeeshan Altaf`,
    description: post.meta.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-accent-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.meta.tags.map((tag: string) => (
                <TechBadge key={tag} label={tag} />
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-foreground mb-4 leading-tight">
              {post.meta.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-foreground-muted">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.meta.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.meta.readTime}
              </span>
            </div>
          </header>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent mb-12" />

          {/* Content */}
          <BlogContent content={post.content} />
        </div>
      </main>
      <Footer />
    </>
  );
}
