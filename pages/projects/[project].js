import Image from "next/image";
import Navbar from "../../components/Layout/Navbar";
import { promises as fsPromises } from "fs";
import path from "path";
import Link from "next/link";

const Post = (props) => {
  console.log(props);
  return (
    <div className="h-full md:h-screen">
      <Navbar />
      <div className="h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-g700 via-g900 to-gblack pb-4 font-raleway text-light md:pb-0">
        <div className="mx-auto max-w-[700px] lg:max-w-[1000px]   xl:max-w-[1100px]">
          <div>
            <div className="flex w-full flex-col items-center justify-start pt-8 md:flex-row md:justify-between lg:py-20">
              <div className="mx-auto h-full flex-1 px-4 md:order-first md:px-6">
                <Image
                  width={400}
                  height={300}
                  src={`${props.image}`}
                  alt="proj"
                  className="rounded-lg"
                ></Image>
              </div>
              <div className="flex-1 py-8 text-center sm:px-4 md:w-96 md:py-0 md:text-left lg:px-0">
                <div className="text-xl font-semibold leading-none lg:text-3xl">
                  {props.title}
                </div>
                <div className="mt-6 font-roboto text-base md:text-lg lg:text-xl">
                  <p className=" sm:w-90 mx-auto w-64 sm:mx-0 md:w-[400px]">
                    {props.description}
                  </p>
                  <div className="sm:w-90 mx-auto w-64 text-green sm:mx-0 md:w-[400px]">
                    <ul className="flex flex-wrap justify-center gap-3 py-4 md:justify-start lg:py-3">
                      {props.stacks.map((n, i) => (
                        <li className="" key={i}>
                          -{n}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4 py-4 font-raleway lg:gap-6">
                    {!!props.url.length && (
                      <a
                        href={props.url}
                        type="a"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-purple-100 w-32 rounded-xl border-2 border-gblack bg-gradient-to-l from-green to-purple px-2 py-2 text-center text-gblack transition-all duration-300 ease-in-out hover:translate-y-1 hover:border-light sm:w-36 sm:px-6 lg:w-48"
                      >
                        View Live
                      </a>
                    )}
                    {!!props.github.length && (
                      <a
                        href={props.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-100 w-32 rounded-xl border-2 border-gblack bg-gradient-to-l from-green to-purple px-2 py-2 text-center text-gblack transition-all duration-300 ease-in-out hover:translate-y-1 hover:border-light sm:w-36 sm:px-6 lg:w-48"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* next previous section */}
            <div className="my-4 flex w-full justify-between px-4 text-base sm:px-10 md:text-lg lg:my-0 lg:text-xl ">
              <div>
                <Link
                  className={`text-white text-raleway text-bold block w-full bg-transparent  px-3  text-center font-roboto  transition duration-300 ease-in-out ${
                    props.prev
                      ? "hover:-translate-x-2  hover:text-purple hover:underline"
                      : "hover:cursor-not-allowed"
                  }  md:py-2`}
                  href={`./${props.prev ? props.prev : props.id}`}
                >
                  Previous Project
                </Link>
              </div>
              <div>
                <Link
                  className={`text-white text-raleway text-bold block w-full bg-transparent  px-3  text-center font-roboto transition duration-300 ease-in-out lg:mr-16 ${
                    props.next
                      ? "hover:translate-x-2  hover:text-green hover:underline"
                      : "hover:cursor-not-allowed"
                  }  md:py-2`}
                  href={`./${props.next ? props.next : props.id}`}
                >
                  Next Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);
  const paths = objectData.projects.map((p) => {
    return {
      params: { project: p.id.toString() },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  console.log(params, "ds");
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const singleObjectData = JSON.parse(jsonData);
  const singleObject = singleObjectData.projects.find(
    (n) => n.id === params.project
  );
  return {
    props: singleObject,
  };
}
