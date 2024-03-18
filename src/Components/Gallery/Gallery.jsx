import React, { useEffect }from 'react'
import './Gallery.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Gallery() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='galleries'>
        <div className="gallery">
            <img src={gallery_1} alt="" data-aos='fade-in' data-aos-duration='2000'/>
            <img src={gallery_2} alt="" data-aos='fade-in' data-aos-duration='2000' data-aos-delay="200"/>
            <img src={gallery_3} alt="" data-aos='fade-in' data-aos-duration='2000' data-aos-delay="400"/>
            <img src={gallery_4} alt="" data-aos='fade-in' data-aos-duration='2000' data-aos-delay="600"/>
        </div>
        <button className='btn dark-btn' data-aos='slide-up' data-aos-offset="-100" data-aos-duration='2000'>See More Here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Gallery
