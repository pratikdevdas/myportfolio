import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import SiteLayout from "../../components/SiteLayout";
import { ProjectArtwork } from "../../components/Projects";
import { projects, getProject } from "../../lib/projects";
import { Project } from "../../types/project";
interface Props {
  project: Project;
  next: { id: string; title: string };
}
export default function ProjectPage({ project, next }: Props) {
  return (
    <SiteLayout>
      <NextSeo
        title={`${project.title} | Pratik Dev Das`}
        description={project.description}
        canonical={`https://www.pratikdevdas.com/projects/${project.id}`}
        openGraph={{
          images: [
            {
              url: `https://www.pratikdevdas.com${project.image}`,
              alt: project.imageAlt,
            },
          ],
        }}
      />
      <article className="project-detail">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/projects">← All projects</Link>
          <span>/</span>
          <span>{project.title}</span>
        </nav>
        <header className="page-heading">
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="detail-actions">
            <a
              className="action-primary"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.id === "agent-comics"
                ? "Visit website"
                : "View live project"}{" "}
            </a>
            {project.appUrl ? (
              <a
                className="action-secondary"
                href={project.appUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                App Store
              </a>
            ) : null}
            {project.github ? (
              <a
                className="action-secondary"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View source
              </a>
            ) : null}
            {project.videoUrl ? (
              <a
                className="action-secondary"
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch walkthrough
              </a>
            ) : null}
            {project.previewUrl ? (
              <a
                className="text-link"
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Alternate preview
              </a>
            ) : null}
          </div>
        </header>
        <ProjectArtwork project={project} detail />
        <div className="project-body">
          <section>
            <h2>The project</h2>
            <p>{project.overview}</p>
            <h3>What it does</h3>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
          <aside>
            <dl>
              <dt>Focus</dt>
              <dd>{project.focus}</dd>
              <dt>
                {project.id === "agent-comics"
                  ? "Product capabilities"
                  : project.id === "garden-home"
                  ? "Creative workflow"
                  : "Tools & technologies"}
              </dt>
              <dd>{project.stacks.join(" · ")}</dd>
              <dt>Project</dt>
              <dd>{project.kind}</dd>
            </dl>
          </aside>
        </div>
        <nav className="project-pagination" aria-label="Project navigation">
          <Link href="/projects">← All projects</Link>
          <Link href={`/projects/${next.id}`}>
            <span className="eyebrow">Next project</span>
            {next.title}
          </Link>
        </nav>
      </article>
    </SiteLayout>
  );
}
export const getStaticPaths: GetStaticPaths = async () => ({
  paths: projects.map((project) => ({ params: { project: project.id } })),
  fallback: false,
});
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const project =
    typeof params?.project === "string"
      ? getProject(params.project)
      : undefined;
  if (!project) return { notFound: true };
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return { props: { project, next: { id: next.id, title: next.title } } };
};
