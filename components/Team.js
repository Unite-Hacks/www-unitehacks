import React from 'react';
import vercel from "../public/assets/verel.svg"
const Team = () => {
  return (
    <>
      <div className='mt-5'>
        <div className="team text-center font-extrabold text-white">
          MEET THE TEAM
        </div>
      </div>
      <div className='mx-auto mt-4 w-[95%] grid grid-cols-2 auto-rows-fr md:grid-cols-3 gap-8'>
        <div className='border-white border-[5px]'>
  <img src={vercel.src}/>
        </div>
        <div className='border-white border-[5px]'>
  <img src={vercel.src}/>
        </div>
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
        <div className='border-white border-[5px]'>
  <img src={vercel.src}/>
        </div>
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
        <div className='border-white border-[5px]'>
  <img src={vercel.src}/>
        </div>
              </div>
    </>
  );
}

export default Team;
