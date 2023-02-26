import React from 'react'
import HalfHero from '../components/HalfHero'
import '../styles/HalfHero.css'
import classImg from '../images/training-image-alt.jpg'

const ClassesPage = () => {
  return (
    <div className='classesPage'>ClassesPage
      <HalfHero 
        title="CURRENT COURSES"
        image={classImg}
      />
    </div>
  )
}

export default ClassesPage