import Image from "next/image";
import Link from "next/link";

const Projects = ({ projects }) => {
  return (
    <div className=" md:py16 lg:py-18 mx-auto max-w-[990px] px-10 py-10 lg:max-w-[1150px] ">
      <div className="text-center ">
        <h1 className="pb-4  text-3xl font-bold text-green lg:pb-12 lg:text-4xl">
          PORTFOLIO
        </h1>
      </div>

      <div className="mx-4 mt-8 grid grid-cols-1 gap-8 md:mx-14 lg:mx-0 lg:grid-cols-2">
        {projects.map((p) => (
          <Link href={`/projects/${p.id}`} key={p.id}>
            <Image
              className="relative z-10 w-full rounded-md object-cover md:h-96"
              width={300}
              height={300}
              // preferable p.id should be same as p.image
              src={`${p.image}`}
              alt="d"
            />
            <div className="relative z-20 mx-auto -mt-20 rounded-b-lg bg-g700   p-6  shadow">
              <h3 className="text-xl font-bold">{p.title}</h3>
              {/* displaying first line */}
              <p className="mt-3 font-libre text-lg md:text-xl">
                {p.description.slice(0, p.description.indexOf("."))}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
