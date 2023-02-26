import React from 'react'

const GoogleMap = () => {
  return (
    <div className='google__map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12322.760272407853!2d-76.642379!3d39.4537366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe7b2f0ef95ac839e!2sContinental%20Arms%20Inc!5e0!3m2!1sen!2sus!4v1676302324336!5m2!1sen!2sus" style={{width: "75%", height: "25rem", loading: "lazy"}}></iframe>
    </div>
  )
}

export default GoogleMap