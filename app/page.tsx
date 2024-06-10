'use client'
import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Intro from "./intro/page";
import Bumblebee from "./components/bumblebee";
import Section from "./components/section/section";
import Projects from "./projects/page";
import Skills from "./skills/page";
import About from "./about/page";
import Contact from "./contact/page";
import "./page.css";

export default function Home() {
  const [activeLink, setActiveLink] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  
  const introRef = useRef(null);
  
  const sections = [
    {title: "Projects", component: <Projects />, ref: useRef(null)},
    {title: "Skills", component: <Skills />, ref: useRef(null)},
    {title: "About Me", component: <About />, ref: useRef(null)},
    {title: "Let's Chat", component: <Contact />, ref: useRef(null)},
  ]

  const scrollToSectionWithOffset = (ref:any, offset:any) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.scrollY - offset,
        behavior: "smooth",
      });
    }
  };

  const handleNavLinkClick = (index: any) => {
    if (index === 0) {
      scrollToSectionWithOffset(introRef, 65);
    } else {
      scrollToSectionWithOffset(sections[index - 1].ref, 65);
    }
    setActiveLink(index);
  };

    // useEffect to set isDesktop based on window width
    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 1024);
      };
  
      // Initial check
      handleResize();
  
      // Add event listener
      window.addEventListener('resize', handleResize);
  
      // Cleanup event listener
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <>
      <Navbar activeLink={activeLink} handleNavLinkClick={handleNavLinkClick} />
      {isDesktop && <Bumblebee />}
      <div className="w-screen video-container">
          <video
            className="fixed object-cover w-full h-full"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="wallpaper.mp4" type="video/mp4" />
               Your browser does not support the video tag.
          </video>
      </div>
      <div ref={introRef} id="intro" className="intro">
        <Intro />
      </div>
      {sections.map((section, index) => (
        <div key={index} ref={section.ref} id={section.title.toLowerCase().replace(/ /g, "-")}>
          <Section title={section.title} component={section.component} />
        </div>
      ))}
    </>
  )
}
