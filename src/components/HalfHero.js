import React from 'react'
import '../styles/HalfHero.css'

const HalfHero = ({ title , image}) => {
  return (
    <div className='halfHero'>
      <div className="halfHero__image">
        <img src={image} alt="" />
      </div>
      <div className="overlay"></div>
      <div className="halfHero__info">
        <h1>{title}</h1>
      </div>
    </div>
  )
}

export default HalfHero