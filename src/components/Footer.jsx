import React from "react";
import { GrInstagram } from "react-icons/gr";
import { TfiYoutube } from "react-icons/tfi";
import { BsFacebook, BsHearts } from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div>
      <div className="">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 bg-black px-2 py-2 text-light items-center">
          <div>
            <h2 className="lg:text-left text-center text-2xl font-bold fontLogo lg:ml-10 leading-loose text-gold-secondary">
              UNDERLINE BAND
            </h2>
          </div>
          <div className="lg:pb-5 mb-2">
            <h1 className="font-semibold text-lg text-slate-400 tracking-widest mb-2">
              Menus
            </h1>
            <ul className="lg:space-x-3 space-x-2 inline-flex pb-2 text-slate-400 fontPoppins text-sm">
              <li className="hover:text-gold-secondary group relative">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="cursor-pointer"
                >
                  Home
                </Link>
                <div className="mt-1 absolute lg:block hidden duration-300 left-0 w-0 h-[1px] bg-gold-primary group-hover:w-full group-hover:transition-all"></div>
              </li>
              <li className="hover:text-gold-secondary group relative">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="cursor-pointer"
                >
                  About Us
                </Link>
                <div className="mt-1 absolute lg:block hidden duration-300 left-0 w-0 h-[1px] bg-gold-primary group-hover:w-full group-hover:transition-all"></div>
              </li>
              <li className="hover:text-gold-secondary group relative">
                <Link
                  to="songs"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="cursor-pointer"
                >
                  Our Songs
                </Link>
                <div className="mt-1 absolute lg:block hidden duration-300 left-0 w-0 h-[1px] bg-gold-primary group-hover:w-full group-hover:transition-all"></div>
              </li>
              <li className="hover:text-gold-secondary group relative">
                <Link
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="cursor-pointer"
                >
                  Our Gallery
                </Link>
                <div className="mt-1 absolute lg:block hidden duration-300 left-0 w-0 h-[1px] bg-gold-primary group-hover:w-full group-hover:transition-all"></div>
              </li>
              <li className="hover:text-gold-secondary group relative">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="cursor-pointer"
                >
                  Contact Us
                </Link>
                <div className="mt-1 absolute lg:block hidden duration-300 left-0 w-0 h-[1px] bg-gold-primary group-hover:w-full group-hover:transition-all"></div>
              </li>
            </ul>
          </div>
          <div className="lg:px-3 text-slate-400 fontPoppins text-sm leading-relaxed">
            <p className="font-semibold text-lg tracking-widest">Alamat</p>
            <p className="mt-2">
              Jl. Raya Cimanggir No.24 Desa Pasanggrahan Kecamatan Sagaranten
              Kabupaten Sukabumi Jawa Barat 43181
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-400 h-[1px] col-span-3 hidden lg:block"></div>
      <div className="col-span-3 grid lg:grid-cols-3 grid-cols-1 px-5 lg:px-10 py-5 bg-black">
        <div className="fontPoppins text-sm text-slate-400 py-5 text-center">
          <p>Copyright Underline Website 2023</p>
        </div>
        <div className="lg:pl-20 text-sm fontPoppins text-slate-400 lg:mt-3 pb-5 lg:block flex justify-center">
          <p className="flex items-center lg:gap-1 gap-2 leading-relaxed capitalize">
            Made with{" "}
            <span className="text-red-600 text-xl lg:mr-0">
              {" "}
              <BsHearts size={25} />{" "}
            </span>
            By :
          </p>
          <p className="lg:ml-0 ml-2">
            {" "}
            <a
              href="https://www.instagram.com/abdulmajidabdalah_/"
              target={"_blank"}
              rel="noreferrer"
            >
              Abdul Majid Abdalah
            </a>
          </p>
        </div>
        <div className="flex justify-center items-center text-3xl my-3 gap-10 text-slate-400">
          <a
            href="https://www.instagram.com/underline.band/"
            target={"_blank"}
            rel="noreferrer"
          >
            <GrInstagram />
          </a>
          <a
            href="https://www.youtube.com/@underlineband5946"
            target={"_blank"}
            rel="noreferrer"
          >
            <TfiYoutube />
          </a>
          <a
            href="https://web.facebook.com/underline12.band"
            target={"_blank"}
            rel="noreferrer"
          >
            <BsFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
