import venue from "../public/assets/venue.png";

const DateTime = () => {
  return (
    <div className="w-c mx-auto grid-layout">
      <div className="w-c  dates mx-auto text-white flex justify-between mt-5">
        <div className="flex flex-col border-[5px] border-white p-4 justify-center items-center rounded-md">
          <span className="font-bold italic text-h">OCTOBER</span>
          <span className="text-h-xxxl  font-extrabold text-outline-bold text-transparent">
            21
          </span>
          <span className="font-bold italic text-h">@ 6:00 PM</span>
        </div>
        <div className="flex flex-col border-[5px] border-white justify-center p-3 items-center rounded-md">
          <span className="font-bold italic text-h">OCTOBER</span>
          <span className="text-h-xxxl font-extrabold text-outline-bold text-transparent">
            23
          </span>
          <span className="font-bold italic text-3xl text-h">@ 12:00 PM</span>
        </div>
      </div>
      <div className="w-c  time mx-auto flex justify-center rounded-md bg-white mt-5">
        <div className="w-c  border-2 border-white">
          <h2 className="text-sh-xl font-extrabold italic g-heading">
            date & time
          </h2>
          <p className="text-h-p">
            Doors will open at 6:00 PM on October 21st and close at 12:00 PM on
            October 23rd.
          </p>
        </div>
      </div>
      <div className="w-c  venue mx-auto flex justify-center rounded-md border-[5px] border-white mt-5">
        <div className="w-c ">
          <h2 className="text-sh-xl font-extrabold italic text-white">
            the venue
          </h2>
          <p className="text-h-p text-white">
            Somewhere in San Francisco, California, or around the Bay Area! Will
            be finalized soon.
          </p>
        </div>
      </div>
      <div className="w-c  guidelines mx-auto flex justify-center rounded-md bg-white mt-5">
        <div className="w-c  border-2 border-white">
          <h2 className="text-sh-xl font-extrabold italic g-heading">
            covid-19
          </h2>
          <p className="text-h-p">
            COVID-19 vaccination and proof of a negative test 24 hours prior is
            required.
          </p>
        </div>
      </div>
      <div className="w-c  eligibility mx-auto flex justify-center rounded-md border-[5px] border-white mt-5">
        <div className="w-c">
          <h2 className="text-sh-xl font-extrabold italic text-white">
            eligibility
          </h2>
          <p className="text-h-p text-white">
            All high school & upper middle school students are welcome to join
            us at Unite!
          </p>
        </div>
      </div>
      <div className="hidden md:block  venue-img">
        <img src={venue.src} className="w-[100%] h-[100%] object-fill" />
      </div>
    </div>
  );
};

export default DateTime;
