import React from "react";
import DateTime from "../components/Time";
import Attend from "../components/Attend";
import Header from "../components/Header";
import Faq from "../components/Faq";
import Sponsor from "../components/Sponsor";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>
    <Navbar />
    <Header/>
      <DateTime />
    <Attend/>
<Faq/>
<Sponsor/>
<Footer />
    </>
  );
}

