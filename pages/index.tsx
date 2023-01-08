import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Dates from "../components/Dates";
import Attend from "../components/Attend";
import Faq from "../components/Faq";
import Interested from "../components/Interested";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="heroimage">
        <div className="pt-10 px-[160px] text-[40px] font-black flex font-comfortaa">
          WELCOME TO
        </div>
        <div className="flex items-center text-center justify-center">
          <div className="text-center text-[150px] leading-[150px] stroketext font-comfortaa">
            UNITE <br></br>HACKS
          </div>
          <div className="text-[250px] ml-5 stroketext font-comfortaa">2.0</div>
        </div>
        <div className="flex justify-between w-[85%] pt-10">
          <div></div>
          <div className="text-[40px] font-black font-comfortaa">
            BETTER THAN BEFORE.
          </div>
        </div>
      </div>
      <Dates />
      <Attend />
      <Faq />
      <Interested />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
