import React from "react";
import Attend from "../components/Attend";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Sponsor from "../components/Sponsor";
import Team from "../components/Team";
import DateTime from "../components/Time";
import locationicon from "../public/assets/locationicon.svg";
import earth from "../public/assets/earth.jpg";

export default function Home() {
  return (
    <>
      <div className="md:pt-8 md:flex-row bg-white w-[95%] mx-auto rounded-md flex flex-col justify-center items-center mt-10">
        <div className="mt-4 mb-12">
          <h2 className="font-extrabold text-2xl text-h">
            JOIN US & UNITE THE <br />
            HACKER COMMUNITY AT
          </h2>
          <h1 className="font-extrabold text-h-xl  g-heading">UNITE HACKS</h1>
          <div className="space-y-4">
            <div className="g-bg rounded-md p-1">
              <div className="flex space-x-4 py-1 justify-center h-[90%] bg-white rounded-md border-black ">
                <img src={locationicon.src} alt="location" />
                <span className="font-bold italic text-sh">
                  SAN FRANCISCO, CA
                </span>
              </div>
            </div>
            <button className="g-bg-reverse p-1 py-1 w-full font-bold  text-transparent italic text-sh rounded-md">
              <span className="text-outline">REGISTER FOR</span>{" "}
              <span className="text-white">UNITE!</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[40%]">
          <div className="g-bg w-[70%] rounded-md p-1 max-w-[213px]">
            <div className="hidden bg-white md:flex flex-col p-4 justify-center items-center rounded-md">
              <span className="font-bold italic text-h">OCTOBER</span>
              <span className="text-h-xxxl text-black  font-extrabold text-outline-bold text-transparent">
                21
              </span>
            </div>
          </div>
          <img className="w-[80%] max-w-[265px]" src={earth.src} />
        </div>
      </div>
      <DateTime />
      <Attend />
      <Faq />
      <Sponsor />
      <Team />
      <Footer />
    </>
  );
}

// h1 {
//   background: -webkit-linear-gradient(#eee, #333);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
