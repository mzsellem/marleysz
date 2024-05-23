"use client";
import React, { useState } from "react";
import Project from "../components/project/project";
import "../../public/login.png";
import "../../public/lamadoro-login.png";
import "../../public/soundify.png";
import "../../public/sellem-sitters.png";
import "../../public/justin-holding-piano.png"

export default function Projects() {
   const projects = [
      {
         title: "Justin Han Portfolio",
         description:
            "Professional portfolio for a multitalented musician. Portfolio includes a biorgaphy, media, a contact form, and an events listing when available.",
         image: "justin-holding-piano.png",
         contract: "",
         techLinks: [
            { name: "TypeScript", link: "https://www.typescriptlang.org/docs/" },
            { name: "Nodemailer", link: "https://nodemailer.com/about/" },
         ],
         projectLink: "https://justin-han.vercel.app/",
      },
      {
         title: "AI Chatbot",
         description:
            "Empower your leadership potential with our cutting-edge leadership development app powered by OpenAI, tailored to enhance your skills, foster innovation, and guide you towards becoming a dynamic and effective leader.",
         image: "login.png",
         contract: "* Contract Work. Access can be provided upon request.",
         techLinks: [
            { name: "Nextjs", link: "https://nextjs.org/" },
            { name: "Vite/Reactjs", link: "https://vitejs.dev/guide/" },
            { name: "Supabase", link: "https://supabase.com/" },
            { name: "Vercel", link: "https://vercel.com/" },
            { name: "Vercel AI SDK", link: "https://sdk.vercel.ai/docs" },
            { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
            { name: "Tailwind UI", link: "https://tailwindui.com/" },
         ],
         projectLink: "",
      },
      {
         title: "Lamadoro",
         description:
            "Lamadoro, a user-friendly app, leverages the Pomodoro Technique to enhance your productivity by breaking work into manageable intervals, providing rejuvenating breaks, and inspiring you with motivational quotes, ultimately leading to increased productivity and reduced burnout.",
         image: "lamadoro-login.png",
         contract: "",
         techLinks: [
            { name: "Reactjs", link: "https://react.dev/" },
            {
               name: "React Bootstrap",
               link: "https://react-bootstrap.github.io/",
            },
         ],
         projectLink: "https://lamadoro.onrender.com",
      },
      { title: "Soundify", description: "Soundify is a music application that allows the user to have more control of their playlists increasing functionality and user experience. Soundify prioritizes user convenience by enabling a powerful search functionality allowing users to quickly add or delete songs to their playlists.",
      image: "soundify.png",
      contract: "",
      techLinks: [
         { name: "Python", link: "https://www.python.org/" },
         { name: "Django", link: "https://www.djangoproject.com/" },
         { name: "Spotify API", link: "https://developer.spotify.com/documentation/web-api" },
         {
            name: "PostgreSQL",
            link: "https://www.postgresql.org/",
         },
         { name: "Trello", link: "https://trello.com/" },
      ],
      projectLink: "https://soundify-ahje.onrender.com/",
   },
      { title: "Sellem Sitters", description: "The Cat Sitter app is a simple, to-do list-style application designed to help cat sitters manage their feline clientele.",
      image: "sellem-sitters.png",
      contract: "",
      techLinks: [
         { name: "Express", link: "https://expressjs.com/" },
         { name: "Node.js", link: "https://nodejs.org/en" },
         { name: "EJS", link: "https://www.npmjs.com/package/ejs" },
         { name: "MongoDB", link: "https://www.mongodb.com/" },
         { name: "Mongoose", link: "https://mongoosejs.com/" },
         {
            name: "Google OAuth",
            link: "https://www.passportjs.org/packages/passport-google-oauth2/",
         },
         { name: "Passport", link: "https://www.passportjs.org/docs/" },
         { name: "Bootstrap", link: "https://getbootstrap.com/" },
      ],
      projectLink: "https://sellemsitters.fly.dev/",
   },
      { title: "Match The Flag", description: "This is a game of concentration. You have a limited number of guesses. Can you correctly match the pairs of flags? Let's find out!",
      image: "match-the-flag.png",
      contract: "",
      techLinks: [
         { name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
         { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
         { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/javascript" },
         { name: "Figma", link: "https://www.figma.com/" },
         { name: "Pixabay", link: "https://pixabay.com/" },
      ],
      projectLink: "https://mzsellem-ga.github.io/concentration-memory-game/",
   },
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
         <div className="flex justify-center w-full mx-auto font-mono">
            <div className="flex flex-col text-center">
               <div>
                  <div className="flex flex-row items-center">
                     <button
                        onClick={goToPreviousProject}
                        className="p-2 font-bold text-black sm:w-1/6 hover:scale-150">
                        &larr;
                     </button>
                     <div className="p-2 h-[710px] sm:h-[470px] max-w-[800px] sm:w-[700px]">
                        <Project
                              image={currentProject.image}
                              contract={currentProject.contract}
                              title={currentProject.title}
                              description={currentProject.description}
                              techLinks={currentProject.techLinks}
                              projectLink={currentProject.projectLink}
                           />
                     </div>
                     <button
                              onClick={goToNextProject}
                              className="p-2 font-bold text-black sm:w-1/6 hover:scale-150"
                           >
                              &rarr;
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
