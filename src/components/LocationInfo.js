import React from 'react'
import '../styles/LocationInfo.css'
import locationImg from '../images/range-image.jpg'

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
      {/* <div className='google__maps'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12322.760272407853!2d-76.642379!3d39.4537366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe7b2f0ef95ac839e!2sContinental%20Arms%20Inc!5e0!3m2!1sen!2sus!4v1676302324336!5m2!1sen!2sus" style={{width: "100%", height: "25rem", loading: "lazy"}}></iframe>
      </div> */}
    </div>
  )
}

export default LocationInfo