import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import SiteLayout from "../../components/SiteLayout";
import { formatDate } from "../../components/BlogList";
import { BlogPost, readPost, readPosts } from "../../lib/blog";
export default function Post({ post }: { post: BlogPost }) {
  return (
    <SiteLayout>
      <NextSeo
        title={`${post.title} | Pratik Dev Das`}
        description={post.description}
        canonical={`https://www.pratikdevdas.com/blog/${post.slug}`}
        openGraph={{
          type: "article",
          article: {
            publishedTime: `${post.date}T00:00:00Z`,
            authors: ["https://www.pratikdevdas.com"],
          },
        }}
      />
      <article className="blog-article">
        <Link className="text-link" href="/blog">
          ← All posts
        </Link>
        <header className="page-heading">
          <p className="eyebrow">
            <time dateTime={post.date}>{formatDate(post.date)}</time> ·{" "}
            {post.readingMinutes} min read
          </p>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </header>
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Link className="text-link article-back" href="/blog">
          ← Back to all posts
        </Link>
      </article>
    </SiteLayout>
  );
}
export const getStaticPaths: GetStaticPaths = async () => ({
  paths: (await readPosts()).map((post) => ({ params: { slug: post.slug } })),
  fallback: false,
});
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post =
    typeof params?.slug === "string" ? await readPost(params.slug) : null;
  return post ? { props: { post } } : { notFound: true };
};
