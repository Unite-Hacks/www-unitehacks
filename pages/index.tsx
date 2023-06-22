import type { NextPage } from "next";
import Head from "next/head";
import Timer from "../components/Timer";
import Community from "../components/Community";
import Schedule from "../components/Schedule";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import PrevHack from "../components/PrevHack";
import Flipper from "../components/Flipper";
import ComingSoon from "../components/ComingSoon";
import Signup from "../components/Signup";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hackers Unite!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flipper />
      <ComingSoon />
      <Signup/>
      <Community />
      <Schedule />
      <PrevHack />
      <Sponsors />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
