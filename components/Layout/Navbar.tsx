import Link from "next/link";
import React from "react";
function Navbar() {
  return (
    <div className="bg-dark-green-950 rounded-lg shadow-lg">
      <nav className="mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold hover:text-dark-green-fluorescent transition-colors">
          <Link href="/">PRATIK</Link>
        </div>
        <div className="flex gap-8">
          {['PROJECTS', 'ABOUT', 'CONTACT', 'BLOG'].map((item) => (
            <Link 
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="text-base text-white hover:text-dark-green-fluorescent transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
