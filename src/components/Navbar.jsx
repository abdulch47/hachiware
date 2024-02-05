import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import X from "../assets/images/icons/xlogo.png";
import Telegram from "../assets/images/icons/telegram.com.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
// import AboutUs from "./AboutUs";
// import { Link } from "react-router-dom";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="container mx-auto py-6 px-4 md:px-10 flex justify-between relative items-center">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="h-16" />
        <p className="text-dblue font-bold text-lg md:text-xl ml-3">
          Hachiware
        </p>
      </div>
      <div className="hidden md:flex items-center">
        {/* <a href="#about" className="hidden md:flex items-center text-dblue px-4 font-semibold backdrop-blur-md">
        About Us
      </a> */}
        <a
          href="https://twitter.com/hachiwaretoken"
          target="_blank"
          rel="noreferrer"
        >
          <img src={X} alt="logo" className="h-8 md:h-12 mr-2 md:mr-4" />
        </a>
        <a href="https://t.me/hachiwaretoken" target="_blank" rel="noreferrer">
          <img src={Telegram} alt="logo" className="h-8 md:h-12 mr-2 md:mr-4" />
        </a>
        <button className="bg-lblue rounded-lg py-2 px-6 md:py-2 md:px-8 font-semibold">
          Buy Now
        </button>
      </div>
      {showNav ? (
        <div
          onClick={() => {
            setShowNav(!showNav);
          }}
          className="flex md:hidden items-center"
        >
          <MdOutlineCancel />
        </div>
      ) : (
        <div
          onClick={() => {
            setShowNav(!showNav);
          }}
          className="flex md:hidden items-center"
        >
          <RxHamburgerMenu />
        </div>
      )}
      {showNav ? (
        <div className="bg-gray-100 w-full flex flex-col  space-y-4 py-2 items-center justify-center absolute mt-72">
          {/* <a href="#about" className=" items-center text-dblue px-4 font-semibold backdrop-blur-md">
        About Us
      </a> */}
          <img src={X} alt="logo" className="h-8 md:h-12 mr-2 md:mr-4" />
          <img src={Telegram} alt="logo" className="h-8 md:h-12 mr-2 md:mr-4" />
          <button className="bg-lblue rounded-lg py-2 px-6 md:py-2 md:px-8 font-semibold">
            Buy Now
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
