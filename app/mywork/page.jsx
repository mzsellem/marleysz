"use client";
import Navbar from "../navbar/page";
import React from "react";
import SlidingGallery from "../components/SlidingGallery";
import "../../public/logo.png";

export default function MyWork() {
   const slides = [
      <div className="bg-red-300">
         Slide 1
         <img src="/logo.png" />
      </div>,
      <div className="bg-blue-300">Slide 2</div>,
      <div className="bg-green-300">Slide 3</div>,
   ];
   return (
      <>
         <Navbar />
         <SlidingGallery slides={slides} />
         <div className="flex flex-col h-full border-black rounded-3xl m-12 mt-5 p-0"></div>
      </>
   );
}
