import React from "react";
import Image from "next/image";


const Sponsors = () => {
  return (
    <div className="bg-[#A7F48B] py-10">
      <div className="text-[#2A4720] text-center">
        <div className="font-extrabold text-4xl py-px">SPONSORS</div>
          <p>Interested In Sponsoring?</p>
          <div className="justify-center flex row gap-4 space-x-8 space-y-2"> 
            <div className="translate-y-2 hover:scale-110">
              <Image
                src="/sponsors/dominos.png"
                width={120}
                height={120}
                alt="Dominos"
                />
              </div>
              <div className="scale-90 hover:scale-100">
              <Image
                src="/sponsors/interview-cake.png"
                width={120}
                height={120}
                alt="Interview Cake"
                />
              </div>
              <div className="transform translate-y-8 hover:scale-110">
              <Image
                src="/sponsors/xyz.png"
                width={110}
                height={110}
                alt="Interview Cake"
                />
              </div>        
          </div>
        <div className="w-fit mx-auto space-x-4 mt-4 flex">
          <a href="/unite_hacks.pdf">
            <button className="bg-white leading-4 px-4 text-[#2A4720] rounded-[4px] py-2">
              Sponsor Prospectus
            </button>
          </a>
          <a href="https://bank.hackclub.com/donations/start/unite-hacks">
            <button className="bg-white px-2 text-[#2A4720] rounded-[4px] py-1">
              Make a Donation
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
