import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../public/images/PorfolioHeroV2.png";
export default function Hero() {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">Engineer &amp; maker</p>
        <h1>
          Hi, I’m Pratik.
          <br />I build useful software.
        </h1>
        <p className="hero-description">
          Fullstack engineer building web applications and AI-powered products,
          with a curiosity for visual storytelling.
        </p>
        <div className="hero-actions">
          <Link className="action-primary" href="#projects">
            View my work
          </Link>
          <a
            className="text-link"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View resume
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
