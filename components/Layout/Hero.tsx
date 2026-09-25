import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../public/images/PorfolioHeroV2.png";
export default function Hero() {
  return (
    <section className="hero">
      <div>
        <p className="hero-intro">Hi, I’m Pratik.</p>
        <h1>I build useful software.</h1>
        <p className="hero-description">
          Fullstack engineer at{" "}
          <a
            href="https://www.slidesai.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SlidesAI
          </a>
          , building web applications and AI-powered products.
        </p>
        <div className="hero-actions">
          <Link className="action-primary" href="#projects">
            View my work
          </Link>
        </div>
      </div>
      <Image
        className="portrait"
        src={HeroImage}
        alt="Pratik Dev Das"
        sizes="(max-width: 600px) 160px, 240px"
        priority
      />
    </section>
  );
}
