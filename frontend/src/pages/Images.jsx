import React from "react";
import { useParams } from "react-router-dom";

const Images = () => {
  const { name } = useParams();
  return (
    <div className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex flex-col sm:flex-row gap-5 mt-12 mb-20">
      <h1 className="text-red-700 text-3xl">I will do it tomorrow - {name}</h1>
    </div>
  );
};

export default Images;
