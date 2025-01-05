import Link from "next/link";
import React from "react";

function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="rounded-lg bg-dark-green-950 shadow-lg">
      <div className="mx-auto max-w-[1100px] px-4">
        <nav className="mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-3xl transition-colors text-dark-green-50 hover:text-dark-green-fluorescent">
            <Link href="/">Pratik</Link>
          </div>
          <div className="hidden gap-8 md:flex">
            {["PROJECTS", "CONTACT"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, item.toLowerCase())}
                className="text-base text-white transition-colors hover:text-dark-green-fluorescent"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
