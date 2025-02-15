import Head from "next/head";
import Hero from "../components/Layout/Hero";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Projects from "../components/Projects";
import { promises as fsPromises } from "fs";
import path from "path";
import Tools from "../components/Layout/Tools";
import { NextSeo } from 'next-seo';

export default function Home(props: any) {
  return (
    <div>
      <NextSeo
        title="Pratik Dev Das - Portfolio"
        description="Explore the portfolio of Pratik Dev Das, showcasing web development projects and skills."
        openGraph={{
          images: [
            {
              url: 'https://www.pratikdevdas.com/og-image.jpg', // Add your OG image URL here
              width: 1200,
              height: 630,
              alt: 'Pratik Dev Das Portfolio',
            },
          ],
        }}
      />
      <div className="bg-dark-green-1000 text-base md:text-lg lg:text-xl">
        <div className="">
          <div className="mx-auto py-8 md:py-12 px-4 max-w-4xl lg:max-w-5xl xl:max-w-[1184px]">
            <Navbar />
            <Hero />
            <div id="projects">
              <Projects projects={props.projects} />
            </div>
            {/* <Tools/> */}
          </div>
        </div>
        <div id="contact" className="mx-auto max-w-[660px] lg:max-w-[900px] xl:max-w-[1100px]">
          <Footer />
        </div>
        <div className="flex justify-center border-t-2 border-t-g700  text-center text-lg text-light md:text-xl">
          <p className="py-3 text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 text-dark-green-200 max-w-xl">
            Made with ❤️ by{" "}
            <a
              href="https://www.pratikdevdas.com"
              className="pl-1 text-green underline hover:text-light"
            >
              Pratik.
            </a>
            {/* Read my blogs{" "}
            <a
              href="https://blog.pratikdevdas.com/"
              className="pl-1 text-green underline hover:text-light"
            >
              here.
            </a> */}
          </p>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData as any);
  return {
    props: objectData,
  };
}
