import React from "react"

export default function Skills() {
   const skillCats = [
      {
         category: "Frameworks/Libraries",
         list: ["Express.js", "Node.js", "React.js", "Django", "Mongoose"],
      },
      {
         category: "Languages",
         list: ["HTML", "CSS", "Python", "EJS", "JavaScript"],
      },
      {
         category: "Concepts/Patterns",
         list: ["REST API", "Object Oriented Programming", "Agile", "Scrum"],
      },
      { category: "Databases", list: ["MongoDB", "PostgreSQL", "Supabase"] },
      {
         category: "Auth",
         list: ["Google OAuth", "Passport.js", "Supabase Magic Link"],
      },
      {
         category: "Other",
         list: [
            "Git",
            "Github",
            "Trello",
            "Fly.io",
            "Bootstrap",
            "JSON",
            "Tailwind CSS",
            "TailWind UI",
            "Resend",
            "Vercel",
            "Vercel AI SDK",
         ],
      },
   ];

   return (
      <>
         <div className="flex flex-col h-full p-6 mx-auto w-3/4 font-mono text-black">
            <div className="w-full flex flex-col sm:items-center p-4">
               <div className="text-4xl mb-6">Skillset</div>
               {/* Use flex and flex-wrap to create three rows */}
               <div className="flex flex-wrap sm:justify-center sm:space-x-6">
                  {skillCats.map((obj) => (
                     <div key={obj.category} className="mb-4">
                        <div className="text-lg">
                           <h1 className="font-bold">{obj.category}</h1>
                           <ul>
                              {obj.list.map((item) => (
                                 <li
                                    key={item}
                                    className="list-inside list-disc"
                                 >
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="w-1/2 text-3xl flex flex-col md:text-start md:p-6">
                  <span className="font-bold mb-4 underline decoration-poppyred decoration-8">
                     Bonus
                  </span>
                  <div className="text-xl">
                     <p className="md:text-start">
                        {" "}
                        <span className="font-bold">
                           Spoken Languages:
                        </span>{" "}
                        French (native) and Japanese
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
