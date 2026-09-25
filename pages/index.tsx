import Link from "next/link";
import { NextSeo } from "next-seo";
import SiteLayout from "../components/SiteLayout";
import Hero from "../components/Layout/Hero";
import Projects from "../components/Projects";
import BlogList from "../components/BlogList";
import { featuredProjects, projects } from "../lib/projects";
import { readPosts, PostMeta } from "../lib/blog";
export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <SiteLayout>
      <NextSeo
        title="Pratik Dev Das — Fullstack Engineer & Creative Technologist"
        description="Web applications, AI-powered products and creative experiments by Pratik Dev Das."
        canonical="https://www.pratikdevdas.com/"
      />
      <Hero />
      <section id="projects">
        <div className="section-heading">
          <div>
            <h2>Selected work</h2>
            <p className="section-description">
              A few things I’ve built recently.
            </p>
          </div>
        </div>
        <Projects projects={featuredProjects} />
        <div className="all-projects">
          <Link className="action-secondary" href="/projects">
            View all {projects.length} projects
          </Link>
        </div>
      </section>
      <section className="writing-section">
        <div className="section-heading">
          <h2>Writing</h2>
          <Link className="text-link" href="/blog">
            Visit the blog
          </Link>
        </div>
        <BlogList posts={posts} />
      </section>
    </SiteLayout>
  );
}
export async function getStaticProps() {
  return { props: { posts: (await readPosts()).slice(0, 3) } };
}
