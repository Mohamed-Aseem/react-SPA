import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Programs' title='What We Offer'/>
        <Programs />
        <About />
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Gallery />
      </div>
    </div>
  )
}

export default App
