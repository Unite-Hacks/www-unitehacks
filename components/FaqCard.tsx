import React, { useState } from "react";
import Arrow from "../assets/arrow.svg";

const FaqCard = (props: any) => {
  const { title, ans } = props;
  console.log("PROPS here", props);
  const [isOpen, setIsOpen] = useState(false);
  const display = isOpen ? "block" : "hidden";
  const mail = props.mail ? (
    <a href={`mailto:${props.mail}`} className="text-black underline">
      {props.mail}
    </a>
  ) : (
    ""
  );

  return (
    <div className="w-c mx-auto justify-center rounded-md bg-[#5BB9EF] mt-5  pb-2 pt-2 ">
      <div className="flex items-center">
        <div className="faqbutton  mx-2">
          <img src={Arrow.src} onClick={() => setIsOpen(!isOpen)} />
        </div>
        <div className="text-white font-bold">{title}</div>
      </div>
      <div className="mx-5 text-white">
        <p className={`${display}`}>
          {ans} {mail}
        </p>
      </div>
    </div>
  );
};

export default FaqCard;
