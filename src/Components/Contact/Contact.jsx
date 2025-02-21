import React, { useState } from 'react'
import './Contact.css'
import img from '../../assets/contact.jpg'
import emailjs from '@emailjs/browser'

function Contact({ref}) {

  const [userData, setUserData] = useState({
    name:'',
    email:'',
    phNumber:'',
    message:''
  })

  const [error, setError] = useState('')

  const validate = () => {
    if(!userData.name.trim()){
      setError('Enter Your Name')
      return false
    }
    if(!userData.email.trim()) {
      setError('Enter Your Email')
      return false
    }
    if(!/\S+@\S+\.\S+/.test(userData.email)){
      setError('Invalid Email')
      return false
    }
    if(!userData.phNumber){
      setError('Enter your Phone Number')
      return false
    }
    if(!/^\d{10}$/.test(userData.phNumber)){
      setError('Enter the valid Phone Number')
      return false
    }
    if(!userData.message.trim()){
      setError('Message cannot be empty')
      return false
    }
    setError('')
    return true
  }

  const handleChange = (e) => {
    const {name, value} = e.target

    setUserData((prev) => ({
       ...prev,
       [name] : value
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if(validate()){
        console.log(userData)
        setUserData({
       name:'',
    email:'',
    phNumber:'',
    message:''
    })

    const serviceId ='service_wwdhice'
    const templateId = 'template_5qp6ylo'
    const publicKey = 'jBEYJPNuIf-QxtbJR'

    const templateParam = {
      from_name : userData.name,
            from_number : userData.phNumber,
            from_email : userData.email,
            from_message : userData.message, 
            to_name : 'Wicmad Technology'
    }

   try{
    const response = await emailjs.send(serviceId, templateId, templateParam, publicKey)
    alert("Thank You for register, Our Teammate will Call you Quikly")
    return response
   } catch(error){
      alert('Error sending email. Please try again.');
   }
    

    
    
    
  } 
}

  return (
    <>
    <div className="contact section container" ref={ref} id='contact'>
      <div className="secHeading">
        <h1>Contact Us</h1>
      </div>
      <div className="box-model flex">
        <div className="img-src">
          <img src={img} alt="Contact" />
        </div>
        <div className="form">
          <div className="heading">
            <h2>Let's talk about your Project</h2>
          </div>
          <input type="text" name='name' placeholder='Name' className='inputField' onChange={handleChange} value={userData.name}/>
          <div className="cont">
            <input type="email" name='email' placeholder='Email' className='inputField1' onChange={handleChange} value={userData.email}/>
            <input type="number" name="phNumber" placeholder='Mobile Number' className='inputField1'onChange={handleChange} value={userData.phNumber}/>
            
          
          </div>
          
          <textarea name="message" className='inputField' rows={10} cols={20} placeholder='Message' onChange={handleChange} value={userData.message}></textarea>
           {error && <p className='error'>{error}</p>}
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <h2>Address : Wicmad Technologies, No 66 A, Karikalan Main Street, Adambakkam - 88 , Mobile No : +91 9003463709</h2>
    </div>
    </>
  )

}

export default Contact