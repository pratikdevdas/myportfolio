import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../public/images/PorfolioHeroV2.png";
import Arrow from "../Arrow";
export default function Hero() {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">Fullstack engineer · Creative technologist</p>
        <h1>
          Hi, I’m Pratik.
          <br />I build software
          <br />
          <em>and explore what’s next.</em>
        </h1>
        <p className="hero-description">
          I build web applications and AI-powered products, and explore new ways
          to tell stories through code, images and 3D.
        </p>
        <div className="hero-actions">
          <Link className="action-primary" href="#projects">
            Explore my work <Arrow />
          </Link>
          <a
            className="text-link"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View resume <Arrow />
          </a>
        </div>
        <p className="current-work">
          Currently building at{" "}
          <a
            href="https://www.slidesai.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SlidesAI
          </a>{" "}
          · React, TypeScript, Cloudflare &amp; AI
        </p>
      </div>
      <Image
        className="portrait"
        src={HeroImage}
        alt="Pratik Dev Das"
        sizes="(max-width: 600px) 160px, 280px"
        priority
      />
    </section>
  );
}
