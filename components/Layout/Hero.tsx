import React from "react";
import Image from "next/image";
import HeroImage from "../../public/images/PorfolioHeroV2.png";
import Button from "../Button";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      ref={ref}
      className={`flex w-full flex-col mx-auto gap-16 items-center justify-between pb-8 pt-16 lg:pt-32 md:flex-row lg:py-20 px-4 opacity-0 ${
        inView ? 'animate-fade-in-up' : ''
      }`}
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1 className="text-4xl lg:text-5xl xl:text-7xl max-w-xl mb-4 text-dark-green-50 md:mb-7">
           I am Pratik, a Fullstack Engineer
          </h1>
          
          {/* Image positioned between h1 and p on mobile, hidden on md+ */}
          <div className="flex justify-center mb-6 md:hidden">
            <Image
              src={HeroImage}
              width={350}
              alt="Pratik's profile picture"
              className="w-48"
            />
          </div>
          
          <p className="text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 text-dark-green-200 max-w-xl">
            Much of my interest lies towards learning how to build softwares and
            to explore new things in technology. While my primary focus is on building web applications, I go beyond the web to tinker with devops, cloud and AI.
            <br /> I am currently working as a Fullstack Engineer at <a href="https://www.slidesai.io/" target="_blank" className="text-green hover:text-light">SlidesAI</a> where I build web applications using React, TypeScript, Cloudflare serverless architecture, and Langchain.
          </p>
        </div>
        <div className="flex gap-4 mt-8">
          <Button href="https://drive.google.com/file/d/1Y0uBj5ORuLn9L7YK6JRHgf2696IIar9Y/view" openInNewTab={true}>Resume <ArrowUpOnSquareIcon className="w-4 h-4 rotate-45" /></Button>
          <Button variant="secondary" href="#contact">
            Contact
          </Button>
        </div>
      </div>
      
      {/* Image positioned on the right for md+ screens, hidden on mobile */}
      <div className="hidden md:flex flex-shrink-0 justify-center mt-8 md:mt-0">
        <Image
          src={HeroImage}
          width={350}
          alt="Pratik's profile picture"
          className="w-48 md:w-64 lg:w-80 xl:w-96"
        />
      </div>
    </section>
  );
};

export default Hero;
