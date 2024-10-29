import React, { useContext } from "react";
import { SportContext } from "../contexts/SportContext";
import { Link } from "react-router-dom";

const Gallery = () => {
  const { images } = useContext(SportContext);
  console.log(images);
  return (
    <div className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] my-10">
      <h1 className=" text-3xl font-bold text-center mb-10">
        All Your Favourite Images Here
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {images.map((image, index) => {
          return (
            <Link
              to={`/gallery/${image.title}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden relative"
              key={index}
            >
              <img
                src={image.image}
                alt="Blog Image"
                className="w-full h-[100%] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="font-bold text-lg">{image.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
