"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Profile from '../../public/assets/img/image1.jpg'; 
import Logo from '../../public/assets/img/logo2.png'; 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; // Import the CloseIcon
import { useRouter } from 'next/router';

const Navbar = () => {
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
    <div className='NavbarContainer flex justify-between w-full h-[60px]'>
      <nav className='flex justify-between w-full h-[60px]'>
        <div className="logo pl-4">
          <li className='logoIMG' onClick={() => scrollToSection('#Hero')}>
                <Image src={Logo} className='mt-1' alt="Your Image Alt Text" width={180} height={90} />
          </li>
        </div>
        <ul className="hidden xl:block md:block p-4">
          <div className="flex items-center">
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
              Blog
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
          </div>
        </ul>
        <div className='xl:hidden md:hidden sm:block p-4' onClick={toggleMobileMenu}>
          {isMobileMenuVisible ? <CloseIcon /> : <MenuIcon />}
        </div>
        <div className='absolute border-r-gray-950 w-[230px] h-[100vh] left-[-300px] top-0 bg-gray-300 transition-all ease-in-out' style={mobileMenuStyle}>
          <div className="image-container ">
            <Image src={Profile} alt="Your Image Alt Text" width={300} height={200} />
          </div>
          <ul className='mt-3 w-full justify-center text-center'>
            <li className={`px-2 py-1 ${activeNavItem === '#Hero' ? 'active' : ''}`} onClick={() => scrollToSection('#Hero')}>Home</li>
            <li className={`px-2 py-1 ${activeNavItem === '#About' ? 'active' : ''}`} onClick={() => scrollToSection('#About')}>About</li>
            <li className={`px-2 py-1 ${activeNavItem === '#Profession' ? 'active' : ''}`} onClick={() => scrollToSection('#Profession')}>Profession</li>
            <li className={`px-2 py-1 ${activeNavItem === '#Resume' ? 'active' : ''}`} onClick={() => scrollToSection('#Resume')}>Blog</li>
            <li className={`px-2 py-1 ${activeNavItem === '#Services' ? 'active' : ''}`} onClick={() => scrollToSection('#Services')}>Services</li>
            <li className={`px-2 py-1 ${activeNavItem === '#Contact' ? 'active' : ''}`} onClick={() => scrollToSection('#Contact')}>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

