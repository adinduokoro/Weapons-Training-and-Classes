import React from 'react'
import NavbarBottom from './NavbarBottom'
import NavbarTop from './NavbarTop'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavbarTop />
      <NavbarBottom/>
    </nav>
  )
}

export default Navbar