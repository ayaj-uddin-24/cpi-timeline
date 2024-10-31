import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Subscribe from "./pages/Subscribe";
import Auth from "./pages/Auth";
import Post from "./pages/Post";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;