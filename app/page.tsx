'use client'
import React, { useRef, useState } from "react";
import Navbar from "./components/navbar";
import Intro from "./intro/page";
import Bumblebee from "./components/bumblebee";
import Section from "./components/section/section";
import Projects from "./projects/page";
import Skills from "./skills/page";
import About from "./about/page";
import Contact from "./contact/page";

export default function Home() {

  const sections = [
    {title: "Projects", component: <Projects />},
    {title: "Skills", component: <Skills />},
    {title: "About Me", component: <About />},
    {title: "Let's Chat", component: <Contact />},
  ]   
  
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
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

  const handleNavLinkClick = (index:any) => {
    scrollToSectionWithOffset(sectionRefs[index], 65);
    setActiveLink(index);
  };

  return (
    <>
      <Navbar activeLink={activeLink} handleNavLinkClick={handleNavLinkClick} />
      <div className="w-full">
          <video
            className="fixed object-cover w-full h-full -z-10"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="wallpaper.mp4" type="video/mp4" />
               Your browser does not support the video tag.
          </video>
      </div>
      <div ref={sectionRefs[0]} id="intro" className="h-screen">
        <Intro />
      </div>
      {sections.map((section, index) => {
        return(<Section key={index} title={section.title} component={section.component}/>
        )})
      }
      <Bumblebee />
    </>
  )
}
