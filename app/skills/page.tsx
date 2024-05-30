'use client'
import React, { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

// Helper function to sanitize category names into valid HTML IDs
const sanitizeId = (str: any) => str.replace(/[^a-zA-Z0-9-_]/g, '');

export default function Skills() {
  const [openCategories, setOpenCategories] = useState({});
  const [scope, animate] = useAnimate();
  const skillCats = [
    {
      category: "Languages",
      list: ["TypeScript", "JavaScript", "Python", "EJS", "CSS", "HTML"],
    },
    { category: "Databases", list: ["PostgreSQL", "MongoDB", "Supabase"] },
    {
      category: "Frameworks/Libraries",
      list: ["Next.js", "React.js", "Express.js", "Node.js", "Django", "Mongoose"],
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

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  useEffect(() => {
    skillCats.forEach((cat) => {
      const isOpen = openCategories[cat.category];
      const sanitizedId = sanitizeId(cat.category);
      animate(
        `#${sanitizedId} ul`,
        {
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        },
        {
          type: "spring",
          bounce: 0,
          duration: 0.4,
        }
      );
      animate(
        `#${sanitizedId} li`,
        isOpen
          ? { opacity: 1, scale: 1, x: 0 }
          : { opacity: 0, scale: 0.3, x: -50 },
        {
          duration: 0.2,
          delay: isOpen ? stagger(0.1) : 0,
        }
      );
    });
  }, [openCategories]);

  return (
    <div className="flex flex-col w-full font-mono text-black sm:items-center" ref={scope}>
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:h-[470px] max-w-[800px] sm:w-[700px] gap-x-14">
          {skillCats.map((obj) => {
            const sanitizedId = sanitizeId(obj.category);
            return (
              <div className="flex flex-col items-center justify-center w-64 h-64 text-xs bg-center bg-cover aspect-w-1 aspect-h-1" style={{ backgroundImage: "url('honeycomb.png')", backgroundSize: "contain"}} key={obj.category} id={sanitizedId}>
                <div className="flex flex-col items-center justify-center">
                  <h1 
                    className="font-bold cursor-pointer"
                    onClick={() => toggleCategory(obj.category)}
                  >
                    {obj.category}
                  </h1>
                  <ul style={{ overflow: 'hidden' }}>
                    {obj.list.map((item) => (
                      <motion.li key={item} className="text-xs list-disc list-inside">
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 mb-6 sm:mt-16">
        <div className="text-2xl text-left">
          <span className="font-bold underline decoration-brightred decoration-8">
            Bonus
          </span>
          <div className="mt-4">
            <p>
              <span className="text-xl font-bold">Languages:</span> <span className="text-lg">French (native) and Japanese</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
