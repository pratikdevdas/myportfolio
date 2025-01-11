import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import { Github, LinkedIn, Twitter, Youtube } from "../../public/icons/Icons";
import Button from "../Button";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <h2 className="mb-3 text-center text-3xl md:text-5xl lg:text-6xl text-dark-green-100">
        I like Cooking Code & <br /> Learning everyday.
      </h2>
      <div className="mt-4 space-y-4 flex flex-col gap-4">
        <div className="flex gap-4">
          <Button href="https://drive.google.com/file/d/1Y0uBj5ORuLn9L7YK6JRHgf2696IIar9Y/view">
            Resume <ArrowUpOnSquareIcon className="h-4 w-4 rotate-45" />
          </Button>
          <Button variant="secondary" href="mailto:pratikdevdas@outlook.com">
            Email <ArrowUpOnSquareIcon className="h-4 w-4 rotate-45" />
          </Button>
        </div>
        <div className="flex gap-4">
          {[
            { Icon: Twitter, href: "https://twitter.com/pratikdevdas" },
            { Icon: Youtube, href: "https://www.youtube.com/@pratikdevdas" },
            {
              Icon: LinkedIn,
              href: "https://www.linkedin.com/in/pratikdevdas/",
            },
            { Icon: Github, href: "https://github.com/pratikdevdas" },
          ].map(({ Icon, href }) => (
            <a
              key={href}
              href={href}
              className="p-2 rounded-lg transform transition-all duration-300 hover:bg-dark-green-500 hover:scale-110 hover:shadow-lg hover:shadow-dark-green-400/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
