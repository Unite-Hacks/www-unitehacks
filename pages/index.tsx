import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import hero from "../assets/hero.svg";
import Timer from "../components/Timer";
import { useState } from "react";
import logo from "../assets/logo.svg";
import stamp from "../assets/stamp.svg";
import Community from "../components/Community";
import Schedule from "../components/Schedule";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import PrevHack from "../components/PrevHack";

const Home: NextPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Head>
        <title>Hackers Unite!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="pb-8">
          {isHovered ? (
            <div className="sm:bg-white sm:w-[1262px] ml-auto mr-auto mt-20 cursor-pointer h-[772.88px] rounded-[20px]"
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="text-center text-[32px] pt-5">POSTCARD</div>
              <div className="flex justify-end w-[95%]">
                <Image src={stamp} alt="stamp" />
              </div>

              <div className="mt-[60px] mx-auto  flex items-center justify-between w-[95%]">
                <div>
                  <Image src={logo} alt="logo" />
                </div>
                <div className="text-center h-[250px] border-2 bordersplit rounded-sm"></div>
                <div className="text-left mr-[150px]">
                  <div className="border-b-2 border-black w-40 postcard">WHERE:</div>

                  <div className="border-b-2 border-black w-40 mt-5 postcard">
                    Bay Area
                  </div>

                  <div className="border-b-2 border-black w-40 mt-5 postcard">WHEN:</div>

                  <div className="border-b-2 border-black w-40 mt-5 postcard">April</div>
                </div>
              </div>
              <div></div>
            </div>
          ) : (
            <div className="relative">
              <Image
                src={hero}
                alt="hero"
                className="ml-auto mr-auto mt-20 cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
              <div className="absolute bottom-10 right-0 p-2 text-white w-[40%]">
                <p className="font-bold sm:text-[42px] paytone">WELCOME TO</p>
                <p className="font-bold sm:text-[52px] unite paytone">UNITE HACKS</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Timer />
      <Community />
      <Schedule />
      <Sponsors />
      <Team />
      <PrevHack />
      <Footer />
    </>
  );
};

export default Home;
