import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Quotes from '../components/Quotes'
import Contact from '../components/Contact.js'


const HomePage = () => {
  return (
    <div className='homePage'>
      <Hero />
      <AboutUs />
      <Quotes />
      <Contact />
    </div>
  )
}

export default HomePage