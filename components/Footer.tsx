import React from 'react'
import Image from 'next/image'
import twitter from "../assets/twitter.svg"
import instagram from "../assets/instagram.svg"
import linkedin from "../assets/linkedin.svg"

const Footer = () => {
  return (
    <div className='bg-[#C3FFAE] text-center justify-center pt-10 pb-8'>
      <div>
        <div className='flex gap-4 justify-center text-center items-center'>
          <div>
            <a href='https://twitter.com/UniteHacks'>
            <Image src={twitter} alt='twitter' />
            </a>
          </div>
          <div>
            <a href='https://www.instagram.com/unitehacks/'>
            <Image src={instagram} alt='instagram' />
            </a>
          </div>
          <div>
            <a href='https://www.linkedin.com/company/unite-hacks/'>
            <Image src={linkedin} alt='linkedin' />
            </a>
          </div>
        </div>
        <div className='footer font-bold text-[24px]'>United by Tech</div>
        <div>Made with 💚 | ⓒ Unite Hacks 2023 </div>
      </div>
    </div>
  )
}

export default Footer
