'use client'
import React, { useRef } from "react";
import MyWork from "./mywork/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import About from "./about/page";
import Intro from "./intro/page";
import "../public/poppy2.png"

export default function Home() {
  const sectionRefs = {
    section1: useRef(),
    section2: useRef(),
    section3: useRef(),
    section4: useRef(),
    section5: useRef(),
 };

 const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
 };
  return (
    <>
    <div className="sticky top-0 z-10 bg-white shadow-md p-4">
        <div className=" flex justify-center border space-x-4">
          <button onClick={() => scrollToSection("section1")} className="hover:underline">Intro</button>
          <button onClick={() => scrollToSection("section2")} className="hover:underline">My Work</button>
          <button onClick={() => scrollToSection("section3")} className="hover:underline">Skills</button>
          <button onClick={() => scrollToSection("section4")} className="hover:underline">About</button>
          <button onClick={() => scrollToSection("section5")} className="hover:underline">Contact</button>
        </div>
    </div>
      <div className="border m-6">
        <div className="border">
          <div ref={sectionRefs.section1} className="section border">
              <Intro />
          </div>
          <div ref={sectionRefs.section2} className="section border">
              <MyWork />
          </div>
          <div ref={sectionRefs.section3} className="section border">
              <Skills />
          </div>
          <div ref={sectionRefs.section4} className="section border">
              <About />
          </div>
          <div ref={sectionRefs.section5} className="section border">
              <Contact />
          </div>
        </div>
      </div>
    </>
  )
}
