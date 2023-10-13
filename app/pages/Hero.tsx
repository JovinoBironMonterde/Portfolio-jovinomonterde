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
    <div className='HeroSection pageContentContaier px-4 py-20' id='Hero'>
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
        <h1 className='h1'>Jovino Monterde</h1><br />
        <h2 className='h2'>Jovino Monterde</h2>

        <h3 className='h3Frontendtxt'>Frontend Developer </h3><br />
       
        <p>I&#39;m focused on building responsive front-end web applications integrating back-end technologies.</p>
        <div className="heroButton">
          <button className='cstmBtn' onClick={() => scrollToSection('#Projects')}><span>Project</span></button>
          <button className='cstmBtn' onClick={() => scrollToSection('#Contact')}><span>Hire Me!</span></button>
        </div>
     </div>
    </div>
  )
}

export default Hero
