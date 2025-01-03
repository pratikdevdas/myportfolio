import Image from "next/image";
import Link from "next/link";

const Projects = ({ projects }: any) => {
  return (
    <div className="mx-auto max-w-[990px] px-6 py-16 lg:max-w-[1150px] lg:py-32">
      <div className="text-center mb-12">
        <h1 className="text-5xl text-dark-green-fluorescent font-bold">
          Portfolio
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {projects.reverse().map((p:any) => (
          <Link
            href={`/projects/${p.id}`}
            key={p.id}
            className="group transition-all duration-300 hover:-translate-y-2"
          >
            <div className="rounded-xl overflow-hidden bg-g700 shadow-lg">
              <Image
                className="w-full h-64 object-cover object-center"
                width={300}
                height={300}
                src={`${p.image}`}
                alt={p.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-lg text-gray-300">
                  {p.description.slice(0, p.description.indexOf("."))}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
