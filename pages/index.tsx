import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import PastEvents from "../components/PastEvents";

const Home: NextPage = () => {
  return (
    <div className="bghero">
      <div className="flex min-h-screen flex-col items-center justify-center  max-w-[1024px] md:px-20 m-auto ">
        <Head>
          <title>Unite Hacks 2.0</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="items-center justify-center m-auto w-[100%] md:px-20 px-5 md:mt-[200px] mt-[150px]">
          <div className="text-white text-[32px] font-extrabold">
            Unite Hacks 2.0
          </div>
          <div className="text-white text-[24px]">Coming This Spring 2023</div>
          <div className="text-white items-center mt-5">
            Interested in Sponsoring?{" "}
            <a
              href="https://bank.hackclub.com/donations/start/unite-hacks"
              className="underline"
            >
              Donate Here
            </a>
          </div>
          <PastEvents />
        </div>

        <footer className="flex h-[60px] w-full items-center justify-center  bg-white bottom-0 absolute rounded-t-md footer">
          <a className="flex items-center justify-center gap-2 text-white font-mono font-medium">
            With thanks from{" "}
            <div>Ivoine, Vidit, Adithya, Emily, Sahana, Kaiwen</div>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Home;
