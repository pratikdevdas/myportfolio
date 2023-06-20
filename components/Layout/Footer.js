import {
  Github,
  LinkedIn,
  Twitter,
  Youtube,
  // Hashnode,
} from "../../public/icons/Icons";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-between px-20 py-10 text-light md:px-8 md:py-20 lg:flex-row">
      <div className="mb-10 text-center lg:mb-0 lg:text-left">
        <h1 className="text-bold text-2xl ">Lets Connect</h1>
        <a
          title="This is a link to the mail link"
          href="mailto:pratikdevdas@outlook.com"
        >
          <p className="text-lg hover:underline">pratikdevdas@outlook.com</p>
        </a>
      </div>
      {/* icons */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        <div className="">
          <a
            title="This is a link to the Twitter website"
            href="https://twitter.com/pratikdevdas"
          >
            <Twitter />
          </a>
        </div>
        <div>
          <a
            title="This is a link to the Github website"
            href="https://github.com/pratikdevdas"
          >
            <Github />
          </a>
        </div>
        <div className="">
          <a
            title="This is a link to the LinkedIn website"
            href="https://www.linkedin.com/in/pratikdevdas/"
          >
            <LinkedIn />
          </a>
        </div>
        <div className="">
          <a
            title="This is a link to the YouTube website"
            href="https://www.youtube.com/@pratikdevdas"
          >
            <Youtube />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
