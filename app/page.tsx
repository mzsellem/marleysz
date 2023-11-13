'use client'
import React, { useRef } from "react";
import Projects from "./projects/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import About from "./about/page";
import Intro from "./intro/page";
import "../public/poppy2.png"

export default function Home() {

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const scrollToSectionWithOffset = (ref, offset) => {
    if (ref.current) {
    const rect = ref.current.getBoundingClientRect();
    window.scrollTo({
      top: rect.top + window.scrollY - offset,
      behavior: "smooth",
    });
  }
  };


  return (
    <>
    <div className="flex justify-center sticky top-0 z-10">
    <div className="flex justify-center">
      <div className="p-4 font-mono text-black container rounded-2xl w-screen">
          <div className="flex justify-center space-x-4 text-sm md:text-base">
            <button onClick={() => scrollToSectionWithOffset(section1Ref, 20)} className="hover:underline hover:decoration-poppyred hover:decoration-8">Intro</button>
            <button onClick={() => scrollToSectionWithOffset(section2Ref, 50)} className="hover:underline hover:decoration-poppyred hover:decoration-8">Projects</button>
            <button onClick={() => scrollToSectionWithOffset(section3Ref, 80)} className="hover:underline hover:decoration-poppyred hover:decoration-8">Skills</button>
            <button onClick={() => scrollToSectionWithOffset(section4Ref, 110)} className="hover:underline hover:decoration-poppyred hover:decoration-8">About</button>
            <button onClick={() => scrollToSectionWithOffset(section5Ref, 140)} className="hover:underline hover:decoration-poppyred hover:decoration-8">Contact</button>
          </div>
      </div>
    </div>
    </div>
      <div>
          <div ref={section1Ref} className="section h-screen">
              <Intro />
          </div>
          <div className="flex flex-col items-center m-4">
            <div ref={section2Ref} className="section bg-blue-400/50 md:bg-blue-400/25 rounded-3xl my-2 mt-52 md:mt-44">
                <Projects />
            </div>
            <div ref={section3Ref} className="section bg-blue-400/50 md:bg-blue-400/25 rounded-3xl my-2">
                <Skills />
            </div>
            <div ref={section4Ref} className="section bg-blue-400/50 md:bg-blue-400/25 rounded-3xl my-2">
                <About />
            </div>
            <div ref={section5Ref} className="section bg-blue-400/50 md:bg-blue-400/25 rounded-3xl my-2">
                <Contact />
          </div>
        </div>
      </div>
    </>
  )
}