import Image from "next/image";
import React from "react";
import sparkle from "../assets/sparkle.svg";

const Community = () => {
  return (
    <div className="mt-20 sm:flex justify-between items-center w-[95%]">
      <div className="sm:px-10 font-bold text-white sm:text-[52px] text-center text-[24px]">
        Join Our <br></br>
        Community
      </div>
      <div className="sm:mt-0 mt-5">
        <Image src={sparkle} alt="sparkle" className="ml-auto mr-auto" />
      </div>

      <div className="text-white  px-10 sm:mt-0 mt-5">
        <ul className="list-disc">
          <li>Design and build something cool</li>
          <li className="mt-2">Meet people & make connections</li>
          <li className="mt-2">Learn new skills</li>
          <li className="mt-2">Win prizes & get free food</li>
        </ul>
      </div>
    </div>
  );
};

export default Community;
