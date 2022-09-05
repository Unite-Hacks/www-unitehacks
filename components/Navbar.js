import React, { useState } from "react";
import Link from 'next/link';
import { AiOutlineClose } from "react-icons/ai";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <div className="container">
        <div>

        </div>
          {/* hamMenu */}
          <svg
          className="hamIcon"
          style={{ display: `${visible ? "" : "none"}` }}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setVisible(false)}
        >
          <rect y="8" width="30" height="2" rx="1" fill="#ffff" />
          <rect x="8" y="20" width="22" height="2" rx="1" fill="#ffff" />
        </svg>
        <AiOutlineClose
          style={{ display: `${visible ? "none" : ""}` }}
          className="crossIcon"
          onClick={() => setVisible(true)}
        />
        <Sidebar visible={visible} />
        <div className="linkContainer">
          <div className="linkHolder flex items-center">
            <div className="links text-white">
            <Link href="/" className="links text-white">
              Home
            </Link>
            </div>
            <div className="links text-white">
            <Link href="/" className="links text-white">
            FAQ
            </Link>
            </div>
            <a href="https://register.unitehacks.com/">
            <div className="button4 bg-white rounded-md pr-8 pl-8 pt-1 pb-1 text-[#72BA58]">
            Register
            </div>
            </a>
          </div>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
