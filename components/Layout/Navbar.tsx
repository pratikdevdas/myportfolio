import Link from "next/link";
import React from "react";
function Navbar() {
  return (
    <div className="bg-dark-green-opaque text-lg rounded-lg md:text-xl">
      <nav className="mx-auto flex items-center  justify-between py-4 px-4 md:py-6">
        <div className="pl-3 text-2xl font-bold lg:text-3xl">
          <Link href="/">PRATIK</Link>
        </div>
        <div className="flex gap-8">
          <Link href="/#projects">PROJECTS</Link>
          <Link href="/#about">ABOUT</Link>
          <Link href="/#contact">CONTACT</Link>
          <Link href="/#blog">BLOG</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
