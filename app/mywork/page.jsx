"use client";
import React from "react";
import "../../public/logo.png";
import ImageSlideshow from "../components/ImageSlideshow/ImageSlideshow";
import "../../public/account.png";
import "../../public/ai-chatbot.png";

export default function MyWork() {
   const images = [
      "login.png",
      "account.png",
      "challenge.png",
      "ai-chatbot.png",
      "analytics.png",
      "feedback.png",
      "control-panel.png",
   ];
   return (
      <>
         <ul className="text-5xl mb-4">Projects</ul>
         <li className="list-none">
            <div className="flex flex-col">
               <h1 className="ml-4 mb-2">AI Chatbot </h1>
               <div className="image-slideshow border flex justify-center">
                  <ImageSlideshow images={images} />
               </div>
               <div className="flex flex-row">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
               </div>
            </div>
         </li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
      </>
   );
}
