import React from "react";
import Image from "next/image";
import HeroImage from "../../public/images/ProfileHero.png";

const Hero = () => {
  return (
    <div className="text-3xl md:text-3xl lg:text-4xl ">
      <div className="flex w-full flex-col items-center justify-between py-8 md:flex-row lg:py-20">
        <div className="order-last h-full flex-1 px-10 pt-16 md:order-first md:pt-6">
          <div className="font-semibold leading-none">
            <span className=""> Hey,</span> My Name is Pratik
          </div>
          <div className="mt-6 text-base md:text-lg lg:text-xl">
            <p>
              I am a frontend developer who loves to read Currently working as a
              course instructor at{" "}
              <a
                href="https://tagd-myartsonline-com.vercel.app/"
                className="text-purple underline hover:text-green"
              >
                TAGD
              </a>{" "}
              and as a freelance dev at <a href="">Fiverr</a>
            </p>
          </div>
          <div className="my-4">
            <a
              href="https://drive.google.com/file/d/1Eqe0bgeyJsI1lH6vXaEdsQOApeMQotMI/view"
              className="text-white text-raleway text-bold font-libre block w-28 rounded-full bg-purple text-center text-lg tracking-wide outline-none transition duration-300 ease-in-out hover:translate-y-2 md:py-3"
            >
              RESUME
            </a>
          </div>
        </div>
        <div className="flex-1 ">
          <Image
            src={HeroImage}
            width={300}
            alt="Profile"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
