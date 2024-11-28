import React from "react";
import Image from "next/image";
import HeroImage from "../../public/images/PorfolioHeroV2.png";

const Hero = () => {
  return (
    <section className="flex w-full flex-col items-center justify-between pb-8 pt-16 md:flex-row lg:py-20">
      <div className="flex-1 flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl font-medium leading-[92px] tracking-[-2.6%] text-dark-green-fluorescent">
            Hi, I am Pratik
          </h1>
          <p className="text-base text-dark-green-200 md:text-lg lg:text-2xl">
            Much of my interest lies towards learning how to build softwares and
            to explore new things in technology.
            {/* Currently working as a fullstack engineree at{" "} SlidesAi.io */}
          </p>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1Y0uBj5ORuLn9L7YK6JRHgf2696IIar9Y/view"
            className="inline-block bg-dark-green-500 px-6 py-4 text-base transition-colors duration-300 hover:bg-dark-green-600"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
          >
            RESUME
          </a>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src={HeroImage}
          width={300}
          alt="Pratik's profile picture"
          className="mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
