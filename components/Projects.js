import Link from "next/link";
import Image from "next/image";
import ProjectImage from "../public/images/restproject.png";
const Projects = () => {
  const project = [];

  return (
    <div className=" md:py16 lg:py-18 mx-auto max-w-[990px] px-6 py-10 lg:max-w-[1150px] ">
      <div className="text-center ">
        <h1 className="lg:text-4xl  pb-4 text-3xl font-bold text-green lg:pb-12">
          PORTFOLIO
        </h1>
      </div>

      <div className="mx-4 mt-8 grid grid-cols-1 gap-8 md:mx-14 lg:mx-0 lg:grid-cols-2">
        <div>
          <Image
            className="relative z-10 w-full rounded-md object-cover md:h-96"
            width={300}
            height={300}
            src="/../public/images/restproject.png"
            alt="d"
          />
           from-gray-700 via-gray-900 to-black

          <div className="relative z-20 mx-auto -mt-20  p-6 shadow   bg-g700  rounded-b-lg">
                <h3 className="text-xl font-bold">Rest Country Display</h3>
              <p className="mt-3 font-libre text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
