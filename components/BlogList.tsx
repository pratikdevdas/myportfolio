import Link from "next/link";
import type { PostMeta } from "../lib/blog";
import Arrow from "./Arrow";
export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
export default function BlogList({ posts }: { posts: PostMeta[] }) {
  if (!posts.length)
    return (
      <div className="blog-empty">
        <p>First posts coming soon.</p>
        <p>
          Notes on building products, working with AI and exploring creative
          tools.
        </p>
      </div>
    );
  return (
    <div className="blog-list">
      {posts.map((post) => (
        <article key={post.slug}>
          <p className="eyebrow">
            <time dateTime={post.date}>{formatDate(post.date)}</time> ·{" "}
            {post.readingMinutes} min read
          </p>
          <h3>
            <Link href={`/blog/${post.slug}`}>
              {post.title} <Arrow />
            </Link>
          </h3>
          <p>{post.description}</p>
        </article>
      ))}
    </div>
  );
}
