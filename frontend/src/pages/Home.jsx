import React from "react";
import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import Photos from "../components/Photos";
import Event from "../components/Event";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestNews />
      <Event />
      <Photos />
    </div>
  );
};

export default Home;
