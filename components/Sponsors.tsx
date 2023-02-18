import React from "react";

const Sponsors = () => {
  return (
    <div className="bg-[#A7F48B] py-10">
      <div className="text-[#2A4720] text-center">
        <div className="font-extrabold text-4xl">
          SPONSORS
        </div>
        <p>Interested In Sponsoring?</p>
        <div className="w-fit mx-auto space-x-4 mt-4 flex">
          <button className="bg-white leading-4 px-4 text-[#A7F48B] rounded-[4px] py-2">
            Sponsor 
            Prospectus
          </button>
          <a href="https://bank.hackclub.com/donations/start/unite-hacks">
          <button className="bg-white px-2 text-[#A7F48B] rounded-[4px] py-1">
            Make a donation
          </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sponsors;
