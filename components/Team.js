import React from 'react';
const Mystyle = {
  backgroundSize:"auto",
  backgroundPosition:"center center",
  objectFit:"contain",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url("https://addicted2success.com/wp-content/uploads/2017/11/10-Things-We-Can-Learn-From-the-Incredible-Steve-Jobs.jpg")`
};

const Team = () => {
  return (
    <>
      <div className='mt-5' id="team">
        <div className="team text-center font-extrabold text-white">
          MEET THE TEAM
        </div>
      </div>
      <div className='mx-auto mt-4 w-[95%] grid grid-cols-2 auto-rows-fr md:grid-cols-3 gap-8'>
        <div className='border-white border-[5px] '  style={Mystyle}/>
        <div className='border-white border-[5px] '  style={Mystyle}/>

        <div className='card-container |  p-8 custom-shadow rounded-md  bg-white'>
          <section className='card__title |  text-design '>
            @sikethedev
          </section>
          <section className='card__description | font-bold text-[#72BA58]'>
            Lorem ipsum dolor sit amet.
            Quisquam totam nostrum quibusdam maiores.
            Nihil nulla tempora eum numquam.
            Assumenda laborum eligendi culpa placeat?
            Nulla totam praesentium ratione reiciendis?
          </section>
        </div>
        <div className='border-white border-[5px] '  style={Mystyle}/>

        <div className='card-container |  p-8 custom-shadow rounded-md  bg-white'>
          <section className='card__title |  text-design '>
            @em
          </section>
          <section className='card__description | font-bold text-[#72BA58]'>
            Lorem ipsum dolor sit amet.
            Quisquam totam nostrum quibusdam maiores.
            Nihil nulla tempora eum numquam.
            Assumenda laborum eligendi culpa placeat?
            Nulla totam praesentium ratione reiciendis?
          </section>
        </div>
        <div className='border-white border-[5px] '  style={Mystyle}/>

              </div>
    </>
  );
}

export default Team;
