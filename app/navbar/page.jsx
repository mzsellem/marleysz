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
                  href="/about"
               >
                  About
               </a>
               <a
                  className="hover:underline mx-4 underline-offset-4"
                  href="/skills"
               >
                  Skills
               </a>
               <a
                  className="hover:underline mx-4 underline-offset-4"
                  href="/mywork"
               >
                  My Work
               </a>
               <a
                  className="hover:underline mx-4 underline-offset-4"
                  href="/contact"
               >
                  Contact
               </a>
            </div>
         </nav>
      </>
   );
}
