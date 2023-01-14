import React, { useState } from "react";
import Arrow from "../public/assets/arrow.svg";

const FaqCard = (props) => {
  const { title, ans } = props;
  console.log("PROPS here", props);
  const [isOpen, setIsOpen] = useState(false);
  const display = isOpen ? "block" : "hidden";
  const mail = props.mail ? (
    <a href={`mailto:${props.mail}`}>{props.mail}</a>
  ) : (
    ""
  );

  return (
    <div className="w-c mx-auto justify-center rounded-md bg-white mt-5  pb-2 pt-2 ">
      <div className="border border-white flex items-center">
        <div className="faqbutton  mx-2">
          <img src={Arrow.src} onClick={() => setIsOpen(!isOpen)} />
        </div>
        <div className="faq w-c mx-auto">{title}</div>
      </div>
      <div className="mx-5">
        <p className={`${display}`}>
          {ans} {mail}
        </p>
      </div>
    </div>
  );
};

export default FaqCard;
