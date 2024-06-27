'use client'
import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Intro from "./intro/page";
import Bumblebee from "./components/bumblebee/bumblebee";
import Section from "./components/section/section";
import Projects from "./projects/page";
import Skills from "./skills/page";
import About from "./about/page";
import Contact from "./contact/page";
import "./page.css";

export type ScrollToSection = {
  ref: React.RefObject<HTMLDivElement>,
  offset: number,
}

export default function Home() {
  const [activeLinkIndex, setActiveLinkIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  
  const introRef = useRef<HTMLDivElement | null>(null);
  
  const sections = [
    {title: "Projects", component: <Projects />, ref: useRef<HTMLDivElement | null>(null)},
    {title: "Skills", component: <Skills />, ref: useRef<HTMLDivElement | null>(null)},
    {title: "About Me", component: <About />, ref: useRef<HTMLDivElement | null>(null)},
    {title: "Let's Chat", component: <Contact />, ref: useRef<HTMLDivElement | null>(null)},
  ]

  const scrollToSectionWithOffset = ({ref, offset}: ScrollToSection) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.scrollY - offset,
        behavior: "smooth",
      });
    }
  };

  const handleNavLinkClick = (index: number) => {
    if (index === 0) {
      scrollToSectionWithOffset({ref: introRef, offset: 65});
    } else {
      scrollToSectionWithOffset({ref: sections[index - 1].ref, offset: 65});
    }
    setActiveLinkIndex(index);
  };

    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 1024);
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <>
      <Navbar activeLinkIndex={activeLinkIndex} handleNavLinkClick={handleNavLinkClick} />
      {isDesktop && <Bumblebee />}
      <div className="w-screen video-container">
          <video
            className="fixed object-cover w-full h-full blurred-video"
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
