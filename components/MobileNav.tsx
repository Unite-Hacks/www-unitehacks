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
          <a>About</a>
        </div>
        <div className="mt-5">
          <a>FAQ</a>
        </div>
        <div className="mt-5">
          <a>Register</a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
