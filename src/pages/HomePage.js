import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Quotes from '../components/Quotes'


const HomePage = () => {
  return (
    <div className='homePage'>
      <Hero />
      <AboutUs />
      <Quotes />
    </div>
  )
}

export default HomePage