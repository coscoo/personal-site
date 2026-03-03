import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    return { title: post.title, description: post.description };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-20 animate-[fadeIn_0.4s_ease-in-out]">
      <header className="mb-10 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
        <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
          <time>{format(new Date(post.date), "MMMM d, yyyy")}</time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
      </header>
      <article className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-[var(--fg)] prose-code:before:content-none prose-code:after:content-none">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
