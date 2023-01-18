import Image from "next/image";

function Footer() {
  return (
    <div className="border-black relative border-t-2">
      <div className="flex justify-center">
        <div className="my-3 h-6 w-20  text-center ">Lets Connect</div>
      </div>
      <div className="flex flex-col  justify-center sm:flex-row ">
        <div className="sm:px-8">
          <a
            href="https://twitter.com/pratikdevdas"
            className="hover:underline"
          >
            {" "}
            <Image
              src="/icons/twitter.svg"
              height={15}
              width={15}
              alt="twitter"
            />{" "}
            pratikdevdas{" "}
          </a>
        </div>
        <div className="sm:px-4">
          <a href="https://github.com/pratikdevdas" className="hover:underline">
            {" "}
            <Image
              src="/icons/github.svg"
              height={15}
              width={15}
              alt="github"
            />{" "}
            pratikdevdas{" "}
          </a>
        </div>
        <div className="sm:px-4">
          <a
            href="https://www.linkedin.com/in/pratikdevdas/"
            className="hover:underline"
          >
            {" "}
            <Image
              src="/icons/linkedin.svg"
              height={15}
              width={15}
              alt="linkedin"
            />{" "}
            pratikdevdas{" "}
          </a>
        </div>
        <div className="sm:px-8">
          <a href="mailto:pratikdevdas@outlook.com" className="hover:underline">
            {" "}
            <Image src="/icons/email.svg" height={15} width={15} alt="email" />
            pratikdevdas@outlook.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
