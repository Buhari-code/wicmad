import React, { useEffect, useState } from 'react'
import './Service.css'
import { FaArrowRight } from "react-icons/fa";

const serviceData = [
  {
    id: 1,
    serviceHeading: 'Web Development',
    description: 'Transform your ideas into dynamic, high-performance websites that engage users and drive business growth. Our web development solutions cater to businesses of all sizes, ensuring seamless functionality and a stunning user experience.',
    longDescription: 'A strong online presence starts with a well-designed, fast, and responsive website. We specialize in building custom web solutions tailored to your business needs. From simple landing pages to complex web applications, our team ensures a seamless user experience, robust security, and high-speed performance. Whether you are looking to revamp your existing site or create something entirely new, we use the latest technologies to develop solutions that stand out.',
    li1: '🔹 Custom Website Development – Tailored solutions for unique business needs.',
    li2: '🔹 Responsive & Mobile-Friendly Design – Ensuring seamless performance across all devices.',
    li3: '🔹 E-commerce Solutions – Build powerful online stores with smooth checkout experiences.',
    li4: '🔹 SEO-Optimized Websites – Get higher search rankings with SEO-friendly architecture.',
    li5: '🔹 CMS Development – Manage your website effortlessly with WordPress, Shopify, or custom CMS.',
    button: 'Learn More'
  },
   {
    id: 2,
    serviceHeading: 'Mobile App Development',
    description: 'Develop feature-rich, high-performing mobile applications that provide users with seamless experiences and high performances on both iOS and Android platforms. We bring your app ideas to life with cutting-edge technology and user-friendly design.',
    longDescription: 'In today’s digital world, having a mobile app is crucial for business success. We build high-quality mobile applications that are scalable, secure, and optimized for performance. Whether you need a native app for iOS or Android or a cross-platform solution, our team ensures your app is intuitive and engaging. From idea to launch, we provide end-to-end development services, including UI/UX design, backend integration, and continuous support.',
    li1: '🔹 Native & Cross-Platform Development – Tailored apps for Android, iOS, or both.',
    li2: '🔹 Performance & Security Optimization – Ensure fast, secure, and bug-free experiences.',
    li3: '🔹 Third-Party API Integration – Connect with payment gateways, maps, and more.',
    li4: '🔹 User-Centric UI/UX Design – Create visually appealing and easy-to-use apps.',
    li5: '🔹 App Maintenance & Updates – Keep your app up-to-date with regular improvements.',
    button: 'Learn More'
  },
   {
    id: 3,
    serviceHeading: 'Digital Marketing',
    description: 'Grow your brand’s online presence, attract the right audience, and drive conversions with data-driven digital marketing strategies. From social media to SEO and paid advertising, we help businesses achieve maximum reach and engagement.',
    longDescription: 'Effective digital marketing is key to standing out in a competitive market. We craft strategies that increase brand awareness, drive traffic, and boost sales. Whether you are looking to improve your search engine ranking, build a social media presence, or launch targeted ad campaigns, our experts ensure that your marketing efforts yield measurable results..',
    li1: '🔹 Social Media Marketing (SMM) – Create engaging content for platforms like Facebook, Instagram, LinkedIn, and Twitter.',
    li2: '🔹 Search Engine Optimization (SEO) – Improve search rankings and increase organic traffic.',
    li3: '🔹 PaPay-Per-Click Advertising (PPC) – Run high-converting ads on Google and social media.',
    li4: '🔹 Content Marketing – Generate valuable blogs, videos, and infographics to attract customers.',
    li5: '🔹 Branding & Strategy – Build a strong brand identity with customized marketing solutions.',
    button: 'Learn More'
  },
]

function Service() {

  const [isHover, setIsHover] = useState(null)
  const [expandService, setExpandService] = useState(null)

  const handleExpand = (id) => {
    setExpandService((prev) => (prev === id ? null : id))
  }

  return (
    <>
    <div className="service section container" id='Services'>
      <div className="box-model">
        {serviceData.map((item) => (
           <div className={`box ${expandService === item.id ? 'expanded' : 'notexpand'}`} key={item.id}>
          <h2>{item.serviceHeading}</h2>
          <p>{item.description}</p>
          <button 
          onMouseOver={() => setIsHover(item.id)} 
          onMouseOut={() => setIsHover(null)}
          onClick={() => handleExpand(item.id)}>
            {expandService ? 'show less' : item.button} {isHover === item.id ? <FaArrowRight /> : null}
          </button>
          {expandService === item.id && (
            <div className='extraContent'>
            <p>{item.longDescription}</p>
            <p>{item.li1}</p>
            <p>{item.li2}</p>
            <p>{item.li3}</p>
            <p>{item.li4}</p>
            <p>{item.li5}</p>
            </div>
            )}
        </div>
        ))} 
      </div>
    </div>
    </>
  )
}

export default Service
