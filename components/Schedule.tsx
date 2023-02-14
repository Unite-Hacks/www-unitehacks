import React from "react";

const Schedule = () => {
  const faqs: any = [
    {
      que: "THE LOCATION",
      ans: "San Francisco Bay Area"
    },
    {
      que: "WHAT IS A HACKATHON?",
      ans: "An event where students gather to code projects!"
    },
    {
      que: "EXPERIENCE?",
      ans: "None needed! As long as you are 14-19 years old, you are welcome"
    },
    {
      que: "COST?",
      ans: "Absolutely free! We’ll have meals, snacks, and beverages, swags, prizes, and fun mini-events."
    },
    {
      que: "COVID PRECAUTIONS",
      ans: "Please show proof of vaccination"
    },
    {
      que: "OTHER QUESTIONS?",
      ans: "Email us at team@unitehacks.com"
    },
  ]

  return (
    <>
      <div className="bg-[#7ACB5D] pt-12 pb-8 space-y-4  " id="faq">
        <div className="w-[85%] flex justify-center bg-[#D9D9D9] items-center mx-auto">
          <h1 className="text-6xl text-white font-extrabold mx-[1.5rem] my-[3rem] ">Schedule</h1>
        </div>
        <div className="w-[90%] mx-auto">
          {faqs.map((el: any, i: any) => (
            <div key={i}>
              <h4 className="font-extrabold text-white text-2xl">{el.que}</h4>
              <p className="text-white">{el.ans}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Schedule;
