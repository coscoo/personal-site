import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostFrontmatter, PostMeta, Post } from "@/types";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function getReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

export function getAllPostMeta(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
      const { data, content } = matter(raw);
      const frontmatter = data as PostFrontmatter;
      return {
        ...frontmatter,
        slug,
        readingTime: getReadingTime(content),
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const frontmatter = data as PostFrontmatter;
  return {
    ...frontmatter,
    slug,
    readingTime: getReadingTime(content),
    content,
  };
}

export function getAllSlugs(): string[] {
  return getAllPostMeta().map((p) => p.slug);
}
