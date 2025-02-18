import React from 'react'
import img from '../../assets/Landing-5.png'
import img1 from '../../assets/design-image-2.png'
import './Landing.css'

function Landing() {
  return (
    <div className="landing section container flex" id="Home">
      <div className="box-model">
      <div className="main-heading">
        <h1>Welcome to the World of <span>New Software</span></h1>
      </div>
      <div className="image-design">
        {/* <div className='h2'><img src={img1} alt="" className='design-image1'/></div>
        <div className='h3'><img src={img} alt="" className='design-image2'/></div> */}
        <img src={img} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Landing
