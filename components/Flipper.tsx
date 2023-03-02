import React, { useEffect, useState } from "react";
import Image from "next/image";

import hero from "../assets/hero.svg";
import logo from "../assets/logo.svg";
import stamp from "../assets/stamp.svg";

const Flipper = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseIn = () => {
    console.log('What the hell')
    if (window.innerWidth < 640) {
      console.log("Small lol")
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
          <div className="sm:bg-white sm:w-[1262px] max-w-[1024px] ml-auto mr-auto mt-4 cursor-pointer max-h-[773.88px] rounded-[20px]"
          onMouseLeave={() => setIsHovered(false)}
          >
            <div className="text-center text-[32px] pt-5">POSTCARD</div>
            <div className="flex justify-end w-[95%]">
              <Image src={stamp} alt="stamp" />
            </div>

            <div className="mt-[60px] mx-auto  flex items-center justify-between w-[95%]">
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
          <div className="relative ">
            <Image
              src={hero}
              alt="hero"
              className="ml-auto mr-auto cursor-pointer"
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
