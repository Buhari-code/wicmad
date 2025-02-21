import React, { useEffect, useRef } from 'react'
import img from '../../assets/Landing-5.png'
import img1 from '../../assets/design-image-2.png'
import './Landing.css'
import Aos from 'aos'
import "aos/dist/aos.css"


function Landing({ref}) {

  useEffect(() => {
      Aos.init({duration:1000, easing:'ease-in-out-sine'})
  }, [])

  return (
    <div className="landing section container flex" ref={ref}>
      <div className="box-model">
      <div className="main-heading" data-aos= 'fade-right'>
        <h1>Welcome to the World of <span>New Software</span></h1>
        <a href="#contact"> <button className='btn1'>Get Started</button></a>
       
      </div>
      <div className="image-design" data-aos= 'fade-left'>
        {/* <div className='h2'><img src={img1} alt="" className='design-image1'/></div>
        <div className='h3'><img src={img} alt="" className='design-image2'/></div> */}
        <img src={img} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Landing
