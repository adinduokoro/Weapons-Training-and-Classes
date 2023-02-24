import React from 'react'
import "../styles/NavbarBottom.css"
import logo from '../images/scorpionTactical.png'
import { Link } from 'react-router-dom'
import { nav } from '../data/Data.js'
import { useState } from 'react'
import { click } from '@testing-library/user-event/dist/click'

const NavbarBottom = () => {
  const [clicked, setClicked] = useState(false)
  
  const handleClick = () => {
    setClicked(!clicked)
  }


  return (
    <nav className='navbarBottom'>
      <div className="logo">
        <img src={logo}/>
      </div>
      <div className='menu-icons' onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <div id='nav__menu' className={clicked ? "navbar active" : "navbar"}>
        {nav.map((item,index) =>{
          return(
            <li key={index}>
              <Link path={item.path} className={item.cName}>
              <i className={item.icon}></i>
                {item.text}
              </Link>
            </li>
          )
        })}
      </div>
    </nav>
  )
}

export default NavbarBottom