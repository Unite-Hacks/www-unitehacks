import React from "react";

const MobileNav: React.FC<{ visible: boolean }> = ({ visible }) => {
  const displayValue = visible ? 100 : 0;
  return (
    <div
      style={{
        display: `${displayValue == 100 ? "none" : ""}`,
        transform: `translateX(${displayValue}vw)`,
      }}
    >
      <div className="px-5 text-white text-[20px] font-semibold mt-5">
        <div>
          <a href="#about">About</a>
        </div>
        <div className="mt-5">
          <a href="#faq">FAQ</a>
        </div>
        <div className="mt-5">
          <a href="https://register.unitehacks.com/">Register</a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
