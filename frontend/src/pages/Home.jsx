import React from "react";
import Hero from "../components/Hero";
import Match from "../components/Match";
import LatestNews from "../components/LatestNews";
import Photos from "../components/Photos";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestNews />
      <Match />
      <Photos />
    </div>
  );
};

export default Home;
