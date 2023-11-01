'use client'
import React, { useRef } from "react";
import Projects from "./projects/page";
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
        <div className=" flex justify-center space-x-4">
          <button onClick={() => scrollToSection("section1")} className="hover:underline">Intro</button>
          <button onClick={() => scrollToSection("section2")} className="hover:underline">Projects</button>
          <button onClick={() => scrollToSection("section3")} className="hover:underline">Skills</button>
          <button onClick={() => scrollToSection("section4")} className="hover:underline">About</button>
          <button onClick={() => scrollToSection("section5")} className="hover:underline">Contact</button>
        </div>
    </div>
      <div className="m-6">
        <div className="space-y-8">
          <div ref={sectionRefs.section1} className="section">
              <Intro />
          </div>
          <div ref={sectionRefs.section2} className="section">
              <Projects />
          </div>
          <div ref={sectionRefs.section3} className="section">
              <Skills />
          </div>
          <div ref={sectionRefs.section4} className="section">
              <About />
          </div>
          <div ref={sectionRefs.section5} className="section">
              <Contact />
          </div>
        </div>
      </div>
    </>
  )
}
