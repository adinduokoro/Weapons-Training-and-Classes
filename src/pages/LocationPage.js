import React from 'react'
import HalfHero from '../components/HalfHero'
import halfHeroImg from '../images/location-range.jpg'
import LocationInfo from '../components/LocationInfo'


const LocationPage = () => {
  return (
    <div className="locationPage">LocationPage
      <HalfHero 
        title="LOCATION"
        image={halfHeroImg}
      />
      <LocationInfo />
    </div>
  )
}

export default LocationPage