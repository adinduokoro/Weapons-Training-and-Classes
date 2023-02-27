import React from 'react'
import HalfHero from '../components/HalfHero'
import halfHeroImg from '../images/location-range.jpg'
import LocationInfo from '../components/LocationInfo'
import Info from "../components/Info.js"


const LocationPage = () => {
  return (
    <div className="locationPage">
      <HalfHero 
        title="LOCATION"
        image={halfHeroImg}
      />
      <LocationInfo />
      <Info />
    </div>
  )
}

export default LocationPage