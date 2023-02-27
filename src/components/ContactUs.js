import React from 'react'
import '../styles/ContactUs.css'
import SocialIcons from '../components/SocialIcons.js'

const ContactUs = () => {
  return (
    <div className="contactUs">
      <h1>Send Us a Message</h1>
      <hr />
      <div className="contactUs__box">
        <div className="contactUs__left">
          <form>
            <input type="text" className='input__field' placeholder='Name' />
            <input type="text" className='input__field' placeholder='Email' />
            <input type="text" className='input__field' placeholder='Phone Number' />
            <textarea type="text" rows="4" placeholder='Message'></textarea>
            {/* add button */}
          </form>
        </div>
        <div className="contactUs__right">
          <ul class="contact-list">
            <li><i class="fa fa-map-marker"><span>Timonium, MD</span></i></li>
            <li><i class="fa fa-phone"><span><a href="">443-252-3664</a></span></i></li>
          </ul>
          <hr />
            <SocialIcons />
          <hr />
          <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs