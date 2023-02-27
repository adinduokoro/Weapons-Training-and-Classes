import React from 'react'
import '../styles/Packages.css'
import { packages } from '../data/Data.js'

const Packages = () => {
  return (
    <div className='package'>
      <div className="package__info">
        {packages.map((item, index) => {
          return(
          <ul key={index}>
            <div className="package__title">
              <h1>{item.title}</h1>
            </div>
            <div className="package__price">
              <p>{item.price}</p>
            </div>
            <div className="package__text">
              <p>{item.text}</p>
            </div>
          </ul>
          )
        })}
      </div>
    </div>
    
  )
}

export default Packages