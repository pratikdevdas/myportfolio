import Image from "next/image";
import Navbar from "../../components/Layout/Navbar";
import { promises as fsPromises } from "fs";
import path from "path";
import Link from "next/link";

const Post = (props) => {
  return (
    <div className="md:h-screen">
      <Navbar />
      <div className="h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] pb-4 md:pb-0 from-g700 via-g900 to-gblack font-raleway text-light">
        <div className="mx-auto max-w-[660px] lg:max-w-[1000px]   xl:max-w-[1100px]">
          <div className="text-3xl md:text-3xl lg:text-4xl">
            <div className="flex w-full flex-col justify-start pt-8 md:flex-row md:justify-between lg:py-20">
              <div className="mx-auto h-full flex-1 px-4 md:order-first md:px-10">
                <Image
                  width={400}
                  height={300}
                  src={`${props.image}`}
                  alt="proj"
                  className="rounded-lg"
                ></Image>
              </div>
              <div className="mx-auto  flex-1 py-8 px-4 md:py-0 md:px-0">
                <div className="font-semibold leading-none">{props.title}</div>
                <div className="mt-6 font-libre text-lg md:text-xl lg:text-2xl">
                  <p className="lg:w-9/12">{props.description}</p>
                  <div className="text-green">
                    <ul className="flex lg:w-9/12 gap-3 flex-wrap py-2 lg:py-3">
                      {props.stacks.map((n, i) => (
                        <li className="" key={i}>
                          -{n}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-4 py-4 font-raleway lg:w-9/12 lg:gap-6">
                    {!!props.url.length && (
                      <a
                        href={props.url}
                        type="a"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-white mr-2 mb-2 rounded-lg bg-gradient-to-br from-green to-purple  px-4 py-2 text-center text-lg font-bold hover:bg-gradient-to-bl focus:outline-none focus:ring-4  focus:ring-purple dark:focus:ring-green lg:px-8 lg:py-4 lg:text-xl"
                      >
                        View Live
                      </a>
                    )}
                    {!!props.github.length && (
                      <a
                        href={props.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-white dark:text-white group relative mb-2 mr-2 flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green to-purple p-0.5 text-lg font-medium hover:font-bold focus:outline-none focus:ring-4 focus:ring-green group-hover:from-green group-hover:to-purple dark:focus:ring-purple lg:p-1 lg:text-xl"
                      >
                        <span className="relative flex w-full justify-center rounded-md bg-dark py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-light lg:py-4">
                          View Code
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* next previous section */}
            <div className="flex justify-around px-6 text-lg md:px-10 lg:text-3xl">
              <div className={`${props.index === 1 ? "cursor-not-allowed" : ""}`}>
                <Link
                  href={`${props?.prev}`}
                  className={`text-white text-sm md:text-md mr-2 mb-2 rounded-lg border-2 border-transparent px-4 text-center font-bold hover:border-2
                      hover:border-green md:py-2  lg:px-8 lg:py-4 lg:text-xl ${
                        props.index === 1
                          ? "pointer-events-none hover:border-transparent"
                          : ""
                      }`}
                >
                  Previous Project
                </Link>
              </div>
              <div className={`${props.index === 2 ? "cursor-not-allowed" : ""}`}>
                <Link
                  href={`${props?.next}`}
                  className={`text-white text-sm md:text-md mr-2 mb-2 rounded-lg border-2 border-transparent px-4 text-center font-bold hover:border-2
                hover:border-green md:py-2  lg:px-8 lg:py-4 lg:text-xl ${
                  props.index === 2
                    ? " pointer-events-none hover:border-transparent  "
                    : ""
                }`}
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
