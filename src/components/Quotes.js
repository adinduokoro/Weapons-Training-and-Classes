import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { FaQuoteRight } from 'react-icons/fa'
import '../styles/Quotes.css'

const Quotes = () => {
  return (
    <div className='quote'>
      <div className="quote__container">
        <FaQuoteLeft />
        <h1>Helping Responsible Gun Owners</h1>
        <FaQuoteRight />
      </div>
    </div>
  )
}

export default Quotes