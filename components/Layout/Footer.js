import {
  Github,
  LinkedIn,
  Twitter,
  Youtube,
  Medium,
} from "../../public/icons/Icons";

function Footer() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-20 py-10 md:px-8 md:py-20 text-light">
      <div className="mb-10 lg:mb-0 text-center lg:text-left">
        <h1 className="text-bold text-2xl ">Lets Connect</h1>
        <a href = "mailto:pratikdevdas@outlook.com">
        <p className="text-lg hover:underline">pratikdevdas@outlook.com</p>
        </a>
        
      </div>
      {/* icons */}
      <div className="flex justify-center flex-wrap gap-6 md:gap-10">
        <div className="">
          <a href="https://twitter.com/pratikdevdas">
            <Twitter />
          </a>
        </div>
        <div>
          <a href="https://github.com/pratikdevdas">
            <Github />
          </a>
        </div>
        <div className="">
          <a href="https://www.linkedin.com/in/pratikdevdas/">
            <LinkedIn />
          </a>
        </div>
        <div className="">
          <a href="https://medium.com/@pratikdevdas">
            <Medium />
          </a>
        </div>
        <div className="">
          <a href="https://www.youtube.com/@pratikdevdas">
            <Youtube />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
