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
    <div className="flex justify-center sticky top-0 z-10">
    <div className="flex justify-center">
      <div className="p-4 font-mono text-black bg-haywhite/100 rounded-2xl">
          <div className="flex justify-center space-x-4 text-sm md:text-base">
            <button onClick={() => scrollToSection("section1")} className="hover:underline hover:decoration-poppyred hover:decoration-8">Intro</button>
            <button onClick={() => scrollToSection("section2")} className="hover:underline hover:decoration-poppyred hover:decoration-8">Projects</button>
            <button onClick={() => scrollToSection("section3")} className="hover:underline hover:decoration-poppyred hover:decoration-8">Skills</button>
            <button onClick={() => scrollToSection("section4")} className="hover:underline hover:decoration-poppyred hover:decoration-8">About</button>
            <button onClick={() => scrollToSection("section5")} className="hover:underline hover:decoration-poppyred hover:decoration-8">Contact</button>
          </div>
      </div>
    </div>
    </div>
      <div className="my-6">
          <div ref={sectionRefs.section1} className="section">
              <Intro />
          </div>
          <div className="m-6">
            <div ref={sectionRefs.section2} className="section bg-blue-400/50 rounded-3xl my-6">
                <Projects />
            </div>
            <div ref={sectionRefs.section3} className="section bg-blue-400/50 rounded-3xl my-6">
                <Skills />
            </div>
            <div ref={sectionRefs.section4} className="section bg-blue-400/50 rounded-3xl my-6">
                <About />
            </div>
            <div ref={sectionRefs.section5} className="section bg-blue-400/50 rounded-3xl">
                <Contact />
          </div>
        </div>
      </div>
    </>
  )
}
