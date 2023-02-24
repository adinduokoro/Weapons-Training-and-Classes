// source: https://codepen.io/ephs23/pen/NeQZGx
import React from 'react'
import '../styles/FacebookBtn.css'

const FacebookBtn = () => {
  return (
    <div className='facebookBtn'>
      <ul>
        <li>
          <a href="#">
            <i class="fab fa-facebook-f icon"></i>    
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-twitter icon"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-linkedin-in icon"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-google-plus-g icon"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default FacebookBtn