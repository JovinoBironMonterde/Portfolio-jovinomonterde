"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import '../../public/assets/css/HeroStyle.css'
// import RippleButton from '../components/RippleButton'
import HeroImage from '../../public/assets/img/image1.jpg'; 

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuVisible(false); // Close the mobile menu

  };

  return (
    <div className='HeroSection pageContentContaier px-2 py-20' id='Hero'>
      <div className="text-center justify-center my-10">
        {/* <div className="flex justify-center items-center">
          <h3>Front</h3>
          <div className="HeroImage">
            <Image src={HeroImage} alt="Your Image Alt Text" width={300} height={200} />
          </div>
          <h3>End</h3>
        </div>
        <h1>Jhovi Monterde</h1> */}
        <div className="HeroImage">
          <Image src={HeroImage} alt="Your Image Alt Text" width={300} height={200} />
        </div>
        <h1>Jovino Monterde</h1><br />
        <h3>FrontEnd Web Developer </h3><br />
        <p>I’m focused on building responsive front-end web applications integrating back-end technologies.</p>
        <div className="heroButton">
          <button className='cstmBtn' onClick={() => scrollToSection('#Projects')}><span>Project</span></button>
          <button className='cstmBtn'><span>Hire Me!</span></button>
        </div>
     </div>
    </div>
  )
}

export default Hero
