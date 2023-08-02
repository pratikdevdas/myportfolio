import Image from "next/image";
import Link from "next/link";
import four from "../public/404.png";
import Navbar from "../components/Layout/Navbar";
export default function Error() {
  return (
    <div className="h-screen overflow-hidden text-center">
      <Navbar />
    
      <div className="flex h-full w-full flex-col  items-center justify-center gap-10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-g700 via-g900 to-gblack font-raleway">
      <Link className="text-white block text-raleway text-bold w-full bg-transparent text-center font-roboto transition duration-300 ease-in-out text-xl hover:scale-100 text-light  hover:text-green hover:underline "  href="/">Take Me Back</Link>
        <div className=" mx-16 rounded-full bg-light ">
          <Image src={four} width={600} alt="Profile" className="mx-auto" />
        
        </div>
 
      </div>
    </div>
  );
}
