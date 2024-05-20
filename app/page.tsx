'use client'
import React, { useRef, useState } from "react";
import { motion } from 'framer-motion';
import Projects from "./projects/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import About from "./about/page";
import Intro from "./intro/page";
import Bumblebee from "./components/bumblebee";
// import Pollen from "./components/pollen";

// Define the type for a pollen item
// interface PollenItem {
//   id: number;
//   x: number;
//   y: number;
// }

export default function Home() {

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const navbarRef = useRef(null);
  const [activeLink, setActiveLink] = useState(null); // State to track active link


  const scrollToSectionWithOffset = (ref: any, offset: any) => {
    if (ref.current) {
    const rect = ref.current.getBoundingClientRect();
    window.scrollTo({
      top: rect.top + window.scrollY - offset,
      behavior: "smooth",
    });
  }
  };

  const handleLinkClick = (ref: any, index: any, e: any) => {
    console.log("ref", ref);
    console.log("index", index);
    scrollToSectionWithOffset(ref, 65);
    setActiveLink(index);

    // Remove neon effect from other links
    const links = [navbarRef];
    console.log("links", links)
    links.forEach((linkRef, i) => {
      console.log("linkRef", linkRef);
      console.log("i", i);
      if (i !== index) {
        e.target.classList.remove('neon-link');
      }
    });
    console.log("e.target", e.target)
    // Apply neon effect to the clicked link
    e.target.classList.add('neon-link');
  };

  // const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
  //   const newPollen = {
  //     id: Date.now(),
  //     x: event.clientX,
  //     y: event.clientY,
  //   };
  //   setPollens([...pollens, newPollen]);
  // };

  // const removePollen = (id: number) => {
  //   setPollens((prevPollens) => prevPollens.filter(pollen => pollen.id !== id));
  // };


  return (
    <>
      {/* <div onClick={handleClick}> */}
      <div>
        <div className="sticky top-0 flex justify-center">
        <div className="flex justify-center">
          <div className="w-screen p-4 font-mono text-black bg-other" ref={navbarRef}>
              <div className="flex justify-center space-x-4 text-sm md:text-base">
              <motion.button
                onClick={(e) => handleLinkClick(section1Ref, 0, e)}
                className={activeLink === 0 ? "neon-link outline" : ""}
                ref={section1Ref}
              >
                <div>Intro</div>
              </motion.button>
              <motion.button
                onClick={(e) => handleLinkClick(section2Ref, 1, e)}
                className={activeLink === 1 ? "neon-link" : ""}
                ref={section2Ref}
              >
                Projects
              </motion.button>
              <motion.button
                onClick={(e) => handleLinkClick(section3Ref, 2, e)}
                className={activeLink === 2 ? "neon-link" : ""}
                ref={section3Ref}
              >
                Skills
              </motion.button>
              <motion.button
                onClick={(e) => handleLinkClick(section4Ref, 3, e)}
                className={activeLink === 3 ? "neon-link" : ""}
                ref={section4Ref}
              >
                About
              </motion.button>
              <motion.button
                onClick={(e) => handleLinkClick(section5Ref, 4, e)}
                className={activeLink === 4 ? "neon-link" : ""}
                ref={section5Ref}
              >
                Contact
              </motion.button>
              </div>
          </div>
        </div>
        <Bumblebee />
        {/* {pollens.map(pollen => (
          <Pollen key={pollen.id} x={pollen.x} y={pollen.y} onComplete={() => removePollen(pollen.id)} />
        ))} */}
        </div>
          <div>
              <div ref={section1Ref} className="h-screen">
                  <Intro />
              </div>
              <div className="flex flex-col items-center m-6">
                <div ref={section2Ref} className="my-2 bg-blue-400/50 md:bg-blue-400/25 rounded-3xl mt-52 md:mt-44 md:w-3/4">
                    <Projects />
                </div>
                <div ref={section3Ref} className="my-2 bg-blue-400/50 md:bg-blue-400/25 rounded-3xl md:w-3/4">
                    <Skills />
                </div>
                <div ref={section4Ref} className="my-2 bg-blue-400/50 md:bg-blue-400/25 rounded-3xl md:w-3/4">
                    <About />
                </div>
                <div ref={section5Ref} className="flex justify-center my-2 text-center bg-blue-400/50 md:bg-blue-400/25 rounded-3xl md:w-3/4">
                    <Contact />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
