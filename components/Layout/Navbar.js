import Link from "next/link";
// import { useTheme } from "next-themes";
import React, { useState } from "react";
function Navbar() {
  return (
    <div className="bg-g900 ">
      <nav className="max-w-[660px] lg:max-w-[900px]   xl:max-w-[1100px] mx-auto  flex justify-between items-center py-4 md:py-6 px-4">
          <div className="pl-3 text-2xl lg:text-3xl font-bold"><Link href="/">PRATIK</Link></div>
      </nav>
    </div>
  );
}

export default Navbar;
