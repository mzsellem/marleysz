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
         <div className="flex flex-col justify-center h-full border-4 border-black rounded-3xl">
            <div className="w-full p-6 overflow-x-auto">
               <div className="text-5xl mb-6 mt-6">Skillset</div>
               <div className="flex flex-row space-x-12 border">
                  <div className="text-xl flex space-x-8 m-4">
                     {skillCats.map((obj) => {
                        return (
                           <div key={obj.category}>
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
                        );
                     })}
                  </div>
               </div>
               <div className="w-full text-3xl border">
                  <span className="font-bold">Bonus</span>
                  <div className="text-xl">
                     <span className="flex font-bold">Spoken Languages:</span>{" "}
                     French (native) and Japanese
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
