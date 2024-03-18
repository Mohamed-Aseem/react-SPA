import React, { useEffect } from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='container hero'>
        <div className="hero-text">
          <h1 data-aos='fade-down' data-aos-duration='2500'>We guarantee improved learning for a better society</h1>
          <p data-aos='fade-in' data-aos-duration='2500'>Our innovative curriculum is developed to give students the information, 
            skills, and experiences they need to succeed in the fast-paced world of education.
          </p>
          <button className='btn' data-aos='fade-in' data-aos-duration='2500'>More Details <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
