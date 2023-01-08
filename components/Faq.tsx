import React from "react";
import FaqCard from "./FaqCard";

const faqData = [
  {
    title: "What is a hackathon?",
    ans: "A hackathon is an event where students gather to code! There'll be workshops and speakers, so don't worry if you don't know how to code. Everyone will create their own project in teams of up to 4, and will present their projects at the end. The best projects will be awarded prizes, and there'll be swag and food for everyone!",
  },
  {
    title: "Do I need prior experience to attend?",
    ans: "You do not need to have any prior experience to attend Unite! Beginner and advanced hackers are all welcome!",
  },

  {
    title: "How much does it cost to attend Unite?",
    ans: "Nothing! We’ll have meals, snacks, and beverages onsite at the hackathon, as well as swag, prizes, and fun mini-events.",
  },
  {
    title: "What can I make?",
    ans: "Anything! Apps, art, sites, and hardware projects are all perfect for a hackathon.",
  },
  {
    title: "What do I need?",
    ans: "Your laptop, chargers, anything for your hack (hardware?), toiletries, sleeping bags, and an open mind.",
  },
  {
    title: "I have another question!",
    ans: "Send us an email at",
    mail: "team@unitehacks.com",
  },
];

const Faq = () => {
  return (
    <div className="mt-10 px-20">
      <div className="stroketext text-[70px] font-thin">FAQ .</div>
      {faqData.map(({ title, ans, mail }, i) => (
        <FaqCard title={title} ans={ans} mail={mail} key={i} />
      ))}
    </div>
  );
};

export default Faq;
