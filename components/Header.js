import React from "react";
import locationicon from "../public/assets/locationicon.svg";
import date from '../public/assets/date.js'
import globe from '../public/assets/earth.jpg'
export default function Hero() {
    return (
        
      <div className="bg-white w-[95%] mx-auto rounded-md flex flex-col justify-center items-center mt-3">
      <div className="flex flex-row py-4">
        <div className="mt-4 mb-12">
          <h2 className="font-extrabold text-2xl text-h">
            JOIN US & UNITE THE <br />
            HACKER COMMUNITY AT
          </h2>
          <h1 className="font-extrabold text-h-xl  g-heading">
            UNITE HACKS
          </h1>
          <div className="space-y-4">
            <div className="g-bg rounded-md p-1">
              <div className="flex space-x-4 py-1 justify-center h-[90%] bg-white g-border rounded-md border-black ">
                <img src={locationicon.src} />
                <span className="font-bold italic text-sh">
                  OAKLAND, CA
                </span>
                </div>
                </div>
                <button className="g-bg-reverse p-1 py-1 w-full font-bold  text-transparent italic text-sh rounded-md">
                 <a href="https://register.unitehacks.com/">
                  <span className="text-outline">REGISTER FOR</span>{" "}
                  <span className="text-white">UNITE!</span>
                  </a>
                </button>
              </div>
            </div>
          <div  className="w-[50%] justify-center items-center sm:flex hidden s flex-col">
            <div className=" ">{date}</div>
          <img className="w-[70%] " src={globe.src}/>
          </div>
      </div>
      </div>
    );
}
