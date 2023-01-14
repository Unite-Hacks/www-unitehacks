import React from "react";
import DateTime from "../components/Time";
import Attend from "../components/Attend";
import Header from "../components/Header";
import Faq from "../components/Faq";
import Sponsor from "../components/Sponsor";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Team from "../components/Team"; 
import Head from "next/head";
export default function Home() {
  return (
    <>
    <Head>
      <title>welcome home!</title>
    </Head>
    <Navbar />
    <Header/>
      <DateTime />
    <Attend/>
<Faq/>
<Sponsor/>
 <Team /> 
<Footer />
    </>
  );
}

