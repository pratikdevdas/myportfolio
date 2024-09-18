import React from "react";
import Image from "next/image";
import HeroImage from "../../public/images/PorfolioHeroV2.png";

const Hero = () => {
  return (
      <div className="flex w-full flex-col items-center justify-between pb-8 pt-16 md:flex-row lg:py-20">
        <div className="order-last h-full flex-1 px-10 pt-16 md:order-first md:pt-6">
          <div className="text-9xl font-dmsans leading-[124px] tracking-[-2.6%] font-medium text-dark-green-fluorescent">
            Hi, I am Pratik 
           <span className="text-6xl">
             🛠️ 🎧
            </span> 
          </div>
          <div className="mt-6 text-base md:text-lg lg:text-xl">
            <p>
            Much of my interest lies towards learning how to build softwares and to explore new things in technology.
              {/* Currently working as a fullstack engineree at{" "} SlidesAi.io */}
            </p>
          </div>
          <div className="my-4">
            <a
              href="https://drive.google.com/file/d/1Y0uBj5ORuLn9L7YK6JRHgf2696IIar9Y/view"
              className="bg-dark-green-500 px-6 py-4 text-base"
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
  );
};

export default Hero;
