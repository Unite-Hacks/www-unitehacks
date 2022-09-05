import React from 'react';
import Twitter from "../public/assets/twitter.svg"
import Insta from "../public/assets/instagram.svg"
import linkedin from "../public/assets/linkedin.svg"

const Footer = () => {
  return (
    <>
        <div className='w-c mx-auto justify-center rounded-md bg-white mt-5'>
          <div className='w-c flex flex-col md:flex-row justify-between'>
          <div className='mx-10  text-sh-xl font-extrabold italic g-heading'>
          follow our socials <br/>for updates!
          </div>
          <div className='flex text-center justify-center items-center gap-24 mt-5 pb-5'>
          <div> <img src={Twitter.src} /></div>
          <div><img src={Insta.src} /></div>
          <div><img src={linkedin.src} /></div>
          </div>
          </div>
        </div>
        <div className='w-c mx-auto justify-center rounded-md bg-white mt-5 mb-2 pt-2 pb-2'>
        <div className='unitetext text-center g-heading italic'>
        ⓒ unite hacks 2022
        </div>
        </div>
    </>
  );
}

export default Footer;