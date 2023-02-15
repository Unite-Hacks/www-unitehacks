import Image from "next/image";
import React from "react";
import sparkle from "../assets/sparkle.svg";

const Community = () => {
  return (
    <div className="bg-[#72BA58] pt-20 sm:flex justify-between items-center pb-20" id="about">
      <div className="lg:flex-row lg:justify-around w-full m-auto flex flex-col justify-between items-center">
        <div
          className="sm:px-10 lg:hidden font-bold text-white sm:text-[52px] text-4xl text-center text-[24px] paytone"
          style={{ fontSize: "min(8vw, 48px)" }}
        >
          Join Our Community
        </div>
        <div
          className="hidden lg:block sm:px-10 font-bold text-white leading-tight sm:text-[52px] text-4xl text-center text-[24px] paytone"
          style={{ fontSize: "min(8vw, 48px)" }}
        >
          Join Our <br /> Community
        </div>

        <div className="sm:mt-0 mt-5">
          <Image src={sparkle} height={70} alt="sparkle" className="ml-auto mr-auto" />
        </div>

        <div className="text-white flex justify-center text-[1.2rem] font-medium  px-10 sm:mt-0 mt-5"
          style={{ fontSize: "min(5.33vw, 32px)" }}
        >
          <ul className="list-disc">
            <li>Design and build something cool</li>
            <li className="mt-2">Meet people & make connections</li>
            <li className="mt-2">Learn new skills</li>
            <li className="mt-2">Win prizes & get free food</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Community;
