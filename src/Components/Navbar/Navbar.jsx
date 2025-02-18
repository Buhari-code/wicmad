import React, { useEffect, useRef, useState } from 'react'
import img1 from '../../assets/MAIN LOGO-cropped.svg'
import './Navbar.css'
import { FaBarsProgress } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

function Navbar() {

  const [navbar, setNavbar] = useState(false)
  const navRef = useRef(null)

  const toggleNav = () => {
    setNavbar((prev) => !prev)
  }

  const removeNavbar = () => {
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

  const handleResize = () => {
      setNavbar(false) 
  }



  useEffect(() => {
   document.addEventListener("mousedown", handleOutsideClick)
   window.addEventListener("scroll", handleScroll)
   window.addEventListener("resize", handleResize)

   return () => {document.removeEventListener("mousedown", handleOutsideClick)
    window.removeEventListener("scroll", handleScroll)
     window.removeEventListener("resize", handleResize)
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
              <a href="#Home" onClick={removeNavbar}>Home</a>
              <a href="#Services" onClick={removeNavbar}>Services</a>
              <a href="#About Us" onClick={removeNavbar}>About Us</a>
              <a href="#Contact" onClick={removeNavbar}>Contact</a>
              <a href="#Contact" className='btn' onClick={removeNavbar}>Login</a>

            </div>
          </div>
          <button className="nav-bar" onClick={toggleNav}>
            {navbar ? <ImCross className='icon' /> : <FaBarsProgress className='icon' />}

          </button>
          <div className="login-btn">
            <button>Login</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar