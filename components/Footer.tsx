import React from 'react'
import Image from 'next/image'
import twitter from "../assets/twitter.svg"
import instagram from "../assets/instagram.svg"
import linkedin from "../assets/linkedin.svg"

const Footer = () => {
  return (
    <div className='text-center justify-center mt-20 mb-8'>
      <div>
        <div className='flex gap-4 justify-center text-center items-center'>
          <div>
            <a href='https://twitter.com/UniteHacks'>
            <Image src={twitter} alt='twitter' />
            </a>
          </div>
          <div>
            <a href='https://www.instagram.com/unitehacks/'>
            <Image src={instagram} alt='insta' />
            </a>
          </div>
          <div>
            <a href='https://www.linkedin.com/company/unite-hacks/'>
            <Image src={linkedin} alt='linkd' />
            </a>
          </div>
        </div>
        <div className='footer font-bold text-[24px]'>United by Tech</div>
        <div>ⓒ unite hacks 2022</div>
      </div>
    </div>
  )
}

export default Footer
