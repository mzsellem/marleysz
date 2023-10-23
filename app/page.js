'use client'
import React, { useRef } from "react";
import MyWork from "./mywork/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import About from "./about/page";
import "../public/poppy2.png"

export default function Home() {
  const sectionRefs = {
    section1: useRef(),
    section2: useRef(),
    section3: useRef(),
    section4: useRef(),
 };

 const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
 };
  return (
    <>
    <div className="sticky top-0 z-10 bg-white shadow-md p-4">
        <div className=" flex justify-center border space-x-8">
          <button onClick={() => scrollToSection("section1")} className="hover:underline">My Work</button>
          <button onClick={() => scrollToSection("section2")} className="hover:underline">Skills</button>
          <button onClick={() => scrollToSection("section3")} className="hover:underline">About</button>
          <button onClick={() => scrollToSection("section4")} className="hover:underline">Contact</button>
        </div>
    </div>
      <div className="border m-6">
        <div className="flex flex-row items-center justify-center h-full border-4 border-black rounded-3xl m-12 mt-5 p-20">
          <div className="flex-col justify-center items-center w-3/5">
            <h1 className="font-extralight text-7xl p-2 underline decoration-4 underline-offset-8 flex justify-center">MARLEY SELLEM</h1>
            <h1 className="text-2xl font-thin flex justify-center pt-2">FULL STACK SOFTWARE ENGINEER</h1>
          </div>
          <div className="flex items-center justify-center w-2/5">
            <img src="/poppy2.png" alt="poppy in a field" className="w-5/6"/>
          </div>
        </div>
        <div className="border">
          <div ref={sectionRefs.section1} className="section border">
              <MyWork />
          </div>
          <div ref={sectionRefs.section2} className="section border">
              <Skills />
          </div>
          <div ref={sectionRefs.section3} className="section border">
              <About />
          </div>
          <div ref={sectionRefs.section4} className="section border">
              <Contact />
          </div>
        </div>
      </div>
    </>
  )
}
