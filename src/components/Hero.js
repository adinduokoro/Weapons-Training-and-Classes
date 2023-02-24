import React from 'react'
import '../styles/Hero.css'
import heroImg from '../images/hero-img.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero__image">
        <img src={heroImg} alt="" />
      </div>
      <div className="overlay"></div>
      <div className="hero__info">
        <h1>FIREARMS TRAINING</h1>
        <p>We offer classes from complete beginners to the highest level of military and law enforcement</p>
        <div className='btn'>
          <div className="hero__btn">Sign Up</div>
        </div>
      </div>
    </div>
  )
}

export default Hero