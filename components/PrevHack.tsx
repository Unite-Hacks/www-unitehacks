import React from "react";

const PrevHack = () => {
  return (
    <div className="mt-12 flex justify-center">
      <div className="relative z-40 w-[75%] max-w-[370px] lg:max-w-[550px]">
        <div className="z-0  rotate-[10deg] absolute w-full h-full bg-[#D7D7D7]"></div>
        <div className="bg-[#D9D2D2] absolute rotate-[-8deg] z-20 p-2  w-full h-full">
          <div className="w-full h-full bg-black">
          </div>
        </div>
        <div className="relative z-50 w-full mx-auto bg-white">
          <div className="relative z-50 w-[90%] bg-white mx-auto py-4" >
            <img className="" alt="hackathon images" src={`/photos/prevHack1.jpg`} />
            <div className="text-center pb-4">
              Our first hackathon! :)
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrevHack;
