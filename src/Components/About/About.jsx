import React, { useEffect } from 'react';
import './About.css';
import img from '../../assets/4208395.jpg';
import img1 from '../../assets/project-img.png';
import video from '../../assets/OON Video.mp4';
import img2 from '../../assets/icon1.png'
import Aos from 'aos'
import "aos/dist/aos.css"

const About = React.forwardRef((props, ref) => {
  useEffect(() => {
      Aos.init({duration:1000, easing:'ease-in-cubic'})
    }, [])
  return (
    <>
    <div className="about section container" ref={ref}>
      <div className="secHeading">
        <h1>About Us</h1>
      </div>
      <div className="box-model flex">
        <div className="box-image" data-aos= 'fade-right'>
          <img src={img} alt="" />
        </div>
        <div className="box" data-aos= 'fade-left'>
          <h2>Why you choose us?</h2>
          <p>At Wicmad, we are a passionate team of software developers and innovators committed to creating cutting-edge solutions that drive businesses forward. With a focus on delivering high-quality software that meets the evolving needs of our clients, we specialize in custom software development, mobile app solutions, and web development.</p>
          <p>Our approach blends creativity with technology to deliver user-centric designs, intuitive interfaces, and powerful functionality. We work closely with our clients to understand their challenges and goals, ensuring every project is tailored to deliver maximum impact and value.</p>
        </div>
      </div>
      <div className="secHeading1">
        <h1>Our Projects</h1>
      </div>
      <div className="projects flex">
        
          <div className="project1" data-aos='fade-up'>
            <a href="https://letz-vacation.com/" target='blank'  rel="noopener noreferrer" >
            <img src={img1} alt="" />
          </a>
          <h3>Letz Vacation Tours and Travels</h3>
          <p>Letz Vacation Tours and Travels is a modern travel website . It features an advanced itinerary search filter, allowing users to explore destinations effortlessly . Designed for a smooth and responsive experience, the website ensures easy navigation on both desktop and mobile devices. Our goal was to create a user-friendly platform that helps travelers find their ideal trips with simplicity and efficiency.</p>
          <h4><span>Live Website : </span><a href="https://letz-vacation.com/" target='blank'  rel="noopener noreferrer">Letz Vacation Tours and Travels</a></h4>
        </div>
       
          
          <div className="project1" data-aos='fade-up'>
            <a href="https://play.google.com/store/apps/details?id=com.food_oon.oonapp" target='blank'  rel="noopener noreferrer" >
           {/* <video src={video} autoPlay loop muted playsInline></video> */}
           <img src={img2} alt="" />
          </a>
          <h3>OON - Food Recipe Mobile App</h3>
          <p>OON – Food Recipe Mobile App is crafted to provide a seamless experience with smooth navigation and fast performance. The app ensures efficient search filtering, helping users quickly find recipes based on ingredients, categories, and keywords. Its intuitive interface makes exploring and discovering new recipes effortless. Additionally, the app provides detailed step-by-step cooking instructions.</p>
          <h4><span>Live App : </span><a href="https://play.google.com/store/apps/details?id=com.food_oon.oonapp" target='blank'  rel="noopener noreferrer">OON - Food Recipe</a></h4>
        </div>
      </div>
    </div>
    </>
  )
} )

export default About