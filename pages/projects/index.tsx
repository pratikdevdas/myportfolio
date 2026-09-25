import { NextSeo } from "next-seo";
import SiteLayout from "../../components/SiteLayout";
import Projects from "../../components/Projects";
import { projects } from "../../lib/projects";
export default function AllProjects() {
  return (
    <SiteLayout>
      <NextSeo
        title="Projects | Pratik Dev Das"
        description="AI products, web applications and creative experiments by Pratik Dev Das."
        canonical="https://www.pratikdevdas.com/projects"
      />
      <header className="page-heading">
        <p className="eyebrow">Products &amp; experiments</p>
        <h1>Things I’ve built.</h1>
        <p>
          From useful web applications to AI storytelling and spaces brought to
          life.
        </p>
      </header>
      <section className="projects-page" aria-label="All projects">
        <Projects projects={projects} />
      </section>
    </SiteLayout>
  );
}
