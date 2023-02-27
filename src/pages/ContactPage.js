import React from 'react'
import '../styles/HalfHero.css'
import HalfHero from '../components/HalfHero'
import contactImg from '../images/contact-image.jpg'
import ContactUs from '../components/ContactUs'
import Info from '../components/Info.js'

const ContactPage = () => {
  return (
    <div className='contactPage'>
      <HalfHero 
        title="CONTACT US"
        image={contactImg}
      />
      <ContactUs />
      <Info />
    </div>
  )
}

export default ContactPage