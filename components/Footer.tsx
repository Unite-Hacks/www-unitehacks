import React from "react";
import Image from "next/image";
import twitter from "../assets/icons/twitter.svg";
import insta from "../assets/icons/instagram.svg";
import linkd from "../assets/icons/linkedin.svg";
const Footer = () => {
  return (
    <div className="flex items-center bg-[#D9D9D9] ml-10 mr-10 justify-between py-5 pb-5 mb-5 rounded-md">
      <div className="px-10 text-[32px]">Interested in Sponsoring?</div>
      <div className="flex items-center mr-10 gap-5">
        <div>
          <Image src={twitter} alt="twitter" />
        </div>
        <div>
          <Image src={insta} alt="insta" />
        </div>
        <div>
          <Image src={linkd} alt="linkd" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
