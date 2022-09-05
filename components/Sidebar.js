import React from 'react';
import Twitter from "../public/assets/twitter.svg"
import Insta from "../public/assets/instagram.svg"
import linkedin from "../public/assets/linkedin.svg"

const Sidebar = ({ visible }) => {
  const displayValue = visible ? 100 : 0;
  return (
    <>
    <div
      className="Container"
      style={{ transform: `translateX(${displayValue}vw)` }}
    >
      <div className="sidebarLinkHolder">
        <a href="" className="link">
        overview
        </a>
        <a href="" className="link">
        why attend?
        </a>
        <a href="" className="link">
        frequently asked questions
        </a>

        <a href="" className="link">
        sponsors
        </a>

        <a href="" className="link">
        meet the team
        </a>
      </div>
      <a href='https://register.unitehacks.com/'>
      <div className='background-regi text-white rounded-md pt-3 pb-3 text-center cursor-pointer'>register</div>
      </a>
      <div className='flex text-center justify-center items-center gap-20 mt-10 pb-5'>
            <a href='https://twitter.com/UniteHacks'>
          <div> <img src={Twitter.src} /></div>
          </a>

          <a href='https://www.instagram.com/unitehacks/'>
          <div><img src={Insta.src} /></div>
          </a>
          <a href='https://www.linkedin.com/company/unite-hacks/?viewAsMember=true'> 
          <div><img src={linkedin.src} /></div>
          </a>
          </div>
    </div>
    </>
  );
}

export default Sidebar;
