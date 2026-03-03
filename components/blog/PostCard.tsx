import Link from "next/link";
import { PostMeta } from "@/types";
import { format } from "date-fns";
import Tag from "@/components/ui/Tag";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group py-5">
      <Link href={`/blog/${post.slug}`} className="block space-y-1.5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-medium text-base group-hover:text-[var(--muted)] transition-colors">
            {post.title}
          </h3>
          <time className="text-xs text-[var(--muted)] shrink-0">
            {format(new Date(post.date), "MMM d, yyyy")}
          </time>
        </div>
        <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-2">
          {post.description}
        </p>
        <div className="flex items-center gap-3 pt-0.5">
          <span className="text-xs text-[var(--muted)]">{post.readingTime}</span>
          {post.tags?.slice(0, 3).map((tag) => (
            <Tag key={tag} size="sm">
              {tag}
            </Tag>
          ))}
        </div>
      </Link>
    </article>
  );
}
