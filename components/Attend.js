import React from 'react';
import plane from '../public/assets/plane';




const icons = {
"icon1" :<svg width="64" height="64" viewBox="0 0 46 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1429 63.3724C13.1429 65.1874 14.6214 66.6724 16.4286 66.6724H29.5714C31.3786 66.6724 32.8571 65.1874 32.8571 63.3724V60.0724H13.1429V63.3724ZM23 0.672363C10.3171 0.672363 0 11.0344 0 23.7724C0 31.6264 3.91 38.5234 9.85714 42.7144V50.1724C9.85714 51.9874 11.3357 53.4724 13.1429 53.4724H32.8571C34.6643 53.4724 36.1429 51.9874 36.1429 50.1724V42.7144C42.09 38.5234 46 31.6264 46 23.7724C46 11.0344 35.6829 0.672363 23 0.672363ZM29.5714 39.2824V46.8724H16.4286V39.2824C11.4343 35.7514 6.57143 32.1214 6.57143 23.7724C6.57143 14.6644 13.9314 7.27236 23 7.27236C32.0686 7.27236 39.4286 14.6644 39.4286 23.7724C39.4286 31.9894 34.4671 35.8174 29.5714 39.2824Z" fill="url(#paint0_linear_247_104)"/>
<defs>
<linearGradient id="paint0_linear_247_104" x1="-13.1429" y1="-10.8776" x2="46.3517" y2="76.3324" gradientUnits="userSpaceOnUse">
<stop stop-color="#5BB9EF"/>
<stop offset="1" stop-color="#72BA58" stop-opacity="0.97"/>
<stop offset="1" stop-color="#72BA58"/>
</linearGradient>
</defs>
</svg>  ,
"icon2": <svg width="64" height="64" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.5 7.91611C34.9225 7.91611 38.5063 11.4999 38.5063 15.9224C38.5063 20.3449 34.9225 23.9286 30.5 23.9286C26.0775 23.9286 22.4937 20.3449 22.4937 15.9224C22.4937 11.4999 26.0775 7.91611 30.5 7.91611ZM30.5 42.2286C41.8231 42.2286 53.7563 47.7949 53.7563 50.2349V54.4286H7.24375V50.2349C7.24375 47.7949 19.1769 42.2286 30.5 42.2286ZM30.5 0.672363C22.0744 0.672363 15.25 7.49674 15.25 15.9224C15.25 24.348 22.0744 31.1724 30.5 31.1724C38.9256 31.1724 45.75 24.348 45.75 15.9224C45.75 7.49674 38.9256 0.672363 30.5 0.672363ZM30.5 34.9849C20.3206 34.9849 0 40.0936 0 50.2349V61.6724H61V50.2349C61 40.0936 40.6794 34.9849 30.5 34.9849Z" fill="url(#paint0_linear_247_109)"/>
<defs>
<linearGradient id="paint0_linear_247_109" x1="7.625" y1="0.672363" x2="51.4687" y2="61.6724" gradientUnits="userSpaceOnUse">
<stop stop-color="#5BB9EF"/>
<stop offset="1" stop-color="#72BA58" stop-opacity="0.97"/>
</linearGradient>
</defs>
</svg>  ,
"icon3" :<svg width="64" height="64" viewBox="0 0 68 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.16 39.539L9.52 22.6724L25.16 5.8057L20.4 0.672363L0 22.6724L20.4 44.6724L25.16 39.539ZM42.84 39.539L58.48 22.6724L42.84 5.8057L47.6 0.672363L68 22.6724L47.6 44.6724L42.84 39.539Z" fill="url(#paint0_linear_247_105)"/>
<defs>
<linearGradient id="paint0_linear_247_105" x1="-6.89189" y1="-6.32764" x2="72.0836" y2="44.8735" gradientUnits="userSpaceOnUse">
<stop stop-color="#5BB9EF"/>
<stop offset="1" stop-color="#72BA58" stop-opacity="0.97"/>
</linearGradient>
</defs>
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
