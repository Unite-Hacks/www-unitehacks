import React from "react";

const Sponsors = () => {
  return (
    <div className="bg-[#A7F48B] py-4">
      <div className="text-[#2A4720] text-center">
        <div className="font-extrabold text-4xl">
          SPONSORS
        </div>
        <p>Thank you, this even would not be possible without you</p>
        <div className="w-fit mx-auto space-x-4 mt-4 flex">
          <button className="bg-white leading-4 px-4 text-[#A7F48B] rounded-3xl">
            Sponsor <br />
            Prospectus
          </button>
          <button className="bg-white px-2 text-[#A7F48B] rounded-3xl">
            Make a donation
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sponsors;
