import React, { useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState();
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [hr, setHr] = useState(0);

  const countDownDate = new Date("09/09/2023 9:00:00 PST").getTime();
  // const countDownDate = new Date("04/04/2023 3:26 PST").getTime();

  setInterval(() => {
    var today = new Date().getTime();


    var distance = countDownDate - today;
    setDay(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHour(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMin(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSec(Math.floor((distance % (1000 * 60)) / 1000));

    if (distance <= 0) {
      setDay(0);
      setHour(0);
      setMin(0);
      setSec(0);
      return
    }

  }, 1000);
  return (
    <div className="">
      {/* <div className="flex  text-center justify-center bg-white sm:h-[22vh] sm:mt-5 h-20 pt-5 mt-2  sm:gap-2 gap-2"> */}
      <div className="flex space-x-1 py-2 justify-center bg-white">
        <div>
          <div className="flex items-center gap-2">
            <p className="sm:text-[52px] text-5xl font-bold time paytone">{day < 10 ? `0${day}` : day}</p>
            <span className="sm:text-[52px] text-4xl font-bold time paytone">:</span>
          </div>
          <p className="font-bold text-xl">Days</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="sm:text-[52px] text-5xl font-bold time paytone">{hour < 10 ? `0${hour}` : hour}</p>
            <span className="sm:text-[52px] text-4xl font-bold time paytone">:</span>
          </div>
          <p className="font-bold text-xl">Hours</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="sm:text-[52px] text-5xl font-bold time paytone">{min < 10 ? `0${min}` : min}</p>
            <span className="sm:text-[52px] text-4xl font-bold time paytone">:</span>
          </div>
          <p className="font-bold text-xl">Mins</p>
        </div>
        <div>
          <p className="sm:text-[52px] text-5xl font-bold time paytone">{sec < 10 ? `0${sec}` : sec}</p>
          <p className="font-bold text-xl">Secs</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
