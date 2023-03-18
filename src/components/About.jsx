import React from "react";
import img from "../assets/personels/personels.jpg";
import img1 from "../assets/personels/u1.jpg";
import img2 from "../assets/personels/u2.jpg";
import img3 from "../assets/personels/u3.jpg";
import img4 from "../assets/personels/u4.jpg";
import img5 from "../assets/personels/u5.jpg";
import foto from "../assets/personels/angun.webp";
import foto1 from "../assets/personels/ziqi.webp";
import foto2 from "../assets/personels/tamir.jpg";
import foto3 from "../assets/personels/tot.jpg";
import { AiFillInstagram } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const About = () => {
  return (
    <div className="bg-dark-primary text-gold-primary" id="about">
      <p className="text-center text-2xl py-10">About Us</p>
      <div className="lg:mx-10 mx-2">
        <div className="py-3 text-center">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={img}
                alt="img"
                className="w-full lg:h-[500px] h-[200px] object-cover object-center rounded-md border-2 border-dotted border-light"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img1}
                alt="img"
                className="w-full lg:h-[500px] h-[200px] object-cover object-center rounded-md border-2 border-dotted border-light"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img2}
                alt="img"
                className="w-full lg:h-[500px] h-[200px] object-cover object-center rounded-md border-2 border-dotted border-light"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img3}
                alt="img"
                className="w-full lg:h-[500px] h-[200px] object-cover object-center rounded-md border-2 border-dotted border-light"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img4}
                alt="img"
                className="w-full lg:h-[500px] h-[200px] object-cover object-center rounded-md border-2 border-dotted border-light"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={img5}
                alt="img"
                className="w-full lg:h-[500px] h-[200px] object-cover object-center rounded-md border-2 border-dotted border-light"
              />
            </SwiperSlide>
          </Swiper>
          <div className="py-3 fontPoppins text-xl">
            <p>The band is punk rock music. Established in 2012.</p>
            <p>Our Personnel :</p>
            <div className="bg-dark-secondary w-full grid lg:grid-cols-4 grid-cols-1 py-2 px-2 gap-2 mt-4 rounded-md">
              <div className="bg-gold-secondary rounded-md px-2 py-2 flex justify-start items-center">
                <p className="bg-gold-primary px-4 py-4 rounded-[50%] hover:bg-light duration-300">
                  <img
                    src={foto}
                    alt="person"
                    className="w-[120px] h-[120px] object-cover object-center rounded-[50%] hover:scale-110 duration-300"
                  />
                </p>
                <div className="ml-4 text-start text-dark-primary text-xl fontLogo font-semibold">
                  <p className="capitalize">anggun anggara</p>
                  <p>Vokalis</p>
                  <a
                    href="https://www.instagram.com/anggnanggra/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-dark-primary px-2 w-20 rounded-md text-gold-secondary text-sm flex justify-start items-center gap-1"
                  >
                    <AiFillInstagram />{" "}
                    <span className="leading-loose">instagram</span>
                  </a>
                </div>
              </div>
              <div className="bg-gold-secondary rounded-md px-2 py-2 flex justify-start items-center">
                <p className="bg-gold-primary px-4 py-4 rounded-[50%] hover:bg-light duration-300">
                  <img
                    src={foto1}
                    alt="person"
                    className="w-[120px] h-[120px] object-cover object-center rounded-[50%] hover:scale-110 duration-300"
                  />
                </p>
                <div className="ml-4 text-start text-dark-primary text-xl fontLogo font-semibold">
                  <p className="capitalize">m. ziqy rianto</p>
                  <p className="capitalize">drummer</p>
                  <a
                    href="https://www.instagram.com/mochziqy/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-dark-primary px-2 w-20 rounded-md text-gold-secondary text-sm flex justify-start items-center gap-1"
                  >
                    <AiFillInstagram />{" "}
                    <span className="leading-loose">instagram</span>
                  </a>
                </div>
              </div>
              <div className="bg-gold-secondary rounded-md px-2 py-2 flex justify-start items-center">
                <p className="bg-gold-primary px-4 py-4 rounded-[50%] hover:bg-light duration-300">
                  <img
                    src={foto2}
                    alt="person"
                    className="w-[120px] h-[120px] object-cover object-center rounded-[50%] hover:scale-110 duration-300"
                  />
                </p>
                <div className="ml-4 text-start text-dark-primary text-xl fontLogo font-semibold">
                  <p className="capitalize">kahfi abjani</p>
                  <p className="capitalize">bassis</p>
                  <a
                    href="https://www.instagram.com/kahfiabjani/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-dark-primary w-20 px-2 rounded-md text-gold-secondary text-sm flex justify-start items-center gap-1"
                  >
                    <AiFillInstagram />{" "}
                    <span className="leading-loose">instagram</span>
                  </a>
                </div>
              </div>
              <div className="bg-gold-secondary rounded-md px-2 py-2 flex justify-start items-center">
                <p className="bg-gold-primary px-4 py-4 rounded-[50%] hover:bg-light duration-300">
                  <img
                    src={foto3}
                    alt="person"
                    className="w-[120px] h-[120px] object-cover object-center rounded-[50%] hover:scale-110 duration-300"
                  />
                </p>
                <div className="ml-4 text-start text-dark-primary text-xl fontLogo font-semibold">
                  <p className="capitalize">rismanto</p>
                  <p className="capitalize">gitaris</p>
                  <a
                    href="https://www.instagram.com/risman_putra_samudra/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-dark-primary w-20 px-2 rounded-md text-gold-secondary text-sm flex justify-start items-center gap-1"
                  >
                    <AiFillInstagram />{" "}
                    <span className="leading-loose">instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
