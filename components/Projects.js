import Link from "next/link";
import project from "../pages/api/data.js";
const Projects = () => {
  return (
    <div>
      <div className="pl-10 text-3xl">Projects</div>
      <div>
        {project.map((info) => (
          <div
            key={info.key}
            className="mx-4 flex flex-col items-stretch justify-between pt-5 xl:mx-auto"
          >
            <div className="border-black flex  justify-between py-4">
              <div className="grow sm:ml-36">{info.title}</div>
              <div>
                <a
                  href={info.github}
                  className="bg-black border-black text-white mr-2 rounded-xl p-px sm:mr-8 sm:border-2 lg:py-2 lg:px-4"
                >
                  View Code
                </a>
              </div>
              <div>
                <Link href={info.redirect}>
                  <a className="bg-white border-black text-black box-border rounded-xl border-2 p-px sm:mr-28 lg:py-2 lg:px-4">
                    View Live
                  </a>
                </Link>
              </div>
            </div>
            <div className="mx-auto w-full sm:w-9/12">
              <hr className="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
