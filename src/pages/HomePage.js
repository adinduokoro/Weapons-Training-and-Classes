import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Quotes from '../components/Quotes'
import Contact from '../components/Contact.js'
import LocationInfo from '../components/LocationInfo'
import ContactUs from '../components/ContactUs'
import Info from '../components/Info'


const HomePage = () => {
  return (
    <div className='homePage'>
      <Hero />
      <AboutUs />
      <Quotes />
      <LocationInfo />
      <ContactUs />
      <Info />
    </div>
  )
}

export default HomePage