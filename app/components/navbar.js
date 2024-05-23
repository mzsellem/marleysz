// Navbar.js
import React from "react";

const Navbar = ({ activeLink, handleNavLinkClick }) => {
  
  const links = ["Intro","Projects", "Skills", "About", "Contact"];

  return (
    <div className="sticky top-0 flex justify-center">
      <div className="flex justify-center">
        <div className="w-screen p-4 font-mono text-black bg-other">
          <div className="flex justify-center space-x-4 text-sm md:text-base">
          <nav>
            <ul className="flex space-x-4">
              {links.map((link, index) => (
                <li key={index}>
                  <button
                    className={activeLink === index ? 'text-blue-500' : 'text-black'}
                    onClick={() => handleNavLinkClick(index)}
                  >
                    {link}
                  </button>
                </li>
              ))}
              </ul>
    </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
