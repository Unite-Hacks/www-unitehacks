import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import hero from "../assets/hero.svg";
import Timer from "../components/Timer";
import { useState } from "react";
import logo from "../assets/logo.svg";
import stamp from "../assets/stamp.svg";

const Home: NextPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Head>
        <title>Hackers Unite!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          {isHovered ? (
            <div className="sm:bg-white sm:w-[1262px] ml-auto mr-auto mt-20 cursor-pointer h-[772.88px] rounded-[20px]">
              <div className="text-center text-[32px] pt-5">POSTCARD</div>
              <div className="flex justify-end w-[95%]">
                <Image src={stamp} alt="stamp" />
              </div>
              <div className="mt-[60px] flex items-center justify-between w-[95%]">
                <div>
                  <Image src={logo} alt="logo" />
                </div>
                <div className="text-center h-[180px] border border-blue-700"></div>
                <div className="text-left mr-[150px]">
                  <div className="border-b-2 border-black w-40">WHERE:</div>

                  <div className="border-b-2 border-black w-40 mt-5">
                    Bay Area
                  </div>

                  <div className="border-b-2 border-black w-40 mt-5">WHEN:</div>

                  <div className="border-b-2 border-black w-40 mt-5">April</div>
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
                <p className="font-bold sm:text-[42px]">WELCOME TO</p>
                <p className="font-bold sm:text-[52px] unite">UNITE HACKS</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Timer />
    </>
  );
};

export default Home;
