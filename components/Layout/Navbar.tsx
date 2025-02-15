import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    // Close mobile menu after clicking a link
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="rounded-lg bg-dark-green-950 shadow-lg">
      <div className="mx-auto max-w-[1100px] px-4">
        <nav className="mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-3xl transition-colors text-dark-green-50 hover:text-dark-green-fluorescent">
            <Link href="/">Pratik</Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden gap-8 md:flex">
            {["PROJECTS", "CONTACT"].map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                onClick={(e) => {
                  if (window.location.pathname !== '/') {
                    return;
                  }
                  e.preventDefault();
                  handleScroll(e, item.toLowerCase());
                }}
                className="text-base text-white transition-colors hover:text-dark-green-fluorescent"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-4 space-y-2">
            {["PROJECTS", "CONTACT"].map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                onClick={(e) => {
                  if (window.location.pathname !== '/') {
                    return;
                  }
                  e.preventDefault();
                  handleScroll(e, item.toLowerCase());
                }}
                className="block py-2 text-base text-white transition-colors hover:text-dark-green-fluorescent border-b border-dark-green-800 last:border-b-0"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
