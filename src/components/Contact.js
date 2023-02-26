import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact__container">
        <h1>Contact Us</h1>
        <hr />
        <div className="contact__box">
          <form action="">
            <input type="text" className="input__field" placeholder='Name'/>
            <input type="text" className="input__field" placeholder='Email'/>
            <input type="text" className="input__field" placeholder='Phone Number'/>
            <textarea type="text" className="input__field textarea__field" placeholder='Message'/>
          </form>
        </div>
        {/* <BookNowBtn /> */}
      </div>
    </div>
  )
}

export default Contact