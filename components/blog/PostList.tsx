import { PostMeta } from "@/types";
import PostCard from "./PostCard";

export default function PostList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return (
      <p className="text-[var(--muted)] mt-10">
        No posts yet. Check back soon.
      </p>
    );
  }
  return (
    <div className="mt-10 divide-y divide-[var(--border)]">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
