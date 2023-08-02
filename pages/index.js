import Head from "next/head";
import Hero from "../components/Layout/Hero";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Projects from "../components/Projects";
import { promises as fsPromises } from "fs";
import path from "path";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Pratik Dev Das</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gblack text-lg md:text-xl">
        <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]   from-g700 via-g900 to-gblack font-raleway text-light">
          <Navbar />
          <div className="mx-auto  max-w-[660px] lg:max-w-[900px]   xl:max-w-[1100px]">
            <Hero />
            <Projects projects={props.projects} />
          </div>
        </div>
        <div className="mx-auto  max-w-[660px] lg:max-w-[900px]   xl:max-w-[1100px]">
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
  const objectData = JSON.parse(jsonData);
  return {
    props: objectData,
  };
}
