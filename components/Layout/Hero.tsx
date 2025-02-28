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
      className={`flex w-full flex-col max-w-5xl mx-auto items-center justify-between pb-8 pt-16 md:flex-row lg:py-20 px-4 opacity-0 ${
        inView ? 'animate-fade-in-up' : ''
      }`}
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-6xl lg:text-7xl max-w-xl mb-4 text-dark-green-50">
           I am Pratik, a Fullstack Engineer
          </h1>
          <p className="text-base md:text-lg text-dark-green-200 max-w-xl">
            Much of my interest lies towards learning how to build softwares and
            to explore new things in technology.
          </p>
        </div>
        <div className="flex gap-4 mt-8">
          <Button href="https://drive.google.com/file/d/1Y0uBj5ORuLn9L7YK6JRHgf2696IIar9Y/view" openInNewTab={true}>Resume <ArrowUpOnSquareIcon className="w-4 h-4 rotate-45" /></Button>
          <Button variant="secondary" href="#contact">
            Contact
          </Button>
        </div>
      </div>
      <div className="flex flex-shrink-0 justify-center mt-8 md:mt-0">
        <Image
          src={HeroImage}
          width={300}
          alt="Pratik's profile picture"
        />
      </div>
    </section>
  );
};

export default Hero;
