// import { useTheme } from "next-themes";
import React, { useState } from "react";

function Navbar() {
  return (
    <div>
      <nav className="max-w-[1280px] mx-auto flex justify-between px-4">
        <div className="flex items-center justify-around py-9">
          <div className="grow pl-6 text-3xl font-bold ">PRATIK</div>
          {/* <div className="px-16 py-6">
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="order-2 h-12 w-12 p-3 md:order-3"
              onClick={toggleChange}
            >
              {toggle} mode
            </button>
          </div> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
