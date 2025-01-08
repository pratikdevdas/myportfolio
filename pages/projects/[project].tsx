import Image from "next/image";
import Navbar from "../../components/Layout/Navbar";
import { promises as fsPromises } from "fs";
import path from "path";
import Link from "next/link";
import { useState } from "react";
import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import Button from "../../components/Button";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";

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

const Post = ({
  title,
  description,
  image,
  stacks,
  url,
  github,
  prev,
  next,
  id,
}: ProjectPageProps) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <>
      <NextSeo
        title={`${title} | Project Details`}
        description={description}
        openGraph={{
          title,
          description,
          images: [
            {
              url: image,
              width: 800,
              height: 600,
              alt: `Screenshot of ${title} project`,
            },
          ],
        }}
      />

      <div className="min-h-screen bg-dark-green-1000">
        <div className="bg-yellow-500 text-black py-2 px-4 text-center font-medium text-dark-green-100">
          <p>🚧 Under Construction</p>
        </div>
        
        <div className="mx-auto py-8 md:py-12 px-4 max-w-[660px] lg:max-w-[900px] xl:max-w-[1184px]">
          <Navbar />
          <main className="font-raleway text-light">
            <div className="mt-8 md:mt-12">
              <div className="flex w-full flex-col items-center justify-start gap-8 md:flex-row md:gap-12">
                <div className="w-full max-w-[500px] md:w-1/2">
                  <div
                    className={`relative rounded-xl overflow-hidden shadow-lg ${
                      imageLoading ? "bg-gray-200 animate-pulse" : ""
                    }`}
                  >
                    <Image
                      width={600}
                      height={400}
                      src={image}
                      alt={`Screenshot of ${title} project`}
                      className="w-full h-auto"
                      onLoadingComplete={() => setImageLoading(false)}
                      priority
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>
                  <p className="text-lg text-gray-300 mb-6">{description}</p>
                  
                  <div className="text-green mb-8">
                    <h2 className="text-xl mb-3 text-light">Technologies</h2>
                    <ul className="flex flex-wrap gap-3">
                      {stacks.map((tech, i) => (
                        <li key={i} className="bg-dark-green-900 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-6">
                    {url && (
                      <Button href={url} openInNewTab={true}>
                        View Live <ArrowUpOnSquareIcon className="w-4 h-4 rotate-45" />
                      </Button>
                    )}
                    {github && (
                      <Button variant="secondary" href={github} openInNewTab={true}>
                        View Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <nav className="mt-12 flex justify-between border-t border-dark-green-900 pt-8">
                {prev ? (
                  <Link
                    className="flex items-center gap-2 text-green hover:text-light transition-colors"
                    href={`/projects/${prev}`}
                    aria-label="Go to previous project"
                  >
                    <span>←</span> Previous Project
                  </Link>
                ) : (
                  <div aria-hidden="true" />
                )}
                {next ? (
                  <Link
                    className="flex items-center gap-2 text-green hover:text-light transition-colors"
                    href={`/projects/${next}`}
                    aria-label="Go to next project"
                  >
                    Next Project <span>→</span>
                  </Link>
                ) : (
                  <div aria-hidden="true" />
                )}
              </nav>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData as any);

  const paths = objectData.projects.map((p: any) => ({
    params: { project: p.id.toString().toLowerCase() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<ProjectPageProps> = async ({
  params,
}) => {
  try {
    const filePath = path.join(process.cwd(), "data.json");
    const jsonData = await fsPromises.readFile(filePath, "utf8");
    const data = JSON.parse(jsonData);

    const project = data.projects.find(
      (p: Project) =>
        p.id.toLowerCase() === params?.project?.toString().toLowerCase()
    );

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
    console.error("Error fetching project:", error);
    return {
      notFound: true,
    };
  }
};
