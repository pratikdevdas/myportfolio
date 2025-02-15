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
        <div className="mx-auto max-w-[660px] px-4 py-8 md:py-12 lg:max-w-[900px] xl:max-w-[1184px]">
          <Navbar />
          <main className="font-dm-sans text-light">
            <div className="mt-8 md:mt-12">
              <div className="flex w-full flex-col items-center justify-start gap-8 md:flex-row md:gap-12">
                <div className="w-full max-w-[500px] md:w-1/2 opacity-0 animate-fade-in-left">
                  <div
                    className={`relative overflow-hidden rounded-xl shadow-lg ${
                      imageLoading ? "bg-gray-200 animate-pulse" : ""
                    }`}
                  >
                    <Image
                      width={600}
                      height={400}
                      src={image}
                      alt={`Screenshot of ${title} project`}
                      className="h-auto w-full"
                      onLoadingComplete={() => setImageLoading(false)}
                      priority
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 opacity-0 animate-fade-in-right" style={{ animationDelay: '200ms' }}>
                  <div className="space-y-3">
                    <h1 className="text-2xl text-dark-green-50 md:text-3xl lg:text-4xl">
                      {title}
                    </h1>
                    <p className="text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 text-dark-green-200 max-w-xl">
                      {description}
                    </p>

                    <ul className="flex flex-wrap gap-2 md:gap-3 text-green">
                      {stacks.map((tech, i) => (
                        <li
                          key={i}
                          className="rounded-full bg-dark-green-900 px-2 py-1 md:px-3 text-xs md:text-sm"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-6">
                    {url && (
                      <Button href={url} openInNewTab={true} className="w-full sm:w-auto">
                        View Live <ArrowUpOnSquareIcon className="h-4 w-4 rotate-45" />
                      </Button>
                    )}
                    {github && (
                      <Button
                        variant="secondary"
                        href={github}
                        openInNewTab={true}
                        className="w-full sm:w-auto"
                      >
                        View Code
                        <ArrowUpOnSquareIcon className="h-4 w-4 rotate-45" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <nav className="mt-8 md:mt-12 flex justify-between border-t border-dark-green-900 pt-6 md:pt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                {prev ? (
                  <Link
                    className="flex items-center gap-2 text-green transition-colors hover:text-light"
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
                    className="flex items-center gap-2 text-green transition-colors hover:text-light"
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
    params: { project: p.id },
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
