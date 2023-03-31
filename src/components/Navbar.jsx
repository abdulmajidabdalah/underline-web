import { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import logo from "../assets/IMG_5715-fotor-bg-remover-20230318174753.png";

const spanStyle =
  "absolute lg:block hidden duration-300 -bottom-1 left-0 w-0 h-[1px] bg-gold-primary group-hover:w-full group-hover:transition-all";

const navStyle =
  "text-gold-secondary hover:text-gold-primary cursor-pointer relative group";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-dark-primary fixed top-0 z-50 -mt-2">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <p>
              <h2 className="text-2xl font-bold fontLogo leading-loose text-gold-secondary cursor-pointer">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setNavbar(false)}
                >
                  <img src={logo} alt="" className="h-[50px] w-[100px]" />
                </Link>
              </h2>
            </p>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 lg:h-full h-screen ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 fontPoppins">
              <div className={navStyle}>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setNavbar(false)}
                >
                  <p>Home</p>
                  <span className={spanStyle}></span>
                </Link>
              </div>
              <div className={navStyle}>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setNavbar(false)}
                >
                  <p>About Us</p>
                  <span className={spanStyle}></span>
                </Link>
              </div>
              <div className={navStyle}>
                <Link
                  to="songs"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setNavbar(false)}
                >
                  <p>Songs</p>
                  <span className={spanStyle}></span>
                </Link>
              </div>
              <div className={navStyle}>
                <Link
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setNavbar(false)}
                >
                  <p>Gallery</p>
                  <span className={spanStyle}></span>
                </Link>
              </div>
              <div className={navStyle}>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setNavbar(false)}
                >
                  <p>Contact US</p>
                  <span className={spanStyle}></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
