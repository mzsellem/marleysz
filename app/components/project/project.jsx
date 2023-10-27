import ImageSlideshow from "../image-slideshow/image-slideshow";

export default function Project({ images, title, description, techLinks }) {
   return (
      <div className="flex flex-col items-center">
         <div className="m-2">{title}</div>
         <div className="image-slideshow flex items-center bg-white shadow-md mt-2 mb-12">
            <ImageSlideshow images={images} />
         </div>
         <div className="flex m-2 text-center mt-4 w-3/4 text-sm">
            {description}
         </div>
         <div className="space-x-2 mt-2 mb-4 flex flex-wrap justify-center">
            {techLinks.map((tech, index) => (
               <a
                  key={index}
                  href={tech.link} // Replace "example.com" with the actual link
                  className="border rounded-xl p-2 text-sm"
               >
                  {tech.name}
               </a>
            ))}
         </div>
      </div>
   );
}
