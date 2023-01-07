import React from "react";
import hugelogo from "../assets/hugelogo.svg";
import Image from "next/image";

const Dates = () => {
  return (
    <div className="mt-5">
      <div className="text-center text-white text-[70px] stroketext font-bold">
        UPCOMING HACKATHON
      </div>
      <div className="flex items-center justify-between w-[90%]">
        <div className="px-[200px]">
          <div className="text-white border-[2px] mt-5 py-2 pl-5 pr-[200px] rounded-md font-bold text-[26px]">
            SAN FRANCISCO, CA
          </div>
          <div className="border-[2px] text-white mt-5 py-2 pl-5 font-bold text-[26px]">
            9am - 9pm
          </div>
          <div className="border-[2px] text-white mt-5 py-2 pl-5 font-bold text-[26px]">
            April 1st
          </div>
        </div>
        <div>
          <Image src={hugelogo} alt="hugelogo" />
        </div>
      </div>
      <div className="text-center">
        <button className="bg-[#5BB9EF] rounded-[8px] text-[32px] pl-2 pr-2 font-bold">REGISTER</button>
      </div>
    </div>
  );
};

export default Dates;
