import React, { useEffect }from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = ({setPlayState}) => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='about'>
      <div className="about-left" data-aos='fade-right' data-aos-duration='2000'>
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{
          setPlayState(true)}}/>
      </div>
      <div className="about-right" data-aos='fade-left' data-aos-duration='3000'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>
        <p>
        At Edusity, we believe in more than just providing an education; we are dedicated to nurturing tomorrow's leaders today. Our university is committed to fostering a culture of leadership that extends far beyond the confines of the classroom, preparing our students to excel in an ever-changing world.
        </p>
        <p>
        Through our rigorous academic curriculum, students develop critical thinking, problem-solving, and communication skills essential for effective leadership. Beyond textbooks and lectures, we offer numerous opportunities for experiential learning, internships, and community service projects that enrich students' understanding of real-world issues and empower them to make a difference.
        </p>
        <p>
        At Edusity, we are not just shaping minds; we are nurturing leaders who will inspire, innovate, and make meaningful contributions to society. Join us in our mission to cultivate the leaders of tomorrow, today.
        </p>
      </div>
    </div>
  )
}

export default About
