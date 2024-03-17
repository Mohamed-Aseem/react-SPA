import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='container hero'>
        <div className="hero-text">
          <h1>We guarantee improved learning for a better society</h1>
          <p>Our innovative curriculum is developed to give students the information, 
            skills, and experiences they need to succeed in the fast-paced world of education.
          </p>
          <button className='btn'>More Details <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
