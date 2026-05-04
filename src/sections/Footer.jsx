import React from 'react'
import  {socialImgs} from '../constants/index.js'

const Footer = () => {
  return (
    <footer className="footer" >
      <div className='footer-container'>
        <div className='flex flex-col justify-center'>
          <a href='/'> Thank you for visiting my portfolio!</a>
        </div>
        <div className='socials'>
          {socialImgs.map((img) => (
            <a className='icon' target="_blank" href={img.url} key={img.url}>
              <img src={img.imgPath} />
            </a>
          ))}
        </div>

        <div className='flex flex-col justify-center'>
          <p className=' text-center md:text-end'>© 2026 Aman Gupta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer