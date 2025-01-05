import {
  Github,
  LinkedIn,
  Twitter,
  Youtube,
} from "../../public/icons/Icons";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-light">
      <p className="text-2xl mb-6">
        I like Cooking Code & Learning everyday.
      </p>
      <div className="flex gap-4">
        {[
          { Icon: Twitter, href: "https://twitter.com/pratikdevdas" },
          { Icon: Youtube, href: "https://www.youtube.com/@pratikdevdas" },
          { Icon: LinkedIn, href: "https://www.linkedin.com/in/pratikdevdas/" },
          { Icon: Github, href: "https://github.com/pratikdevdas" },
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
