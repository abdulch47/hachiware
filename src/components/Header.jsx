import React from "react";
import HeroBanner from "../assets/images/mobile-screen.png";

const handleTokenClick = (tokenName) => {
  const tokenLinks = {
    DExLab:
      "https://www.dexlab.space/swap?pay=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&receive=GsNzxJfFn6zQdJGeYsupJWzUAm57Ba7335mfhWvFiE9Z",
    ORCA: "https://www.orca.so/",
    Raydium:
      "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R&fixed=in",
    Flux: "https://fluxbeam.xyz/app/swap",
  };

  // Open the link in a new window or tab
  window.open(tokenLinks[tokenName], "_blank");
};

export const Header = () => {
  return (
    <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-12 lg:flex-row md:px-8 lg:max-w-screen-xl lg:h-[120vh] overflow-hidden">
      <div className="pt-16 mb-16 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
        <div className="max-w-xl mb-6">
          <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Introduction
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Introducing Hachiware Token, the latest sensation in the digital
            currency space, inspired by the beloved character from the
            heartwarming Chiikawa series. Hachiware Token is not just a
            cryptocurrency; it's a symbol of joy, community, and innovation. As
            we embark on this exciting journey, we invite you to be a part of a
            movement that combines the charm of Hachiware with the cutting-edge
            world of blockchain technology.
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <span
              className="hidden sm:inline-flex items-center text-xs justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-lblue focus:shadow-outline focus:outline-none"
            >
              Token:&nbsp;BWJJSKPKTw1JfB8QZpW7LZrYijMtHtRBZJKFQ51u538a
            </span>
            <span
              className="inline-flex items-center sm:hidden text-wrap text-[10px] justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-lblue focus:shadow-outline focus:outline-none"
            >
              Token:&nbsp;BWJJSKPKTw1JfB8QZpW7LZrYijMtHtRBZJKFQ51u538a
            </span>
          </div>
        </div>
        <div className=" grid grid-cols-2 pr-28 md:grid-cols-4 gap-4  items-center pt-4  ">
          {/* Button or link for DExLab */}
          <button
            onClick={() => handleTokenClick("Raydium")}
            className=" sm:inline-flex items-center text-xs justify-center h-12 px-6  font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-lblue focus:shadow-outline focus:outline-none"
          >
            RAYDIUM
          </button>

          {/* Button or link for ORCA */}
          {/* <button
            onClick={() => handleTokenClick("ORCA")}
            className=" sm:inline-flex items-center text-xs justify-center h-12 px-6  font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-lblue focus:shadow-outline focus:outline-none"
          >
            ORCA
          </button> */}

          {/* Button or link for Raydium */}
          {/* <button
            onClick={() => handleTokenClick("Raydium")}
            className=" sm:inline-flex items-center text-xs justify-center h-12 px-6  font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-lblue focus:shadow-outline focus:outline-none"
          >
            RAYDIUM
          </button> */}

          {/* Button or link for Flux */}
          {/* <button
            onClick={() => handleTokenClick("Flux")}
            className=" sm:inline-flex items-center text-xs justify-center h-12 px-6  font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-lblue focus:shadow-outline focus:outline-none"
          >
            FLUX BEAM
          </button> */}
        </div>
      </div>
      <div>
        <img src={HeroBanner} className=" mx-auto h-96 lg:h-auto" alt="" />
      </div>
    </div>
  );
};
