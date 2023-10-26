"use client";
import React from "react";
import "../../public/logo.png";
import ImageSlideshow from "../components/image-slideshow/image-slideshow";
import "../../public/account.png";
import "../../public/ai-chatbot.png";
import Project from "../components/project/project";

export default function MyWork() {
   const projects = [
      {
         title: "project one",
         description: "hello",
         images: [
            "login.png",
            "account.png",
            "challenge.png",
            "ai-chatbot.png",
            "analytics-edit.png",
            "feedback.png",
            "control-panel.png",
         ],
      },
      { title: "project two", description: "bonjour" },
      { title: "project three", description: "hola" },
      { title: "project four", description: "nihao" },
      { title: "project five", description: "konnichiwa" },
      { title: "project six", description: "guten tag" },
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
                     />
                  );
               })}
            </div>
         </div>
      </>
   );
}
