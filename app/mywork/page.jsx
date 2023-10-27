"use client";
import React from "react";
import Project from "../components/project/project";
import "../../public/logo.png";
import "../../public/account.png";
import "../../public/ai-chatbot.png";
import "../../public/lamadoro-login.png";
import "../../public/lamadoro-about.png";
import "../../public/lamadoro-home.png";
import "../../public/lamadoro-tasks.png";
import "../../public/lamadoro-timer.png";

export default function MyWork() {
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

   return (
      <>
         <div className="flex flex-col justify-center text-center m-2 border overflow-x-auto">
            <div className="text-3xl m-2">Projects</div>
            <div className="flex flex-row space-x-14">
               {projects.map((obj) => {
                  return (
                     <Project
                        images={obj.images}
                        title={obj.title}
                        description={obj.description}
                        techLinks={obj.techLinks}
                     />
                  );
               })}
            </div>
         </div>
      </>
   );
}
