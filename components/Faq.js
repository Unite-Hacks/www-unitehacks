import React from "react";
import FaqCard from "./FaqCard";

const faqData = [
  {
    title: 'What is a "hackathon" supposed to be?',
    ans: "You do not need to have any prior experience to attend Unite! Beginner and advanced hackers are all welcome!",
  },
  {
    title: "Do I need prior experience to attend?",
    ans: "You do not need to have any prior experience to attend Unite! Beginner and advanced hackers are all welcome!",
  },

  {
    title: "How much does it cost to attend Unite?",
    ans: "You do not need to have any prior experience to attend Unite! Beginner and advanced hackers are all welcome!",
  },
  {
    title: "What might weather be like?",
    ans: "You do not need to have any prior experience to attend Unite! Beginner and advanced hackers are all welcome!",
  },
  {
    title: 'What is a "hackathon" supposed to be?',
    ans: "You do not need to have any prior experience to attend Unite! Beginner and advanced hackers are all welcome!",
  },
];

const Faq = () => {
  return (
    <>
      <div className="w-c mx-auto mt-5" id="faq">
        <div className="text-faq font-extrabold text-white">FAQ</div>
        {faqData.map(({ title, ans }, i) => (
          <FaqCard title={title} ans={ans} key={i} />
        ))}
      </div>
    </>
  );
};

export default Faq;
