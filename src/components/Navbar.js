import React from 'react'
import "../styles/Navbar.css"
import NavbarBottom from './NavbarBottom'
import NavbarTop from './NavbarTop'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavbarTop />
      <NavbarBottom/>
    </nav>
  )
}

export default Navbar