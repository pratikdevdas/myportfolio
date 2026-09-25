import Image from "next/image";
import Link from "next/link";
import { Project } from "../types/project";
export function ProjectArtwork({
  project,
  detail = false,
}: {
  project: Project;
  detail?: boolean;
}) {
  return (
    <div
      className={`project-artwork ${
        project.secondaryImage ? "project-artwork--comic" : ""
      } ${detail ? "project-artwork--detail" : ""}`}
    >
      <Image
        src={project.image}
        alt={project.imageAlt}
        width={960}
        height={720}
        sizes={
          detail
            ? "(max-width: 1100px) 90vw, 1060px"
            : "(max-width: 600px) 90vw, (max-width: 850px) 45vw, 340px"
        }
        priority={detail}
      />
      {project.secondaryImage ? (
        <Image
          src={project.secondaryImage}
          alt={project.secondaryImageAlt || project.title}
          width={460}
          height={1000}
          sizes={detail ? "300px" : "170px"}
        />
      ) : null}
    </div>
  );
}
export default function Projects({
  projects,
  headingLevel = 3,
}: {
  projects: Project[];
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article
          className="project-card"
          key={project.id}
          data-project={project.id}
        >
          <Link
            className="project-card-link"
            href={`/projects/${project.id}`}
            aria-labelledby={`project-${project.id}`}
          >
            <ProjectArtwork project={project} />
            <div className="project-card-copy">
              <Heading className="project-title" id={`project-${project.id}`}>
                {project.title}
              </Heading>
              <p className="project-category">{project.category}</p>
              <p className="project-description">{project.description}</p>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
