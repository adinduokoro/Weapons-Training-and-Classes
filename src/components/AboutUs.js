import React from 'react'
import "../styles/AboutUs.css"
import aboutUsImg from '../images/aboutus-image.jpg'

const AboutUs = () => {
  return (
    <div className='aboutUs'>
      <div className="aboutUs__container">
        <img src={aboutUsImg} alt="about-img" />
        <div className="aboutUs__overlay">
        </div>
        <div className="aboutUs__info">
          <div className="aboutUs__text">
            <h1>ABOUT US</h1>
            <p>Scorpion Tactical Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, repellat illum? Vero corporis vitae omnis quia nisi enim quisquam ipsa animi maiores, doloribus, odit aliquid quos ad fuga nostrum at alias esse maxime unde tenetur incidunt amet! Vero perspiciatis qui accusamus nemo soluta inventore eius expedita nihil, corporis facilis quisquam.</p>
            <br />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit magnam, deleniti ipsam facere, repellendus culpa corrupti maxime, deserunt et repellat consequatur provident quis. Temporibus, quibusdam..</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default AboutUs