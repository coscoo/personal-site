import { getAllPostMeta } from "@/lib/posts";
import PostList from "@/components/blog/PostList";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
};

export default function BlogPage() {
  const posts = getAllPostMeta();
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 animate-[fadeIn_0.4s_ease-in-out]">
      <SectionHeader
        title="Writing"
        subtitle="Thoughts on software, design, and building things."
      />
      <PostList posts={posts} />
    </div>
  );
}
