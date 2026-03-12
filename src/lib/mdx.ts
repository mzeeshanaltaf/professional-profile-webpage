import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPostMeta } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getAllBlogPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(BLOG_DIR, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || "",
      date: data.date || new Date().toISOString(),
      readTime: data.readTime || "5 min read",
      tags: data.tags || [],
      coverImage: data.coverImage,
    } satisfies BlogPostMeta;
  });

  // Sort by date descending
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPost(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    meta: {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || "",
      date: data.date || new Date().toISOString(),
      readTime: data.readTime || "5 min read",
      tags: data.tags || [],
      coverImage: data.coverImage,
    } satisfies BlogPostMeta,
    content,
  };
}
