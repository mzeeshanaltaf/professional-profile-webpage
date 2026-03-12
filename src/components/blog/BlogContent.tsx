import { MDXRemote } from "next-mdx-remote/rsc";

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-[family-name:var(--font-space-grotesk)] prose-headings:text-foreground prose-p:text-foreground-muted prose-a:text-accent-primary prose-strong:text-foreground prose-code:text-accent-primary prose-code:bg-accent-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none prose-li:text-foreground-muted prose-h1:text-gradient">
      <MDXRemote source={content} />
    </article>
  );
}
