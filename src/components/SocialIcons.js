import React from 'react'
import '../styles/SocialIcons.scss'

const SocialIcons = () => {
  return (
    <div>
      <div class="main">
        <a class="nav-item">
          <div class="nav-links">
            <i class="fab fa-linkedin-in"></i>
          </div>
          <span class="nav-link-text">LinkedIn</span>
        </a>
        <a class="nav-item">
          <div class="nav-links">
            <i class="fab fa-google"></i>
          </div>
          <span class="nav-link-text">Google</span>
        </a>
      </div>
    </div>
  )
}

export default SocialIcons