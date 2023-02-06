import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "../../components/Layout/Navbar";
import { promises as fsPromises } from "fs";
import path from "path";
import Footer from "../../components/Layout/Footer";

const Post = (props) => {
  const router = useRouter();
  const pid = router.query;
  console.log(props);
  return (
    <div className="h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]  from-g700 via-g900 to-gblack font-raleway text-light">
      <Navbar />
      <div className="mx-auto max-w-[660px] lg:max-w-[900px]   xl:max-w-[1100px]">
        <div className="text-3xl md:text-3xl lg:text-4xl ">
          <div
            className="flex w-full flex-col 
          justify-start
          pt-8 md:flex-row md:justify-between lg:py-20"
          >
            <div className="mx-auto h-full flex-1 px-4 md:order-first md:px-10">
              <Image
                width={400}
                height={300}
                src={`${props.image}`}
                alt="proj"
                className="rounded-lg"
              ></Image>
            </div>
            <div className="mx-auto flex-1 py-8 px-4 md:py-0 md:px-0">
              <div className="font-semibold leading-none">{props.title}</div>
              <div className="mt-6 font-libre text-lg md:text-xl lg:text-2xl">
                <p className="lg:w-9/12">{props.description}</p>
                <div className="text-green">
                  <ul className="flex py-2 lg:py-3">
                    {props.stacks.map((n, i) => (
                      <li className="pr-4" key={i}>
                        -{n}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4 py-4 font-raleway lg:w-9/12 lg:gap-6">
                  {!!props.github.length && (
                    <button
                      type="button"
                      class="text-white mr-2 mb-2 rounded-lg bg-gradient-to-br from-green to-purple  px-4 py-2 text-center text-lg font-bold hover:bg-gradient-to-bl focus:outline-none focus:ring-4  focus:ring-purple dark:focus:ring-green lg:px-8 lg:py-4 lg:text-xl"
                    >
                      View Live
                    </button>
                  )}
                  {!!props.url.length && (
                    <button class="text-white hover:text-white dark:text-white group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green to-purple p-0.5 text-lg font-medium hover:font-bold focus:outline-none focus:ring-4 focus:ring-green group-hover:from-green group-hover:to-purple dark:focus:ring-purple lg:p-1 lg:text-xl">
                      <span class="relative w-full rounded-md bg-dark py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-light lg:py-4">
                        View Code
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* next previous section */}
          <div className="flex justify-around px-16 text-lg md:px-10 lg:text-3xl">
            <div>
              <button
                type="button"
                class="text-white text-md mr-2 mb-2 rounded-lg px-4 py-2 text-center font-bold
                      hover:border-2 hover:border-green  lg:px-8 lg:py-4 lg:text-xl"
              >
                Previous Project
              </button>
            </div>
            <div>
              <button
                type="button"
                class="text-white text-md mr-2 mb-2 rounded-lg px-4 py-2 text-center font-bold
                      hover:border-2 hover:border-green  lg:px-8 lg:py-4 lg:text-xl"
              >
                Previous Project
              </button>
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
