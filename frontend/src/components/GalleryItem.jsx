import React from "react";
import { Link } from "react-router-dom";

const GalleryItem = ({ img, title }) => {
  return (
    <Link
      to={`/gallery/${title}`}
      className="bg-white rounded-lg shadow-lg overflow-hidden relative hover:border-b-4 border-red-700"
    >
      <img
        src={img}
        alt="Blog Image"
        className="w-full h-[100%] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <div className="absolute bottom-0 p-4 text-white">
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
    </Link>
  );
};

export default GalleryItem;