// Navbar.js
import React from "react";
import Link from "next/link";

const Navbar = ({ activeLink, handleNavLinkClick }) => {
  return (
    <div className="sticky top-0 flex justify-center">
      <div className="flex justify-center">
        <div className="w-screen p-4 font-mono text-black bg-other">
          <div className="flex justify-center space-x-4 text-sm md:text-base">
            <Link 
                href="#intro"
                onClick={() => {handleNavLinkClick(0)}}
                className={activeLink === 0 ? "neon-link outline" : ""}
            > Intro
            </Link>
            <Link 
                href="#projects"
                onClick={() => {handleNavLinkClick(1)}}
                className={activeLink === 1 ? "neon-link" : ""}
            > Projects
            </Link>
            <Link 
                href="#skills"
                onClick={() => {handleNavLinkClick(2)}}
                className={activeLink === 2 ? "neon-link" : ""}
            > Skills
            </Link>
            <Link 
                href="#about"
                onClick={() => {handleNavLinkClick(3)}}
                className={activeLink === 3 ? "neon-link" : ""}
            > About
            </Link>
            <Link 
                href="#contact"
                onClick={() => {handleNavLinkClick(4)}}
                className={activeLink === 4 ? "neon-link" : ""}
            > Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
