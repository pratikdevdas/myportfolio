import Image from "next/image";
import Link from "next/link";
import { useInView } from 'react-intersection-observer';

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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const sortedProjects = [...projects].reverse();

  return (
    <section 
      ref={ref}
      className={`mx-auto max-w-[990px] px-6 py-16 lg:max-w-[1150px] lg:py-32 opacity-0 ${
        inView ? 'animate-fade-in-up' : ''
      }`}
    >
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
        {sortedProjects.map((project, index) => (
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div 
      ref={ref}
      className={`space-y-6 opacity-0 ${
        inView ? 'animate-fade-in-up' : ''
      }`}
    >
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
        <Link href={`/projects/${project.id}`}>
          <p className="text-dark-green-50 text-xl hover:text-dark-green-100 duration-300 transition-all font-dm-sans">{project.title}</p>
        </Link>
        <p className="text-dark-green-200 text-sm">
          {project.description}
        </p>
        <p className="text-dark-green-200 text-sm hover:text-dark-green-50 duration-300 transition-all">
          <Link href={`/projects/${project.id}`}>
            Learn More &gt;
          </Link>
        </p>
      </div>
    </div>
  );
};
