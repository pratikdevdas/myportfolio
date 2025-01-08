import Image from "next/image";
import Link from "next/link";
import four from "../public/404.png";
import Navbar from "../components/Layout/Navbar";
import { NextSeo } from 'next-seo';

export default function Error() {
  return (
    <div className="h-screen overflow-hidden text-center">
      <NextSeo
        title="404 - Page Not Found | Pratik Dev Das"
        description="The page you are looking for does not exist. Return to the homepage."
        noindex={true}
      />
      <Navbar />
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 bg-gradient-to-b from-black via-g900 to-g800 font-raleway">
        <Link
          className="text-light block w-full bg-transparent text-center font-roboto text-xl transition duration-300 ease-in-out hover:scale-100 hover:text-green hover:underline"
          href="/"
        >
          Take Me Home
        </Link>
        <div className="mx-16 rounded-full bg-light">
          <Image src={four} width={600} alt="404 Error" className="mx-auto" />
        </div>
      </div>
    </div>
  );
}
