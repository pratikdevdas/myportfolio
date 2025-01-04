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
      <div className="text-center mb-16">
        <h1 className="text-5xl text-dark-green-fluorescent font-bold mb-4">
          Portfolio
        </h1>
        <p className="text-gray-400 text-lg">
          I like building & building a few projects in my free time
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2">
        {projects.reverse().map((project) => (
          <Link
            href={`/projects/${project.id}`}
            key={project.id}
            className="group relative block"
          >
            <article className="rounded-xl overflow-hidden bg-dark-green-950 shadow-lg transition-all duration-300 
              hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] border border-gray-800 hover:border-green-400">
              <div className="relative h-64">
                <Image
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  width={600}
                  height={400}
                  src={project.image}
                  alt={`${project.title} preview`}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-green-950 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-dark-green-fluorescent group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-300">
                  {project.description.split('.')[0]}.
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
