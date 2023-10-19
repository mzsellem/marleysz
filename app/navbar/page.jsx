export default function Navbar() {
   return (
      <>
         <nav className="flex justify-center mt-4">
            <div>
               <a className="hover:underline mx-4 underline-offset-4" href="/">
                  Home
               </a>
               <a
                  className="hover:underline mx-4 underline-offset-4"
                  href="/mywork"
               >
                  My Work
               </a>
               <a
                  className="hover:underline mx-4 underline-offset-4"
                  href="/skills"
               >
                  Skills
               </a>
               <a
                  className="hover:underline mx-4 underline-offset-4"
                  href="/about"
               >
                  About
               </a>
               <a
                  className="hover:underline mx-4 underline-offset-4"
                  href="/contact"
               >
                  Contact
               </a>
            </div>
            <div className="flex space-x-4">
               <a href="https://github.com/mzsellem-GA">
                  <img
                     src="/github-mark.png"
                     alt="github logo"
                     width="50"
                     height="50"
                  />
               </a>
               <a
                  href="https://www.linkedin.com/in/marley-sellem/"
                  className="mt-2"
               >
                  <img
                     src="/li-logo.png"
                     alt="linkedin logo"
                     width="50"
                     height="50"
                  />
               </a>
            </div>
         </nav>
      </>
   );
}
