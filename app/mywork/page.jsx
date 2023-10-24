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
      "ready-for-challenge.png",
      "ai-chatbot.png",
      "analytics.png",
      "feedback.png",
      "control-panel.png",
   ];
   return (
      <>
         <ul>Projects</ul>
         <li>
            <div className="flex flex-col">
               <h1>AI Chatbot </h1>
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
