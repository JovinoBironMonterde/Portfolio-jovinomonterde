"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Profile from '../../public/assets/img/image1.jpg'; 
import Logo from '../../public/assets/img/logo2.png'; 
import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconBrandYoutube , IconCopyright   } from '@tabler/icons-react';


const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState<string | null>('#');


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navBarClass = isScrolled ? 'nav sticky mb-4 top-0 bg-blue-400' : 'nav sticky mb-4 top-0 bg-slate-400';

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  const mobileMenuStyle = {
    left: isMobileMenuVisible ? '0px' : '-300px',
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuVisible(false); // Close the mobile menu
    setActiveNavItem(sectionId);
  };

  return (
    <div className='Footer  pt-8'>
      <div className="FooterContent">
        {/* <div className='text-left flex justify-center items-center'>
          <li className='footerImage' onClick={() => scrollToSection('#Hero')}>
                <Image src={Logo} className='mt-1' alt="Your Image Alt Text" width={180} height={90} />
          </li>
        </div> */}
        <div className="footerMenu">
          <div className="text-left ">
            <h6 className='px-2'>Explore</h6>
            <div className="items-left ">
              <ul>
              <li
                className={`px-2 py-1 ${activeNavItem === '#Hero' ? 'active' : ''}`}
                onClick={() => scrollToSection('#Hero')}
              >
                Home
              </li>
              <li
                className={`px-2 py-1 ${activeNavItem === '#About' ? 'active' : ''}`}
                onClick={() => scrollToSection('#About')}
              >
                About
              </li>
              <li
                className={`px-2 py-1 ${activeNavItem === '#Profession' ? 'active' : ''}`}
                onClick={() => scrollToSection('#Profession')}
              >
                Profession
              </li>
              <li
                className={`px-2 py-1 ${activeNavItem === '#Resume' ? 'active' : ''}`}
                onClick={() => scrollToSection('#Resume')}
              >
                <a href="https://drive.google.com/file/d/1E0aMGCoKj6dtNwpJJ94jbAkH6DrXgN3M/view" target="_blank">Resume</a>
              </li>
              <li
                className={`px-2 py-1 ${activeNavItem === '#Services' ? 'active' : ''}`}
                onClick={() => scrollToSection('#Services')}
              >
                Services
              </li>
              <li
                className={`px-2 py-1 ${activeNavItem === '#Contact' ? 'active' : ''}`}
                onClick={() => scrollToSection('#Contact')}
              >
                Contact
              </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footerMenu">
          <div className='text-left'>
            <h6>Visit</h6>
            <ul>
            <li><a href="https://jovinobironmonterde.github.io/kylin_sample_project/" target="_blank">Kylin Project</a></li>
            <li><a href="https://jovinobironmonterde.github.io/losangeles_CT_Skill-test/" target="_blank">Losangeles Mountains</a></li>
            <li><a href="https://dev.stavickstudios.com/" target="_blank">Stavick Studios</a></li>
            <li><a href="https://sample-page-25e41f.webflow.io/" target="_blank">Burger Bistro</a></li>
            <li><a href="https://miigigs.com/" target="_blank">Avails</a></li>
            <li><a href="https://www.apccdc.com/" target="_blank">Apchu</a></li>
            <li><a href="https://sprout.avails.com.au/authentication/login" target="_blank">Sprout Catering</a></li>
            <li> <a href="https://mimnu.com" target="_blank">Mimnu E-commerce</a></li>
            </ul>
          </div>
        </div>

        <div className="footerMenu">
          <div className="text-left">
            <h6>Follow</h6>
            <ul>
              <li className='flex items-center'><IconBrandFacebook /><a href="https://www.facebook.com/TiborsTV" target="_blank">Tibors TV</a></li>
              <li className='flex items-center'><IconBrandFacebook/><a href="https://www.facebook.com/MonterdeBrothersTV" target="_blank">Monterde Brother</a></li>
              <li className='flex items-center'><IconBrandInstagram/><a href="https://www.facebook.com/MonterdeBrothersTV" target="_blank">Jhovi1993</a></li>
              <li className='flex items-center'><IconBrandTiktok/><a href="www.tiktok.com/@tibors_tv" target="_blank">Tibors TV</a></li>
              <li className='flex items-center'><IconBrandYoutube/><a href="https://www.youtube.com/@monterdebrotherstv6640" target="_blank">MONTERDE BROTHER&lsquo;S TV</a></li>
            </ul>
          </div>
        </div>

        
        <div className="footerMenu">
          <div className="text-left">
            <h6>Blog</h6>
            <ul>
              <span className='blogtext'>Coming soon!</span>
              {/* <li className='flex items-center'><IconBrandFacebook/><a href="https://www.facebook.com/MonterdeBrothersTV" target="_blank">Monterde Brother</a></li>
              <li className='flex items-center'><IconBrandInstagram/><a href="https://www.facebook.com/MonterdeBrothersTV" target="_blank">Jhovi1993</a></li>
              <li className='flex items-center'><IconBrandTiktok/><a href="www.tiktok.com/@tibors_tv" target="_blank">Tibors TV</a></li>
              <li className='flex items-center'><IconBrandYoutube/><a href="https://www.youtube.com/@monterdebrotherstv6640" target="_blank">MONTERDE BROTHER'S TV</a></li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="developText  py-4  bg-zinc-900">
          <span className='flex items-center'><IconCopyright/>2023 | Developed by: Jovino Biron Monterde</span>
      </div>
    </div>
  )
}

export default Footer
