import React from "react";

const Schedule = () => {
  const faqs: any = [
    {
      que: "THE LOCATION",
      ans: "Circuit Launch: 8000 Edgewater Dr, Oakland, CA 94621",
      link: "https://goo.gl/maps/kWM68jmNXJBnX1Zd6",
    },
    {
      que: "WHAT IS A HACKATHON?",
      ans: "An event where students gather to code projects!",
      link: null,
    },
    {
      que: "EXPERIENCE?",
      ans: "None needed! As long as you are 13-18 years old, you are welcome",
    },
    {
      que: "COST?",
      ans: "Absolutely free! We’ll have meals, snacks, and beverages, swags, prizes, and fun mini-events.",
      link: null,
    },
    {
      que: "COVID PRECAUTIONS",
      ans: "Please show proof of vaccination",
      link: null,
    },
    {
      que: "OTHER QUESTIONS?",
      ans: "Email us at team@unitehacks.com",
      link: null,
    },
  ]

  return (
    <>
      <div className="bg-[#7ACB5D] " id="faq">
        <div className="lg:w-[90%] mx-auto flex flex-col lg:flex-row-reverse space-x-8 pt-12 space-y-4 pb-8">
          <div className="w-[85%] flex lg:flex-col grow-0 lg:w-[40%] justify-center bg-[#D9D9D9] items-center mx-auto">
            <h1 className="text-white font-extrabold mx-[1.5rem] my-[3rem] "
              style={{ fontSize: "min(12vw, 69px)" }}
            >Schedule</h1>
            <div className="hidden lg:block">
              upcoming
            </div>
          </div>
          <div className="w-[90%] mx-auto">
            {faqs.map((el: any, i: any) => (
              <div key={i} className="py-2">
                <h4 className="font-extrabold text-white text-2xl paytone py-1"
                  style={{ fontSize: "min(6vw, 38.5px)" }}
                >{el.que}</h4>
                {
                    el.link ? 
                    <a href={el.link} target="_blank" className="underline text-white" style={{ fontSize: "min(5vw, 32.5px)" }}>{el.ans}</a> :
                    <p className="text-white" style={{ fontSize: "min(5vw, 32.5px)" }}>{el.ans}</p>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
