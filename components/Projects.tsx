import Image from "next/image";
import Link from "next/link";
import { Project } from "../types/project";
import Arrow from "./Arrow";
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
export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.id}>
          <Link
            href={`/projects/${project.id}`}
            aria-label={`View ${project.title}`}
          >
            <ProjectArtwork project={project} />
          </Link>
          <p className="project-category">{project.category}</p>
          <h3>
            <Link href={`/projects/${project.id}`}>{project.title}</Link>
          </h3>
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            <Link href={`/projects/${project.id}`}>
              View project <Arrow />
            </Link>
            {project.appUrl ? (
              <a
                href={project.appUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                App Store <Arrow />
              </a>
            ) : project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <Arrow />
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
