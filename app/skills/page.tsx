import React from "react"

export default function Skills() {
   const skillCats = [
      {
         category: "Languages",
         list: ["TypeScript", "JavaScript", "Python", "EJS", "CSS", "HTML"],
      },
      { category: "Databases", list: ["PostgreSQL", "MongoDB", "Supabase"] },
      {
         category: "Frameworks/Libraries",
         list: ["Next.js", "React.js","Express.js", "Node.js", "Django", "Mongoose"],
      },
      {
         category: "Auth",
         list: ["Google OAuth", "Passport.js", "Magic Link"],
      },
      {
         category: "Concepts/Patterns",
         list: ["REST API", "Functional Programming", "Agile", "Scrum"],
      },
      {
         category: "Other",
         list: [
            "Android Studio",
            "Headless UI",
            "Epic",
            "Git/Github",
            "Trello",
            "Bootstrap",
            "JSON",
            "Tailwind CSS/UI",
            "Resend",
            "Vercel/AI SDK",
         ],
      },
   ];

   return (
      <>
         <div className="flex flex-col p-16 font-mono text-black md:items-center">
            <div className="mb-6 text-4xl text-center">Skillset</div>
            <div className="max-w-2xl mx-auto"> {/* Center the content and set a max-width */}
               <div className="grid grid-cols-1 text-left sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 p-2 md:h-[470px] max-w-[800px] md:w-[700px]">
                  {skillCats.map((obj) => (
                     <div key={obj.category}>
                        <div className="text-lg">
                           <h1 className="font-bold">{obj.category}</h1>
                           <ul>
                              {obj.list.map((item) => (
                                 <li key={item} className="list-disc list-inside">
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="flex mt-16"> 
                  <div className="text-2xl text-left">
                     <span className="font-bold underline decoration-brightred decoration-8">
                        Bonus
                     </span>
                     <div className="mt-4 text-xl">
                        <p>
                           <span className="font-bold">Spoken Languages:</span> French (native) and Japanese
                        </p> 
                     </div>
                  </div>
            </div>
         </div>
      </>





      // <>
      //    <div className="flex flex-col w-3/4 h-full p-6 mx-auto font-mono text-black">
      //       <div className="flex flex-col w-full p-4 sm:items-center">
      //          <div className="mb-6 text-4xl">Skillset</div>
      //          {/* Use flex and flex-wrap to create three rows */}
      //          <div className="flex flex-wrap sm:justify-center sm:space-x-6">
      //             {skillCats.map((obj) => (
      //                <div key={obj.category} className="mb-4">
      //                   <div className="text-lg">
      //                      <h1 className="font-bold">{obj.category}</h1>
      //                      <ul>
      //                         {obj.list.map((item) => (
      //                            <li
      //                               key={item}
      //                               className="list-disc list-inside"
      //                            >
      //                               {item}
      //                            </li>
      //                         ))}
      //                      </ul>
      //                   </div>
      //                </div>
      //             ))}
      //          </div>

      //          <div className="flex flex-col w-1/2 text-3xl md:text-start md:p-6">
      //             <span className="mb-4 font-bold underline decoration-brightred decoration-8">
      //                Bonus
      //             </span>
      //             <div className="text-xl">
      //                <p className="md:text-start">
      //                   {" "}
      //                   <span className="font-bold">
      //                      Spoken Languages:
      //                   </span>{" "}
      //                   French (native) and Japanese
      //                </p>
      //             </div>
      //          </div>
      //       </div>
      //    </div>
      // </>
   );
}
