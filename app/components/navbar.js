// Navbar.js
import React from "react";
import Link from "next/link";

const Navbar = ({ activeLink }) => {
  return (
    <nav className="sticky top-0 flex justify-center">
      <div className="flex justify-center">
        <div className="w-screen p-4 font-mono text-black bg-other">
          <div className="flex justify-center space-x-4 text-sm md:text-base">
            <Link 
                href="#intro"
                className={activeLink === 0 ? "neon-link outline" : ""}
            > Intro
            </Link>
            <Link 
                href="#projects"
                className={activeLink === 1 ? "neon-link" : ""}
            > Projects
            </Link>
            <Link 
                href="#skills"
                className={activeLink === 2 ? "neon-link" : ""}
            > Skills
            </Link>
            <Link 
                href="#about"
                className={activeLink === 3 ? "neon-link" : ""}
            > About
            </Link>
            <Link 
                href="#contact"
                className={activeLink === 4 ? "neon-link" : ""}
            > Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
