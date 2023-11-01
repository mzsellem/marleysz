export default function Skills() {
   const skillCats = [
      {
         category: "Languages",
         list: ["HTML", "CSS", "Python", "EJS", "JavaScript"],
      },
      {
         category: "Frameworks/Libraries",
         list: ["Express.js", "Node.js", "React.js", "Django", "Mongoose"],
      },
      { category: "Databases", list: ["MongoDB", "PostgreSQL", "Supabase"] },
      {
         category: "Concepts/Patterns",
         list: ["REST API", "Object Oriented Programming", "Agile", "Scrum"],
      },
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
         <div className="flex flex-col h-full border-4 border-black rounded-3xl p-6">
            <div className="w-full flex flex-col items-center p-4 bg-white shadow-md">
               <div className="text-4xl mb-6 mt-4 border">Skillset</div>
               {/* Use flex and flex-wrap to create three rows */}
               <div className="flex flex-wrap justify-center sm:space-x-4">
                  {skillCats.map((obj) => (
                     <div key={obj.category} className="mb-4">
                        <div className="text-lg border">
                           <h1 className="font-bold">{obj.category}</h1>
                           <ul className="border">
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

               <div className="w-full text-3xl border flex flex-col text-center mb-6">
                  <span className="font-bold mb-2">Bonus</span>
                  <div className="text-xl">
                     <p className="text-center">
                        {" "}
                        <span className="font-bold">
                           Spoken Languages:
                        </span>{" "}
                        &nbsp; French (native) and Japanese
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
