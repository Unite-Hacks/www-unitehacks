//import bg from '../public/assets/bg.svg'

const Mystyle = {
  backgroundSize:"150% 150%",
  backgroundPosition:"center center",
  objectFit:"contain",
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
              The Venue
            </h2>
            <p className="text-h-p text-white">
              Somewhere in San Francisco, California, or around the Bay Area! Will
              be finalized soon.
            </p>
          </div>
        </div>

        <div className=" sm:flex relative hidden border-white border-[5px] justify-center  mt-5" style={Mystyle}>


        </div>
        <div className=" flex justify-center order-2 sm:-order-none p-3  rounded-md bg-white mt-5">
          <div className="w-c border-2 border-white">
            <h2 className="text-sh-xl font-extrabold italic g-heading">
              Date & Time
            </h2>
            <p className="text-h-p">
              Doors will open at 9:00 AM on October 22nd and close at 9:00 PM.
            </p>
          </div>
        </div>
        <div className=" text-white flex text-3xl order-1 sm:-order-none justify-between mt-5">
          <div className="flex flex-col w-[49%]  border-[5px]  border-white p-4 justify-center items-center rounded-md">
            <span className="font-bold italic ">OCTOBER</span>
            <span className=" font-extrabold text-7xl text-outline-bold text-transparent">
              22
            </span>
            <span className="font-bold text-3xl text-h ">@9:00 AM</span>
          </div>
          <div className="flex flex-col w-[49%] border-[5px] border-white justify-center p-3 items-center rounded-md">
            <span className="font-bold italic ">OCTOBER</span>
            <span className="font-extrabold text-outline-bold text-7xl text-transparent">
              22
            </span>
            <span className="font-bold  text-3xl text-h">@9:00 PM</span>
          </div>
        </div>
          <div className="flex justify-center p-3 order-5 sm:-order-none rounded-md border-[5px]  col-span-1 border-white mt-5">
            <div className="w-c ">
              <h2 className="text-sh-xl font-extrabold italic text-white">
                Eligibility
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
                COVID-19
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
