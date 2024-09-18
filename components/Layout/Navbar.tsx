import Link from "next/link";
import React from "react";
function Navbar() {
  return (
    <div className="bg-g900 text-light ">
      <nav className="mx-auto flex   max-w-[660px] items-center  justify-between py-4 px-4 md:py-6 lg:max-w-[900px] xl:max-w-[1100px]">
        <div className="pl-3 text-2xl font-bold lg:text-3xl">
          <Link href="/">PRATIK</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
