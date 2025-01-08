import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className="mx-auto max-w-[990px] px-6 py-16 lg:max-w-[1150px] lg:py-32">
      <div className="mb-16 text-center">
        <h2 className="font-dm-sans mb-3 text-3xl md:text-5xl lg:text-6xl text-dark-green-50">
          Projects
        </h2>
        <p className="text-base md:text-lg text-dark-green-200">
          I like building & building a few projects when I have some time to
          spare
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:gap-[72px] lg:grid-cols-2 lg:grid-areas-projects">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-item ${index % 2 === 0 ? "lg:area-project1" : "lg:area-project2"}`}
          >
            <Project project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

const Project = ({ project }: { project: Project }) => {
  return (
    <div className="space-y-6">
      <div className="p-12 bg-dark-green-950 rounded-lg">
        <Image
          className="rounded-lg"
          width={460}
          height={340}
          src={project.image}
          alt={`${project.title} preview`}
          priority
        />
      </div>
      <div className="space-y-3">
        <p className="text-dark-green-50 text-xl font-dm-sans">{project.title}</p>
        <p className="text-dark-green-200 text-sm">{project.description}</p>
        <p className="text-dark-green-200 text-sm">
          <Link href={`/projects/${project.id}`}>
            Learn More &gt;
          </Link>
        </p>
      </div>
    </div>
  );
};
