import { MetadataRoute } from "next";
import { getAllPostMeta } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostMeta();
  const base = "https://alihussain.dev";

  const staticRoutes = ["/", "/projects", "/blog", "/experience"].map(
    (route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
    })
  );

  const blogRoutes = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...blogRoutes];
}
