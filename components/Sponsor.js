import React,{useState, useRef, useEffect} from 'react';
import Wolfram from "../public/assets/wolfram.svg"
import Xyz from "../public/assets/xyz.svg"
import Vercel from "../public/assets/verel.svg"

const Sponsor = () => {

  const [isActive, setIsActive] = useState(false);
  const donateRef = useRef();


  useEffect(() => {
    let handler = (event) => {
      if (!donateRef.current.contains(event.target)) {
        setIsActive(false);
      }
    }

    document.addEventListener('mousedown', handler )

    return () => document.removeEventListener('mousedown', handler);
  })


  return (
   <>
   <div className='mt-10'>
    <div className='text-center'>
      <div className='thank font-extrabold text-white'>THANK YOU TO OUR</div>
      <div className='spon text-outline font-extrabold text-transparent'>SPONSORS</div>
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

   <div className="w-c mx-auto flex justify-center rounded-md border-[5px] border-white mt-5">
        <div className="w-c">
          <h2 className="text-sh-xl font-extrabold italic text-white">
          interested in sponsoring or supporting?
          </h2>
          <div className='mt-5'>
          <div className='button text-center bg-white text-[#72BA58F7] rounded-md p-1 py-1'>
          <button>Sponsor Prospectus</button>
          </div>
          <div className='button text-center mt-5 bg-white text-[#72BA58F7] rounded-md p-1 py-1 mb-5' onClick={() => setIsActive(!isActive)}>
          <button >Make A Donation</button>
          <iframe ref={donateRef} className='donation' src='https://bank.hackclub.com/donations/start/unite-hacks' style={{ display: isActive ? 'block' : 'none'}}></iframe>
          </div>
          </div>
        </div>
      </div>
   
   </>
  );
}

export default Sponsor;