import React from 'react';
import Arrow from "../public/assets/arrow.svg"

const Faq = () => {
  return (
   <>
   <div className='w-c mx-auto mt-5'>
    <div className='text-faq font-extrabold text-white'>FAQ</div>
   </div>
   <div className='w-c mx-auto justify-center rounded-md bg-white mt-5 flex items-center'>
    <div className='faqbutton  mx-2'>
    <img src={Arrow.src} />
    </div>
    <div className='faq w-c mx-auto'>What is a “hackathon”<br></br> supposed to be?</div>
   </div>

   <div className='w-c mx-auto justify-center rounded-md bg-white mt-5 flex items-center'>
    <div className='faqbutton mx-2'>
    <img src={Arrow.src} />
    </div>
    <div className='faq w-c mx-auto'>Do I need any prior<br></br> experience to attend?</div>
   </div>

   <div className='w-c mx-auto justify-center rounded-md bg-white mt-5 flex items-center'>
    <div className='faqbutton mx-2'>
    <img src={Arrow.src} />
    </div>
    <div className='faq w-c mx-auto'>How much does it cost <br></br> to attend Unite?</div>
   </div>

   <div className='w-c mx-auto justify-center rounded-md bg-white mt-5 flex items-center'>
    <div className='faqbutton mx-2'>
    <img src={Arrow.src} />
    </div>
    <div className='faq w-c mx-auto'>What is a “hackathon”<br></br> supposed to be?</div>
   </div>

   <div className='w-c mx-auto justify-center rounded-md bg-white mt-5 flex items-center'>
    <div className='faqbutton mx-2'>
    <img src={Arrow.src} />
    </div>
    <div className='faq w-c mx-auto'>What is a “hackathon”<br></br> supposed to be?</div>
   </div>

   <div className='w-c mx-auto justify-center rounded-md bg-white mt-5 flex items-center'>
    <div className='faqbutton mx-2'>
    <img src={Arrow.src} />
    </div>
    <div className='faq w-c mx-auto'>What might the<br></br> weather be like?</div>
   </div>
   </>
  );
}

export default Faq;
