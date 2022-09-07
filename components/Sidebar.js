import React from "react";
import Twitter from "../public/assets/twitter.svg";
import Insta from "../public/assets/instagram.svg";
import linkedin from "../public/assets/linkedin.svg";

const Sidebar = ({ visible }) => {
  const displayValue = visible ? 100 : 0;

  return (
    <div
      className="Container absolute"
      style={{
        display: `${displayValue == 100 ? "none" : "flex"}`,
        transform: `translateX(${displayValue}vw)`,
        // transitionProperty: "transform",
        // transitionDuration: "500ms",
        // transitionDelay: "200ms",
      }}
    >
      <div className="sidebarLinkHolder">
        <a href="#overview" className="link">
          Overview
        </a>
        <a href="#attend" className="link">
          Why Attend?
        </a>
        <a href="#faq" className="link">
          Frequently Asked Questions
        </a>

        <a href="#sponsors" className="link">
          Sponsors
        </a>

        <a href="#team" className="link">
          Meet the team
        </a>
      </div>
      <a href="https://register.unitehacks.com/">
        <div className="background-regi text-white rounded-md pt-3 pb-3 text-center cursor-pointer">
          register
        </div>
      </a>
      <div className="flex text-center justify-center items-center gap-20 mt-10 pb-5">
        <a href="https://twitter.com/UniteHacks">
          <div>
            {" "}
            <img src={Twitter.src} />
          </div>
        </a>

        <a href="https://www.instagram.com/unitehacks/">
          <div>
            <img src={Insta.src} />
          </div>
        </a>
        <a href="https://www.linkedin.com/company/unite-hacks/?viewAsMember=true">
          <div>
            <img src={linkedin.src} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
