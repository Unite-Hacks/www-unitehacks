import React, { useState } from "react";

const PrevHack = () => {
  const [translateValue, setTranslateValue] = useState(0);

  const increaseTranslateValue = () => {
    console.log("Ayo what", translateValue)
    if (translateValue == 0) {
      setTranslateValue(-420);
      return
    }
    setTranslateValue(translateValue + 105);
  }

  const decreaseTranslateValue = () => {
    if (translateValue == -420) {
      setTranslateValue(0);
      return
    }
    setTranslateValue(translateValue - 105)
  }

  //max 420%

  return (
    <div className="mt-12 flex justify-center max-w-[732px] mx-auto">
      <div className="relative z-40 w-[75%] max-w-[370px] lg:max-w-[550px]">
        <div className="z-0  rotate-[10deg] absolute w-full h-full bg-[#D7D7D7]"></div>
        <div className="bg-[#D9D2D2] absolute rotate-[-8deg] z-20 p-2  w-full h-full">
          <div className="w-full h-full bg-black">
          </div>
        </div>
        <div className="px-2 pb-4 space-x-2 relative flex justify-between z-50 w-full mx-auto bg-white">
          <button onClick={() => increaseTranslateValue()}>
            <span className="font-extrabold text-3xl text-[#d9d9d9]">
              &#x3c;
            </span>
          </button>
          <div className="relative z-50 w-[90%] bg-white mx-auto py-4" >
            <div className="flex overflow-hidden">
              <div className="flex space-x-4"
                style={{ transform: `translateX(calc(${translateValue}%))` }}
              >
                <img className="" alt="hackathon images" src={`/photos/prevHack1.jpg`} />
                <img className="" alt="hackathon images" src={`/photos/prevHack2.jpg`} />
                <img className="" alt="hackathon images" src={`/photos/prevHack3.jpg`} />
                <img className="" alt="hackathon images" src={`/photos/prevHack4.jpg`} />
                <img className="" alt="hackathon images" src={`/photos/prevHack5.jpg`} />
              </div>
            </div>
            <div className="text-2xl text-center pt-4 gloria">
              Our first hackathon! :)
            </div>
          </div>
          <button className="" onClick={() => decreaseTranslateValue()}>
            <span className="font-extrabold text-3xl text-[#d9d9d9]">
              &#x3e;
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PrevHack;
