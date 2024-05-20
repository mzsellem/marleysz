'use client'
import React, { useRef, useState } from "react";
import Navbar from "./components/navbar";
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

  const sectionRefs = [
    Intro, useRef(null),
    Projects, useRef(null),
    Skills, useRef(null),
    About, useRef(null),
    Contact, useRef(null),
  ];
  const [activeLink, setActiveLink] = useState(null);

  const scrollToSectionWithOffset = (ref:any, offset:any) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.scrollY - offset,
        behavior: "smooth",
      });
    }
  };

  const handleLinkClick = (index:any, e:any) => {
    scrollToSectionWithOffset(sectionRefs[index], 65);
    setActiveLink(index);
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
      <Navbar activeLink={activeLink} />
      <div>
        <div ref={sectionRefs[0]} id="intro" className="h-screen">
          <Intro />
        </div>
        <div className="flex flex-col items-center m-6">
          <div ref={sectionRefs[1]} id="projects" className="my-2 bg-blue-400/50 md:bg-blue-400/25 rounded-3xl mt-52 md:mt-44 md:w-3/4">
            <Projects />
          </div>
          <div ref={sectionRefs[2]} id="skills" className="my-2 bg-blue-400/50 md:bg-blue-400/25 rounded-3xl md:w-3/4">
            <Skills />
          </div>
          <div ref={sectionRefs[3]} id="about" className="my-2 bg-blue-400/50 md:bg-blue-400/25 rounded-3xl md:w-3/4">
            <About />
          </div>
          <div ref={sectionRefs[4]} id="contact" className="flex justify-center my-2 text-center bg-blue-400/50 md:bg-blue-400/25 rounded-3xl md:w-3/4">
            <Contact />
          </div>
        </div>
      </div>
        <Bumblebee />
        {/* {pollens.map(pollen => (
          <Pollen key={pollen.id} x={pollen.x} y={pollen.y} onComplete={() => removePollen(pollen.id)} />
        ))} */}
    </>
  )
}
