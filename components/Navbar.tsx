import Image from "next/image";
import React from "react";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-center w-[95%] px-10 mt-2">
      <div className="text-white">Unite Hacks</div>
      <div>
        <Image src={Logo} alt="small-logo" />
      </div>
      <div className="gap-5 flex text-white">
        <div>
          <a href="">Gallery</a>
        </div>
        <div>
          <a>Register</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
