import React, { useContext } from "react";
import { SportContext } from "../contexts/SportContext.jsx";

const Gallery = () => {
  const { images } = useContext(SportContext);
  return (
    <section className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] my-10">
      <div className="container">
        <h1 className="text-3xl font-bold text-center mb-10">All Images</h1>
        <div className="break-inside-avoid gap-8 grid-cols-1 sm:grid-cols-2 md:columns-3 lg:columns-4">
          {images.map((image, index) => {
            return (
              <div className="mb-8 overflow-hidden rounded-xl" key={index}>
                <img
                  src={image}
                  alt="gallery image"
                  className="w-full object-cover object-center"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
