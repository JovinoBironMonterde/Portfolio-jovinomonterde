import React from 'react'
import '../../public/assets/css/AboutStyle.css'
import Link from 'next/link';
import Image from 'next/image';
import AboutImage from '../../public/assets/img/image1.jpg'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RevealAnimation from '../components/RevealAnimation'

const About = () => {
  return (
    
    <div className='pageContentContaier px-4 pt-20' id='About'>
       <RevealAnimation />
        <div className="About-content">
          <div className="flex flex-[40%] justify-center reveal fade-bottom">
              <div className="aboutImage">
              <Image src={AboutImage} alt="Your Image Alt Text" width={300} height={200} />
              </div>
          </div>
          <div className="flex flex-[40%] justify-center items-center p-4">
              <div className="reveal fade-bottom ">
                <h3>About</h3>
              <p>Hello! I&#39;m <b>Jovi Monterde</b>, a passionate frontend developer with a love for creating beautiful and user-friendly web experiences. With over 1 year of experience in the field, I&#39;ve had the privilege of working on a wide range of projects, from single-page applications to complex e-commerce platforms.</p><br/>
<p>I&#39;m always open to new opportunities and collaborations. If you have a project in mind or just want to chat about all things web development, feel free to reach out. Let&#39;s work together to bring your ideas to life on the web!</p>

                <div className='mt-4'>
                  <button className='downloadBTN'><a className="linked btnlinked" type="button" href="https://drive.google.com/file/d/1honkjERyuSFCn6T7MKCMFzQdl0-pt0B3/view" target="_blank"><span>Download CV</span></a></button>
                  <a href="https://www.facebook.com/jhovi.norib" target="_blank" className='socialAcout '><FacebookIcon /></a>
                  <a href="https://github.com/JovinoBironMonterde" target="_blank" className='socialAcout '><GitHubIcon /></a>
                  <a href="https://www.linkedin.com/in/jovinobironmonterde/" target="_blank" className='socialAcout '><LinkedInIcon /></a>
                  {/* <a href="https://www.onlinejobs.ph/jobseekers/info/1887523" target="_blank" className='socialAcout '><LinkedInIcon /></a> */}
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default About
