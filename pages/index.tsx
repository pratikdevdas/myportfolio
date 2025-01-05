import Head from "next/head";
import Hero from "../components/Layout/Hero";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Projects from "../components/Projects";
import { promises as fsPromises } from "fs";
import path from "path";
import Tools from "../components/Layout/Tools";

export default function Home(props: any) {
  return (
    <div>
      <Head>
        <title>Pratik Dev Das</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-dark-green-1000 text-lg md:text-xl">
        <div className="bg-yellow-500 text-black py-2 px-4 text-center font-medium text-dark-green-100  ">
          <p>🚧 Under Construction</p>
        </div>

        <div className="">
          <div className="mx-auto py-12 max-w-[660px] lg:max-w-[900px] xl:max-w-[1184px]">
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
          <p className="py-3">
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
