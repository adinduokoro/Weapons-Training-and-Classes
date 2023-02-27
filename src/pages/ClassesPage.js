import React from 'react'
import HalfHero from '../components/HalfHero'
import '../styles/HalfHero.css'
import classImg from '../images/training-image-alt.jpg'
import Packages from '../components/Packages'
import Info from '../components/Info.js'

const ClassesPage = () => {
  return (
    <div className='classesPage'>ClassesPage
      <HalfHero 
        title="CURRENT COURSES"
        image={classImg}
      />
      <Packages />
      <Info />
    </div>
  )
}

export default ClassesPage