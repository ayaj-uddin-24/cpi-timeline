import React, { useContext, useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { SportContext } from "../contexts/SportContext";
import { Link } from "react-router-dom";
import GalleryItem from "./GalleryItem";

const Photos = () => {
  const [latestPhotos, setLatestPhotos] = useState([]);
  const { images } = useContext(SportContext);

  useEffect(() => {
    setLatestPhotos(images);
  }, []);
  return (
    <div className="px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mb-20">
      <Link to="/gallery" className="flex items-center gap-3 text-3xl mb-10 hover:text-red-700 cursor-pointer">
        Gallery <FaArrowRightLong />
      </Link>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {latestPhotos.map((item) => {
          return (
            <GalleryItem
              key={item.id}
              id={item.id}
              img={item.image}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Photos;
