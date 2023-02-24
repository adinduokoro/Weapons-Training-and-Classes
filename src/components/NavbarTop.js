import React from 'react'
import SmartphoneIcon from '@mui/icons-material/Smartphone';import MailIcon from '@mui/icons-material/Mail';
import '../styles/NavbarTop.css'
import FacebookBtn from './FacebookBtn'




const NavbarTop = () => {
  return (
    <div className='navbarTop'>
      <div className="contact">
        <div className="phone">
          <SmartphoneIcon />
          <p>+1 443-252-3664</p>
        </div>
        <div className="email">
          <MailIcon />
          <p>scorpionarms.tactical@gmail.com</p>
        </div>
      </div>
      <div className="facebook">
        <FacebookBtn />
      </div>
    </div>
  )
}

export default NavbarTop