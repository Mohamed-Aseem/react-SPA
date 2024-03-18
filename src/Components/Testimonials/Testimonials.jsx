import React, { useEffect, useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Testimonials = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  const slider = useRef();

  let tX = 0;


  const slideForward = ()=>{
    if(tX > -50){
      tX -= 25;
    }
    slider.current.style.transform = `translateX(${tX}%)`
  }

  const slideBackward = ()=>{
    if(tX < 0){
      tX += 25;
    }
    slider.current.style.transform = `translateX(${tX}%)`;
  }

  return (
    <div className='testimonials' data-aos='fade-in' data-aos-duration='2000'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Sarah Johnson</h3>
                  <span>Software Engineer, USA</span>
                </div>
              </div>
              <p>
                Edusity has truly been a transformative experience for me. The diverse academic opportunities and supportive community have equipped me with the skills and confidence to pursue my dreams.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3> Michael Rodriguez</h3>
                  <span>Marketing Specialist, USA</span>
                </div>
              </div>
              <p>
              Choosing Edusity was one of the best decisions I've ever made. The personalized attention from professors, coupled with hands-on learning experiences, prepared me not just for my career but for life beyond graduation.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Emily Chen</h3>
                  <span>Registered Nurse, USA</span>
                </div>
              </div>
              <p>
              As a first-generation college student, Edusity provided me with the support and resources I needed to succeed. The dedicated faculty and vibrant campus community fostered an environment where I could thrive academically and personally.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Alex Nguyen</h3>
                  <span>Financial Analyst, USA</span>
                </div>
              </div>
              <p>
              Edusity's commitment to holistic development has been instrumental in shaping me into the leader I am today. From leadership workshops to internship opportunities, every aspect of my education was tailored to help me reach my full potential.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
