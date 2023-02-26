import React from 'react'
import '../styles/LocationInfo.css'
import locationImg from '../images/range-image.jpg'
import GoogleMap from './GoogleMap'
import '../styles/GoogleMap.css'

const LocationInfo = () => {
  return (
    <div className="location">
      <div className="location__container">
        <div className="location__img">
          <img src={locationImg} alt="" />
        </div>
        <div className="location__text">
          <div className="address__info">
            <h1>ADDRESS:</h1>
            <p>9603 Deereco Rd #500</p>
            <p>Timonium, MD 21093</p>
            <p>Monday - Sunday: 10am - 8pm</p>
          </div>
          <div className="contact__info">
            <h1>Contact:</h1>
            <p>+1 443-252-3664</p>
            <p>scorpionarms.tactical@gmail.com</p>
          </div>
        </div>
      </div>
      <GoogleMap />
    </div>
  )
}

export default LocationInfo