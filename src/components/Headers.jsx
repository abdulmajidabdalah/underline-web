import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import imageHeaders1 from "../assets/pngwing.com.png";
import imageHeaders2 from "../assets/headers2.png";
import { GrYoutube } from "react-icons/gr";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./headers.css";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

const Headers = () => {
  return (
    <div id="home">
      <div className="h-full sm:h-full xl:h-screen 2xl:h-96 bg-dark-primary">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          autoplay={{
            delay: 500000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-dark-primary lg:h-screen flex justify-center lg:items-center">
              <div className="lg:ml-12 ml-1 py-2 text-gold-secondary w-[50%] lg:mt-0 mt-20">
                <h1 className="leading-loose fontHeaders lg:text-6xl capitalize">
                  Underline Is
                </h1>
                <h1 className="fontHeaders capitalize lg:text-5xl">
                  country punk rock
                </h1>
                <p className="fontPoppins lg:text-sm text-xs text-slate-400 mt-3 italic">
                  " Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Hic fuga molestiae autem itaque officiis? Aliquid nihil
                  accusamus consectetur animi aut esse, sunt soluta quibusdam,
                  dolore cum est maxime ad minima? "
                </p>
                <button className="bg-transparent duration-300 border-2 border-double border-gold-primary lg:px-4 lg:py-3 px-1 py-1 lg:rounded-lg rounded-md hover:bg-gold-secondary hover:text-dark-primary fontPoppins mt-5 capitalize">
                  let's talk with us
                </button>
              </div>
              <div className="lg:h-[600px] h-[400px] w-[50%] flex justify-start lg:pt-10 pt-16">
                <img src={imageHeaders1} alt="" className="h-full" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-dark-primary lg:h-screen flex justify-center lg:items-center">
              <div className="lg:ml-12 ml-1 lg:mt-0 mt-20 py-2 text-gold-secondary w-[50%]">
                <h1 className="leading-loose fontHeaders lg:text-6xl capitalize">
                  Underline Is
                </h1>
                <h1 className="fontHeaders capitalize lg:text-5xl">
                  country punk rock
                </h1>
                <p className="fontPoppins lg:text-sm text-xs text-slate-400 mt-3 italic">
                  " Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Hic fuga molestiae autem itaque officiis? Aliquid nihil
                  accusamus consectetur animi aut esse, sunt soluta quibusdam,
                  dolore cum est maxime ad minima? "
                </p>
                <button className="bg-light text-dark-primary hover:bg-dark-secondary duration-300 border-2 border-double border-gold-primary lg:px-4 lg:py-3 px-1 py-1 lg:rounded-lg rounded-md  fontPoppins mt-5 capitalize flex justify-start items-center gap-2 hover:text-light hover:border-light text-[10px] lg:text-[18px] lg:leading-[28px]">
                  subscribe our youtube channel{" "}
                  <GrYoutube className="text-red-600" />
                </button>
              </div>
              <div className="lg:h-[600px] h-[300px] w-[50%] flex justify-start mb-36">
                <img src={imageHeaders2} alt="" className="h-full" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Headers;
