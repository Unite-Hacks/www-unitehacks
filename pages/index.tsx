import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Dates from "../components/Dates";
import Attend from "../components/Attend";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="heroimage">
        <div className="pt-10 px-[160px] text-[40px] font-bold flex">WELCOME TO</div>
        <div className="flex items-center text-center justify-center">
          <div className="text-center text-[150px] leading-[150px] stroketext font-bold">
            UNITE <br></br>HACKS
          </div>
          <div className="text-[250px] ml-5 stroketext">2.0</div>
        </div>
        <div className="flex justify-between w-[85%] pt-10">
          <div></div>
          <div className="text-[40px] font-bold">BETTER THAN BEFORE.</div>
        </div>
      </div>
      <Dates />
      <Attend />
    </>
  );
};

export default Home;
