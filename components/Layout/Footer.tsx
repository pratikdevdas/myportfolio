import {
  Github,
  LinkedIn,
  Twitter,
  Youtube,
  // Hashnode,
} from "../../public/icons/Icons";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-between px-8 py-12 text-light md:px-12 lg:flex-row">
      <div className="mb-8 text-center lg:mb-0 lg:text-left">
        <h1 className="text-2xl font-bold mb-3">Let&apos;s Connect</h1>
        <a
          title="Send me an email"
          href="mailto:pratikdevdas@outlook.com"
          className="text-lg hover:text-dark-green-fluorescent transition-colors"
        >
          pratikdevdas@outlook.com
        </a>
      </div>
      <div className="flex gap-8">
        {[
          { Icon: Twitter, href: "https://twitter.com/pratikdevdas" },
          { Icon: Github, href: "https://github.com/pratikdevdas" },
          { Icon: LinkedIn, href: "https://www.linkedin.com/in/pratikdevdas/" },
          { Icon: Youtube, href: "https://www.youtube.com/@pratikdevdas" }
        ].map(({ Icon, href }) => (
          <a
            key={href}
            href={href}
            className="transform transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
