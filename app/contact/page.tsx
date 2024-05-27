import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="flex flex-col font-mono text-black sm:mb-4 sm:w-[700px]">
      <div className="flex flex-col justify-center">
        <p className="flex justify-center m-4 text-xl font-fine">
          marleysellem@gmail.com
        </p>
        <div className="flex justify-center pb-2 space-x-6">
          <motion.a 
            whileTap={{ scale: 0.85 }}
            href="https://github.com/mzsellem-GA"
            className="mt-1"
          >
            <img
              src="/github-mark.png"
              alt="github logo"
              width="40"
              height="40"
            />
          </motion.a>
          <motion.a 
            whileTap={{ scale: 0.85 }}
            href="https://www.linkedin.com/in/marley-sellem/"
            className="mt-2"
          >
            <img
              src="/li-logo.png"
              alt="linkedin logo"
              width="40"
              height="40"
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
