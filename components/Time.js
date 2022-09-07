const Mystyle = {
  backgroundPosition: "auto",
  objectFit: "cover",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url("https://cdn.discordapp.com/attachments/965459788601364490/1016412307447877672/image_2_2.png")`
};
const DateTime = () => {
  return (
    <>
      <div className="w-[95%] mx-auto flex flex-col sm:grid sm:grid-cols-2 grid-row-flow-1fr  sm:gap-3" id="overview">
        <div className="flex justify-center order-3 sm:-order-none rounded-md border-[5px]  col-span-1 p-3 border-white mt-5">
          <div className="w-c">
            <h2 className="text-sh-xl font-extrabold italic text-white">
              the venue
            </h2>
            <p className="text-h-p text-white">
              Somewhere in San Francisco, California, or around the Bay Area! Will
              be finalized soon.
            </p>
          </div>
        </div>

        <div className=" sm:flex hidden border-white border-[5px] justify-center rounded-md mt-5">
          <div className="max-w-full  w-full border-2 " style={Mystyle} />

        </div>
        <div className=" flex justify-center order-2 sm:-order-none p-3  rounded-md bg-white mt-5">
          <div className="w-c border-2 border-white">
            <h2 className="text-sh-xl font-extrabold italic g-heading">
              date & time
            </h2>
            <p className="text-h-p">
              Doors will open at 6:00 PM on October 21st and close at 12:00 PM on
              October 23rd.
            </p>
          </div>
        </div>
        <div className=" text-white flex text-3xl order-1 sm:-order-none justify-between mt-5">
          <div className="flex flex-col w-[49%]  border-[5px]  border-white p-4 justify-center items-center rounded-md">
            <span className="font-bold italic ">OCTOBER</span>
            <span className=" font-extraboldx text-7xl text-outline-bold text-transparent">
              21
            </span>
            <span className="font-bold italic ">@6:00 PM</span>
          </div>
          <div className="flex flex-col w-[49%] border-[5px] border-white justify-center p-3 items-center rounded-md">
            <span className="font-bold italic ">OCTOBER</span>
            <span className="font-extrabold text-outline-bold text-7xl text-transparent">
              23
            </span>
            <span className="font-bold italic text-3xl text-h">@12:00 PM</span>
          </div>
        </div>
          <div className="flex justify-center p-3 order-5 sm:-order-none rounded-md border-[5px]  col-span-1 border-white mt-5">
            <div className="w-c ">
              <h2 className="text-sh-xl font-extrabold italic text-white">
                eligibility
              </h2>
              <p className="text-h-p text-white">
                All high school & upper middle school students are welcome to join
                us at Unite!
              </p>
            </div>
          </div>
          <div className=" flex justify-center order-4 sm:-order-none p-3 rounded-md bg-white mt-5">
            <div className="w-c border-2 border-white">
              <h2 className="text-sh-xl font-extrabold italic g-heading">
                covid-19
              </h2>
              <p className="text-h-p">
                COVID-19 vaccination and proof of a negative test 24 hours prior is
                required.
              </p>
            </div>
          </div>
        </div>
      </>
      );
};

      export default DateTime;
