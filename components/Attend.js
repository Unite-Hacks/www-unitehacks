import React from 'react';
import plane from '../public/assets/plane';




const icons = {
"icon1" : <svg  xmlns="http://www.w3.org/2000/svg"  width="64" height="64" fill="currentColor" class="bi  bi-airplane" viewBox="0 0 16 16">
<path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Zm.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599Z"/>
</svg> ,
"icon2" : <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-app-indicator" viewBox="0 0 16 16">
<path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
<path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
</svg> ,
"icon3" : <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-arrow-bar-up" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"/>
</svg>
}

const Attend = () => {
  return (
  <>
  <div className='w-c mx-auto justify-around hidden md:flex mt-10'>
    {plane}
  </div>
  <div className='sm:flex mx-auto w-[100%] sm:w-c  justify-between sm:gap-4 '>
    <div className='w-c mx-auto p-4  sm:pb-24 sm:pt-11 justify-center rounded-md bg-white mt-5'>
      <div className='w-c mx-auto flex sm:block'>
        <div className='pb-3 order-2 ml-auto'>
          {icons.icon1}
        </div>
      <div className='text-design pb-4'>design & build<br>
      </br> something cool</div>
      </div>
      <p className='p-design mx-2 text-[#406932]'>
      create a unique project with other high school students in 48 hours, by the end of the weekend!
      </p>
    </div>
    <div className='w-c mx-auto p-4 justify-center   sm:pb-24 sm:pt-11 rounded-md bg-white mt-5'>
      <div className='w-c mx-auto flex sm:block'>
      <div className='pb-3 order-2 ml-auto'>
          {icons.icon2}
        </div>
      <div className='text-design pb-4'>meet people &<br></br>
    make connections</div>
      </div>
      <p className='p-design mx-2 text-[#406932]'>
      meet new people from all over the Bay Area, find shared interests, and make connections!
      </p>
    </div>
    <div className='w-c mx-auto p-4 justify-center  sm:pb-24  sm:pt-11 rounded-md bg-white mt-5'>
      <div className='w-c mx-auto flex sm:block'>
      <div className='pb-3 order-2 ml-auto'>
          {icons.icon3}
        </div>
      <div className='text-design pb-4'>learn new skills</div>
      </div>
      <p className='p-design mx-2 text-[#406932]'>
      meet new people from all over the Bay Area, find shared interests, and make connections!
      </p>
    </div>
  </div>
  </>
  );
}

export default Attend;
