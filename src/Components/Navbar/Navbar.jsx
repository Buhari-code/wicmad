import React, { useEffect, useRef, useState } from 'react'
import img1 from '../../assets/MAIN LOGO-cropped.svg'
import './Navbar.css'
import { FaBarsProgress } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import Landing from '../Landing/Landing';
import Service from '../Service/Service';
import About from '../About/About';
import Contact from '../Contact/Contact';

function Navbar() {

  const [navbar, setNavbar] = useState(false)
  const navRef = useRef(null)
    const aboutRef = useRef(null)
    const homeRef = useRef(null)
    const serviceRef = useRef(null)
    const contactRef = useRef(null)

  const toggleNav = () => {
    setNavbar((prev) => !prev)
  }

  const removeNavbar = (ref) => {
    if(ref?.current){
      ref?.current.scrollIntoView({behavior : 'smooth'})
    }
    setNavbar(false)
  }

  const handleOutsideClick = (event) => {
    if(!event.target.closest('.nav-tab')){
      setNavbar(false)
    }
  }

  // const handleOutsideClick = (event) => {
  //   if(navRef.current && !navRef.current.contains(event.target)){
  //     setNavbar(false)
  //   }
  // }

  const handleScroll = () => {
    setNavbar(false)
  }


  useEffect(() => {
   document.addEventListener("mousedown", handleOutsideClick)
   window.addEventListener("scroll", handleScroll)

   return () => {document.removeEventListener("mousedown", handleOutsideClick)
    window.removeEventListener("scroll", handleScroll)
   }
  }, [])


  return (
    <>
      <div className="navbar section container">
        <div className="nav flex">
          <div className='nav-tabs flex'>
            <div className="nav-logo">
              <img src={img1} alt="" />
            </div>
            <div className={`nav-tab ${navbar ? 'activeNavbar' : ''}`}>
              <a href="#home" onClick={() => removeNavbar(homeRef)}>Home</a>
              <a href="#services" onClick={() => removeNavbar(serviceRef)}>Services</a>
              <a href="#about" onClick={() => removeNavbar(aboutRef)}>About Us</a>
              <a href="#contact" onClick={() => removeNavbar(contactRef)}>Contact</a>

            </div>
          </div>
          <button className="nav-bar" onClick={toggleNav}>
            {navbar ? <ImCross className='icon' /> : <FaBarsProgress className='icon' />}

          </button>
        </div>
      </div>
      <Landing ref={homeRef}/>
      <Service ref={serviceRef}/>
      <About ref={aboutRef}/>
      <Contact ref={contactRef}/>
    </>
  )
}

export default Navbar