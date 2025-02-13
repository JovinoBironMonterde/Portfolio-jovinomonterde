"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Profile from '../../public/assets/img/92953618154.png'; 
import Logo from '../../public/assets/img/logo2.png'; 
import MenuIcon from '@mui/icons-material/Menu';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import CloseIcon from '@mui/icons-material/Close'; 
import DarkModeToggle from '../components/DarkModeToggle'
import { IconMoonFilled, IconSunFilled  } from '@tabler/icons-react';
import BookIcon from '@mui/icons-material/Book';
// import { useRouter } from 'next/router';
import { IconHome2,IconAddressBook,IconFileCv, IconCertificate2 ,IconBriefcase, IconPhonePlus } from '@tabler/icons-react';

const Navbar = () => {
const [isScrolled, setIsScrolled] = useState(false);
const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
const [activeNavItem, setActiveNavItem] = useState<string | null>('#');
const [isDarkMode, setIsDarkMode] = useState(false);

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
  left: isMobileMenuVisible ? '0px' : '-120%',
};

const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  setIsMobileMenuVisible(false); // Close the mobile menu
  setActiveNavItem(sectionId);
};


// DARKMODE
const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);

  if (isDarkMode) {
    document.body.classList.remove('dark-mode');
    const mobilenavbar = document.querySelector('.mobilenavbar');
    if (mobilenavbar) {
      mobilenavbar.classList.remove('dark-mode');
    }
  } else {
    document.body.classList.add('dark-mode');
    const mobilenavbar = document.querySelector('.mobilenavbar');
    if (mobilenavbar) {
      mobilenavbar.classList.add('dark-mode');
    }
  }
}
return (
  <div className='NavbarContainer main-content  flex justify-between w-full h-[60px]'>
    <nav className='flex justify-between w-full h-[60px]'>
      <div className="logo flex items-center pl-4">
        <h3>Portfolio.</h3>
        {/* <li className='logoIMG' onClick={() => scrollToSection('#Hero')}>
              <Image src={Logo} className='mt-1' alt="Your Image Alt Text" width={180} height={90} />
        </li> */}
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
            <a href="https://drive.google.com/file/d/1HuCFRexErT1kxD5t3JY1SrtCa-xCIeN1/view?usp=sharing" target="_blank">Resume</a>
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
          {/* <li
            className={`px-2 py-1 ${activeNavItem === '#Blog' ? 'active' : ''}`}
          >
            Blog
          </li> */}
          {/* <li className='px-2 py-1'><Link href="https://mybogs-v2.vercel.app/">Blog</Link></li> */}
          {/* <div className="navdevider ">|</div>
          <div className="px-2 py-1 flex items-center"><DarkModeToggle /></div> */}
        </div>
      </ul>
      <div className='xl:hidden md:hidden sm:block p-4' onClick={toggleMobileMenu}>
        {isMobileMenuVisible ? <CloseIcon /> : <MenuIcon />}
      </div>
      <div className=' mobilenavbar absolute  w-[100%] h-[100vh] left-[-100%] top-0  transition-all ease-in-out' style={mobileMenuStyle}>
        <div className="flex justify-between items-center p-4 mb-3 ">
        <div className="px-2 py-1 flex items-center"><DarkModeToggle /></div>
        {/* <button className=' top-2 left-2' onClick={toggleMobileMenu}>
          <CloseIcon />
        </button> */}
        </div>
        <div className="image-container ">
          <Image src={Profile} alt="Your Image Alt Text" width={200} height={100} />
        </div>
        <div className='sidebarname text-center py-3'>
          <h4>Jovino Monterde</h4>
          <h5>Frontend Developer</h5>
        </div>

        <ul className='mt-5 w-full justify-center text-center'>
          <li className={`my-1 py-2 ${activeNavItem === '#Hero' ? 'active' : ''}`} onClick={() => scrollToSection('#Hero')}><IconHome2/>Home</li>
          <li className={`my-1 py-2 ${activeNavItem === '#About' ? 'active' : ''}`} onClick={() => scrollToSection('#About')}><IconAddressBook/>About</li>
          <li className={`my-1 py-2 ${activeNavItem === '#Profession' ? 'active' : ''}`} onClick={() => scrollToSection('#Profession')}><IconCertificate2/>Profession</li>
          <li className={`${activeNavItem === '#Resume' ? 'active' : ''}`} onClick={() => scrollToSection('#Resume')}> <a className='' href="https://drive.google.com/file/d/1C6LPiAlAbSmBBT2LiMAqqwi6vYHcJooO/view?usp=sharing" target="_blank"><IconFileCv/>Resume</a></li>
          <li className={`my-1 py-2 ${activeNavItem === '#Services' ? 'active' : ''}`} onClick={() => scrollToSection('#Services')}><IconBriefcase />Services</li>
          <li className={`my-1 py-2 ${activeNavItem === '#Contact' ? 'active' : ''}`} onClick={() => scrollToSection('#Contact')}><IconPhonePlus/>Contact</li>
          <li className=''><Link href="https://mybogs-v2.vercel.app/"><BookIcon />Blog</Link></li>
        </ul>
      </div>
    </nav>
  </div>
);
};

export default Navbar;

