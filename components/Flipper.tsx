import React, { useEffect, useState } from "react";
import Image from "next/image";

import hero from "../assets/hero.jpeg";
import logo from "../assets/logo.svg";
import stamp from "../assets/stamp.svg";

const Flipper = () => {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseIn = () => {
    if (window.innerWidth < 640) {
      return
    }

    setIsHovered(true);
  }

  const handleMouseOut = () => {
    setIsHovered(false);
  }

  return (
    <div>
      <div className="w-[95%] mx-auto mt-4 ">
        {isHovered ? (
          <div className="max-w-[1072px] h-[60vh] max-h-[574px] bg-white ml-auto mr-auto cursor-pointer  rounded-[20px] mb-4"
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="text-center text-[32px] pt-5">POSTCARD</div>
            <div className="flex justify-end w-[95%]">
              <Image src={stamp} alt="stamp" />
            </div>

            <div className="mx-auto  flex items-center justify-between w-[95%]">
              <div>
                <Image src={logo} alt="logo" />
              </div>
              <div className="text-center h-[250px] border-2 bordersplit rounded-sm"></div>
              <div className="text-left mr-[150px] gloria">
                <div className="border-b-2 border-black w-40 ">WHERE:</div>

                <div className="border-b-2 border-black w-40 mt-5 ">
                  Bay Area
                </div>

                <div className="border-b-2 border-black w-40 mt-5 ">WHEN:</div>

                <div className="border-b-2 border-black w-40 mt-5 ">April</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative mb-4">
            <img
              src={hero.src}
              alt="hero"
              className="ml-auto mr-auto cursor-pointer object-cover h-[30vh] md:h-[60vh] rounded-lg max-w-[1072px] max-h-[574px]"
              onMouseEnter={() => handleMouseIn()}
              onMouseLeave={() => handleMouseOut()}
            />
            <div className="absolute bottom-0 right-0 translate-y-[-55%] p-2 text-white w-[55%]">
              <p className="font-bold text-xl sm:text-[45px] paytone">WELCOME TO</p>
              <p className="font-bold text-[1.3rem] sm:text-[55px] unite paytone">UNITE HACKS</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Flipper;
