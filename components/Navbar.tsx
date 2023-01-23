import React, { useState } from "react";
import MobileNav from "./MobileNav";
import Image from "next/image";
import burger from "../assets/burger.svg";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <div className="flex justify-between items-center nav-color h-[80px]">
        {/* hamMenu */}
        <Image
          src={burger}
          alt="menu"
          style={{ display: `${visible ? "" : "none"}` }}
          onClick={() => setVisible(false)}
          className="hamIcon"
        />

        <Image
          src={burger}
          alt="menu"
          style={{ display: `${visible ? "none" : ""}` }}
          className="hamIcon"
          onClick={() => setVisible(true)}
        />
        <div className="w-[95%] flex justify-between">
          <div className="font-bold text-white text-[32px] sm:px-20 px-5">
            Unite Hacks
          </div>
          <div className="flex items-center gap-4 linkContainer">
            <a>
              <div className="text-white italic">About</div>
            </a>
            <a>
              <div className="text-white italic">FAQ</div>
            </a>
            <a>
              <div className="bg-white rounded-[3px]">
                <button className="regi italic pl-5 pr-5 py-1">Register</button>
              </div>
            </a>
          </div>
        </div>
      </div>
      <MobileNav visible={visible} />
    </>
  );
};

export default Navbar;
