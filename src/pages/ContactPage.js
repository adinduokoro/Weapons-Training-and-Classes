import React from 'react'
import '../styles/HalfHero.css'
import HalfHero from '../components/HalfHero'
import contactImg from '../images/contact-image.jpg'

const ContactPage = () => {
  return (
    <div className='contactPage'>
      <HalfHero 
        title="CONTACT US"
        image={contactImg}
      />
      
    </div>
  )
}

export default ContactPage