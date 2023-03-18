import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { images } from "../gallery";
import { initLightboxJS } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox } from "lightbox.js-react";

const Gallery = () => {
  useEffect(() => {
    initLightboxJS("B687FA0A3438D2C6", "Individu");
  }, []);

  return (
    <div
      className="bg-dark-secondary text-gold-primary lg:py-8 pb-5"
      id="gallery"
    >
      <h1 className="text-center fontPoppins py-5 capitalize text-2xl">
        our gallery
      </h1>
      <div className="bg-dark-primary px-2 py-2 lg:mx-10 mx-1 h-[50vh] lg:h-[100vh] overflow-auto">
        <SlideshowLightbox
          theme="lightbox"
          className="grid lg:grid-cols-4 grid-cols-3 gap-x-2 gap-y-2"
        >
          {images.map((item, index) => (
            <img src={item.imgurl} alt="" className="" key={index} />
          ))}
        </SlideshowLightbox>
      </div>
    </div>
  );
};

export default Gallery;
