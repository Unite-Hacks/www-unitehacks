import React from 'react';
import Wolfram from "../public/assets/wolfram.svg"
import Xyz from "../public/assets/xyz.svg"
import Vercel from "../public/assets/verel.svg"

const Sponsor = () => {
  return (
   <>
   <div className='mt-10'>
    <div className='text-center'>
      <div className='thank font-extrabold text-white'>THANK YOU TO OUR</div>
      <div className='spon text-outline text-transparent'>SPONSORS</div>
    </div>
   </div>

   <div>
    <div className='w-c mx-auto flex gap-10'>
      <div><img src={Wolfram.src} /></div>
      <div><img src={Xyz.src} /></div>
    </div>
    <div className='w-c mx-auto'>
    <div><img src={Vercel.src} /></div>
    </div>
   </div>
   
   </>
  );
}

export default Sponsor;
