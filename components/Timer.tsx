import React, { useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState();
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [hr, setHr] = useState(0);

  const countDownDate = new Date("03/31/2023 9:00:00 PST").getTime();

  setInterval(() => {
    var today = new Date().getTime();

    var distance = countDownDate - today;
    setDay(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHour(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMin(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSec(Math.floor((distance % (1000 * 60)) / 1000));
  }, 1000);
  return (
    <div>
      <div className="flex  text-center justify-center bg-white sm:h-[22vh] sm:mt-5 h-20 pt-5 mt-2">
        <div>
          <p className="sm:text-[52px] font-bold time">{day}:</p>
          <p className="font-bold">Days</p>
        </div>
        <div>
          <p className="sm:text-[52px] font-bold time">{hour}:</p>
          <p className="font-bold">Hours</p>
        </div>
        <div>
          <p className="sm:text-[52px] font-bold time">{min}:</p>
          <p className="font-bold">Mins</p>
        </div>
        <div>
          <p className="sm:text-[52px] font-bold time">{sec}</p>
          <p className="font-bold">Secs</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
