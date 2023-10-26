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
      "analytics-edit.png",
      "feedback.png",
      "control-panel.png",
   ];
   return (
      <>
         <div className="flex flex-col justify-center text-center m-2 border overflow-x-auto">
            <div className="text-3xl m-2">Projects</div>
            <div className="flex flex-row space-x-14">
               {/* //PROJECT 1 */}
               <div className="flex flex-col items-center">
                  <div className="m-2">AI Chatbot </div>
                  <div className="image-slideshow flex items-center border bg-white shadow-md mt-2 mb-12">
                     <ImageSlideshow images={images} />
                  </div>
                  <div className="flex m-2 text-center mt-4 w-3/4 text-sm">
                     Lorem ipsum is placeholder text commonly used in the
                     graphic, print, and publishing industries for previewing
                     layouts and visual mockups.
                  </div>
                  <div className="space-x-2 mt-2 mb-4 flex flex-wrap justify-center">
                     <a
                        href="https://nextjs.org/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Nextjs
                     </a>
                     <a
                        href="https://vitejs.dev/guide/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Vite/Reactjs
                     </a>
                     <a
                        href="https://supabase.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Supabase
                     </a>
                     <a
                        href="https://vercel.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Vercel
                     </a>
                     <a
                        href="https://sdk.vercel.ai/docs"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Vercel AI SDK
                     </a>
                     <a
                        href="https://tailwindcss.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Tailwind CSS
                     </a>
                     <a
                        href="https://tailwindui.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Tailwind UI
                     </a>
                  </div>
               </div>
               {/* //PROJECT 2 */}
               <div className="flex flex-col items-center">
                  <div className="m-2">AI Chatbot </div>
                  <div className="image-slideshow flex items-center border bg-white shadow-md mt-2 mb-12">
                     <ImageSlideshow images={images} />
                  </div>
                  <div className="flex m-2 text-center mt-4 w-3/4 text-sm">
                     Lorem ipsum is placeholder text commonly used in the
                     graphic, print, and publishing industries for previewing
                     layouts and visual mockups.
                  </div>
                  <div className="space-x-2 mt-2 mb-4 flex flex-wrap justify-center">
                     <a
                        href="https://nextjs.org/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Nextjs
                     </a>
                     <a
                        href="https://vitejs.dev/guide/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Vite/Reactjs
                     </a>
                     <a
                        href="https://supabase.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Supabase
                     </a>
                     <a
                        href="https://vercel.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Vercel
                     </a>
                     <a
                        href="https://sdk.vercel.ai/docs"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Vercel AI SDK
                     </a>
                     <a
                        href="https://tailwindcss.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Tailwind CSS
                     </a>
                     <a
                        href="https://tailwindui.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Tailwind UI
                     </a>
                  </div>
               </div>
               {/* //PROJECT 3 */}
               <div className="flex flex-col items-center">
                  <div className="m-2">AI Chatbot </div>
                  <div className="image-slideshow flex items-center border bg-white shadow-md mt-2 mb-12">
                     <ImageSlideshow images={images} />
                  </div>
                  <div className="flex m-2 text-center mt-4 w-3/4 text-sm">
                     Lorem ipsum is placeholder text commonly used in the
                     graphic, print, and publishing industries for previewing
                     layouts and visual mockups.
                  </div>
                  <div className="space-x-2 mt-2 mb-4 flex flex-wrap justify-center">
                     <a
                        href="https://nextjs.org/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Nextjs
                     </a>
                     <a
                        href="https://vitejs.dev/guide/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Vite/Reactjs
                     </a>
                     <a
                        href="https://supabase.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Supabase
                     </a>
                     <a
                        href="https://vercel.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Vercel
                     </a>
                     <a
                        href="https://sdk.vercel.ai/docs"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Vercel AI SDK
                     </a>
                     <a
                        href="https://tailwindcss.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Tailwind CSS
                     </a>
                     <a
                        href="https://tailwindui.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Tailwind UI
                     </a>
                  </div>
               </div>
               {/* //PROJECT 4 */}
               <div className="flex flex-col items-center">
                  <div className="m-2">AI Chatbot </div>
                  <div className="image-slideshow flex items-center border bg-white shadow-md mt-2 mb-12">
                     <ImageSlideshow images={images} />
                  </div>
                  <div className="flex m-2 text-center mt-4 w-3/4 text-sm">
                     Lorem ipsum is placeholder text commonly used in the
                     graphic, print, and publishing industries for previewing
                     layouts and visual mockups.
                  </div>
                  <div className="space-x-2 mt-2 mb-4 flex flex-wrap justify-center">
                     <a
                        href="https://nextjs.org/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Nextjs
                     </a>
                     <a
                        href="https://vitejs.dev/guide/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Vite/Reactjs
                     </a>
                     <a
                        href="https://supabase.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Supabase
                     </a>
                     <a
                        href="https://vercel.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Vercel
                     </a>
                     <a
                        href="https://sdk.vercel.ai/docs"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Vercel AI SDK
                     </a>
                     <a
                        href="https://tailwindcss.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Tailwind CSS
                     </a>
                     <a
                        href="https://tailwindui.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Tailwind UI
                     </a>
                  </div>
               </div>
               {/* //PROJECT 5 */}
               <div className="flex flex-col items-center">
                  <div className="m-2">AI Chatbot </div>
                  <div className="image-slideshow flex items-center border bg-white shadow-md mt-2 mb-12">
                     <ImageSlideshow images={images} />
                  </div>
                  <div className="flex m-2 text-center mt-4 w-3/4 text-sm">
                     Lorem ipsum is placeholder text commonly used in the
                     graphic, print, and publishing industries for previewing
                     layouts and visual mockups.
                  </div>
                  <div className="space-x-2 mt-2 mb-4 flex flex-wrap justify-center">
                     <a
                        href="https://nextjs.org/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Nextjs
                     </a>
                     <a
                        href="https://vitejs.dev/guide/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Vite/Reactjs
                     </a>
                     <a
                        href="https://supabase.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Supabase
                     </a>
                     <a
                        href="https://vercel.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Vercel
                     </a>
                     <a
                        href="https://sdk.vercel.ai/docs"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Vercel AI SDK
                     </a>
                     <a
                        href="https://tailwindcss.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Tailwind CSS
                     </a>
                     <a
                        href="https://tailwindui.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Tailwind UI
                     </a>
                  </div>
               </div>
               {/* //PROJECT 6 */}
               <div className="flex flex-col items-center">
                  <div className="m-2">AI Chatbot </div>
                  <div className="image-slideshow flex items-center border bg-white shadow-md mt-2 mb-12">
                     <ImageSlideshow images={images} />
                  </div>
                  <div className="flex m-2 text-center mt-4 w-3/4 text-sm">
                     Lorem ipsum is placeholder text commonly used in the
                     graphic, print, and publishing industries for previewing
                     layouts and visual mockups.
                  </div>
                  <div className="space-x-2 mt-2 mb-4 flex flex-wrap justify-center">
                     <a
                        href="https://nextjs.org/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Nextjs
                     </a>
                     <a
                        href="https://vitejs.dev/guide/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Vite/Reactjs
                     </a>
                     <a
                        href="https://supabase.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Supabase
                     </a>
                     <a
                        href="https://vercel.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Vercel
                     </a>
                     <a
                        href="https://sdk.vercel.ai/docs"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Vercel AI SDK
                     </a>
                     <a
                        href="https://tailwindcss.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Tailwind CSS
                     </a>
                     <a
                        href="https://tailwindui.com/"
                        className="border rounded-xl p-2 text-sm"
                     >
                        Tailwind UI
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
