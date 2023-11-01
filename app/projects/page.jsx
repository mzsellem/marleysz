"use client";
import React, { useState } from "react";
import Project from "../components/project/project";
import "../../public/logo.png";
import "../../public/account.png";
import "../../public/ai-chatbot.png";
import "../../public/lamadoro-login.png";
import "../../public/lamadoro-about.png";
import "../../public/lamadoro-home.png";
import "../../public/lamadoro-tasks.png";
import "../../public/lamadoro-timer.png";

export default function Projects() {
   const projects = [
      {
         title: "AI Chatbot",
         description:
            "Empower your leadership potential with our cutting-edge leadership development app powered by OpenAI, tailored to enhance your skills, foster innovation, and guide you towards becoming a dynamic and effective leader.",
         images: [
            "login.png",
            "account.png",
            "challenge.png",
            "ai-chatbot.png",
            "analytics-edit.png",
            "feedback.png",
            "control-panel.png",
         ],
         techLinks: [
            { name: "Nextjs", link: "https://nextjs.org/" },
            { name: "Vite/Reactjs", link: "https://vitejs.dev/guide/" },
            { name: "Supabase", link: "https://supabase.com/" },
            { name: "Vercel", link: "https://vercel.com/" },
            { name: "Vercel AI SDK", link: "https://sdk.vercel.ai/docs" },
            { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
            { name: "Tailwind UI", link: "https://tailwindui.com/" },
         ],
      },
      {
         title: "Lamadoro",
         description:
            "Lamadoro, a user-friendly app, leverages the Pomodoro Technique to enhance your productivity by breaking work into manageable intervals, providing rejuvenating breaks, and inspiring you with motivational quotes, ultimately leading to increased productivity and reduced burnout.",
         images: [
            "lamadoro-login.png",
            "lamadoro-home.png",
            "lamadoro-about.png",
            "lamadoro-tasks.png",
            "lamadoro-timer.png",
         ],
         techLinks: [
            { name: "Express", link: "https://expressjs.com/" },
            { name: "Reactjs", link: "https://react.dev/" },
            { name: "MongoDB", link: "https://www.mongodb.com/" },
            { name: "Mongoose", link: "https://mongoosejs.com/docs/" },
            { name: "Nodejs", link: "https://nodejs.org/en" },
            { name: "Bootstrap", link: "https://getbootstrap.com/" },
            {
               name: "React Bootstrap",
               link: "https://react-bootstrap.github.io/",
            },
            { name: "Figma", link: "https://www.figma.com/" },
         ],
      },
      // { title: "project three", description: "hola" },
      // { title: "project four", description: "nihao" a},
      // { title: "project five", description: "konnichiwa" },
      // { title: "project six", description: "guten tag" },
   ];

   const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

   const goToPreviousProject = () => {
      setCurrentProjectIndex((prevIndex) =>
         prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
   };

   const goToNextProject = () => {
      setCurrentProjectIndex((prevIndex) =>
         prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
   };

   const currentProject = projects[currentProjectIndex];

   return (
      <>
         <div className="border-4 rounded-3xl mx-auto max-w-screen-md">
            <div className="flex flex-col justify-center text-center">
               <div className="space-x-2 flex justify-center mt-4 p-4 flex-col">
                  <div className="text-4xl mb-6 mt-4">Projects</div>
                  <div className="space-x-4 flex justify-center">
                     <button
                        onClick={goToPreviousProject}
                        className="border-2 p-2 bg-white shadow-md w-1/5 md:w-1/6"
                     >
                        &larr;
                     </button>
                     <button
                        onClick={goToNextProject}
                        className="border-2 p-2 bg-white shadow-md w-1/5 md:w-1/6"
                     >
                        &rarr;
                     </button>
                  </div>
               </div>
               <div className="flex flex-row items-center p-4">
                  <div className="w-full bg-white shadow-md">
                     <Project
                        images={currentProject.images}
                        title={currentProject.title}
                        description={currentProject.description}
                        techLinks={currentProject.techLinks}
                     />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
