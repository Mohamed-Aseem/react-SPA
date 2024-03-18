import React, { useEffect, useState } from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])

  return (
    <nav className={`container ${sticky ? 'dark_nav': ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-230} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-140} duration={500}>About</Link></li>
            <li><Link to='galleries' smooth={true} offset={-210} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-220} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-220} duration={500} className='btn'>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
