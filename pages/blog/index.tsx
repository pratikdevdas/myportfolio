import { NextSeo } from "next-seo";
import SiteLayout from "../../components/SiteLayout";
import BlogList from "../../components/BlogList";
import { readPosts, PostMeta } from "../../lib/blog";
export default function Blog({ posts }: { posts: PostMeta[] }) {
  return (
    <SiteLayout>
      <NextSeo
        title="Blog | Pratik Dev Das"
        description="Notes on building software, AI products and creative experiments."
        canonical="https://www.pratikdevdas.com/blog"
      />
      <header className="page-heading">
        <p className="eyebrow">The blog</p>
        <h1>Notes from building.</h1>
        <p>Things I’m learning, making and figuring out along the way.</p>
      </header>
      <section className="blog-page" aria-label="Blog posts">
        <BlogList posts={posts} />
      </section>
    </SiteLayout>
  );
}
export async function getStaticProps() {
  return { props: { posts: await readPosts() } };
}
