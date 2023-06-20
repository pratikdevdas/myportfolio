import Image from "next/image";
import Link from "next/link";
import four from "../public/404.png";
import Navbar from "../components/Layout/Navbar";
export default function Error() {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <div className="flex h-full w-full flex-col  items-center justify-center gap-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-g700 via-g900 to-gblack font-raleway">
        <div>
          <Link
            href="/"
            className="text-white rounded-lg bg-purple px-4 font-bold text-light underline transition duration-200 ease-in-out hover:bg-green focus:outline-none md:py-3"
          >
            Let this home
          </Link>
        </div>
        <p className="text-light">because</p>
        <div className=" mx-16 rounded-full bg-light ">
          <Image src={four} width={600} alt="Profile" className="mx-auto" />
        </div>
      </div>
    </div>
  );
}
