import React from "react";
import About from "./About";
import Headers from "./Headers";
import Navbar from "./Navbar";
import Songs from "./Songs";
import RatingCom from "./RatingCom";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";
import ContactIcon from "./ContactIcon";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Headers />
      <About />
      <Songs />
      <RatingCom />
      <Gallery />
      <Contact />
      <Footer />
      <ContactIcon />
    </div>
  );
};

export default Main;
