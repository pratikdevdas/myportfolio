import Image from "next/image";
import Navbar from "../../components/Layout/Navbar";
import { promises as fsPromises } from "fs";
import path from "path";
import Link from "next/link";
import { useState } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stacks: string[];
  url: string;
  github: string;
  prev?: string;
  next?: string;
}

interface ProjectPageProps extends Project {}

const Post = ({ title, description, image, stacks, url, github, prev, next, id }: ProjectPageProps) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <>
      <Head>
        <title>{title} | Project Details</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Head>

      <div className="min-h-screen bg-dark-green-1000">
        <Navbar />
        <main className="h-full pb-4 font-raleway text-light md:pb-0">
          <div className="mx-auto max-w-[700px] px-4 lg:max-w-[1000px] xl:max-w-[1100px]">
            <div>
              <div className="flex w-full flex-col items-center justify-start pt-8 md:flex-row md:justify-between lg:py-20">
                <div className="mx-auto h-full flex-1 px-4 md:order-first md:px-6">
                  <div className={`relative ${imageLoading ? 'animate-pulse bg-gray-200' : ''}`}>
                    <Image
                      width={400}
                      height={300}
                      src={image}
                      alt={`Screenshot of ${title} project`}
                      className="rounded-lg"
                      onLoadingComplete={() => setImageLoading(false)}
                      priority
                    />
                  </div>
                </div>
                <div className="flex-1 py-8 text-center sm:px-4 md:w-96 md:py-0 md:text-left lg:px-0">
                  <div className="text-xl font-semibold leading-none lg:text-3xl">
                    {title}
                  </div>
                  <div className="mt-6 font-roboto text-base md:text-lg lg:text-xl">
                    <p className=" sm:w-90 mx-auto w-64 sm:mx-0 md:w-[400px]">
                      {description}
                    </p>
                    <div className="sm:w-90 mx-auto w-64 text-green sm:mx-0 md:w-[400px]">
                      <ul className="flex flex-wrap justify-center gap-3 py-4 md:justify-start lg:py-3">
                        {stacks.map((n: any, i: any) => (
                          <li className="" key={i}>
                            -{n}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4 py-4 font-raleway lg:gap-6">
                      {url && (
                        <a
                          href={url}
                          rel="noopener noreferrer"
                          target="_blank"
                          className="text-purple-100 w-32 rounded-xl border-2 border-gblack bg-gradient-to-l from-green to-purple px-2 py-2 text-center text-gblack transition-all duration-300 ease-in-out hover:translate-y-1 hover:border-light sm:w-36 sm:px-6 lg:w-48"
                          aria-label={`View live demo of ${title}`}
                        >
                          View Live
                        </a>
                      )}
                      {github && (
                        <a
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-100 w-32 rounded-xl border-2 border-gblack bg-gradient-to-l from-green to-purple px-2 py-2 text-center text-gblack transition-all duration-300 ease-in-out hover:translate-y-1 hover:border-light sm:w-36 sm:px-6 lg:w-48"
                          aria-label={`View code of ${title}`}
                        >
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <nav className="my-4 flex w-full justify-between px-4 text-base sm:px-10 md:text-lg lg:my-0 lg:text-xl">
                {prev ? (
                  <Link
                    className="text-white text-raleway text-bold block w-full bg-transparent px-3 text-center font-roboto transition duration-300 ease-in-out hover:scale-105"
                    href={`/projects/${prev}`}
                    aria-label="Go to previous project"
                  >
                    Previous Project
                  </Link>
                ) : (
                  <div aria-hidden="true">{' '}</div>
                )}
                {next ? (
                  <Link
                    className="text-white text-raleway text-bold block w-full bg-transparent px-3 text-center font-roboto transition duration-300 ease-in-out hover:scale-105"
                    href={`/projects/${next}`}
                    aria-label="Go to next project"
                  >
                    Next Project
                  </Link>
                ) : (
                  <div aria-hidden="true">{' '}</div>
                )}
              </nav>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData as any);
  console.log(objectData, "objectData");
  const paths = objectData.projects.reverse().map((p : any) => {
    return {
      params: { project: p.id.toString() },
    };
  });
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({ params }) => {
  try {
    const filePath = path.join(process.cwd(), "data.json");
    const jsonData = await fsPromises.readFile(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    
    const project = data.projects.find((p: Project) => p.id === params?.project);
    
    if (!project) {
      return {
        notFound: true,
      };
    }

    return {
      props: project,
      revalidate: 60 * 60,
    };
  } catch (error) {
    console.error('Error fetching project:', error);
    return {
      notFound: true,
    };
  }
}
