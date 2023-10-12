"use client";
import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import {
  IconSend,
  IconDeviceMobile,
  IconBrandMessenger,
  IconBrandWhatsapp,
  IconAt,
  IconBrandTwitter,
  IconBrandInstagram,
} from '@tabler/icons-react';
import '../../public/assets/css/ContactStyle.css';

const Contact = () => {
  const [tooltip, setTooltip] = useState<string | null>(null);

  const handleMouseEnter = (text: string) => {
    setTooltip(text);
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };
  return (
    <div className='px-2 py-20' id="Contact">
      <div className="w-full text-center"><h4>Get In Touch</h4></div>
      <br />
      <div className='w-full'>
        <div className="formContainer ">
          <div className='formcontent'>
            <div className='text-center'>
              <span className='flex items-center justify-center'><IconDeviceMobile />09664390844(Globe)</span>
              <span className='flex items-center justify-center'><IconDeviceMobile />09704566075(Smart)</span><br />
              <span className='flex items-center justify-center'><IconAt />jovinomonterde.portfolio@gmail.com</span>
              <div className="flex items-center justify-evenly py-4 sm:w-full">
                <a
                  href="https://www.facebook.com/messages/"
                  target="_blank"
                  onMouseEnter={() => handleMouseEnter('Messenger')}
                  onMouseLeave={handleMouseLeave}
                >
                  <IconBrandMessenger className='contactIcon' />
                </a>
                <a
                  href="#"
                  target="_blank"
                  onMouseEnter={() => handleMouseEnter('WhatsApp')}
                  onMouseLeave={handleMouseLeave}
                >
                  <IconBrandWhatsapp className='contactIcon' />
                </a>
                <a
                  href="#"
                  target="_blank"
                  onMouseEnter={() => handleMouseEnter('Twitter')}
                  onMouseLeave={handleMouseLeave}
                >
                  <IconBrandTwitter className='contactIcon' />
                </a>
                <a
                  href="https://www.instagram.com/jhovi1993/"
                  target="_blank"
                  onMouseEnter={() => handleMouseEnter('Instagram')}
                  onMouseLeave={handleMouseLeave}
                >
                  <IconBrandInstagram className='contactIcon' />
                </a>
                {tooltip && <div className="tooltip">{tooltip}</div>}
              </div>
            
            </div>
          </div>
          <div className="deviderDiv"><span className='OR-text'>OR</span></div>
          <div className="formcontent">
            <form action="https://getform.io/f/1a764627-c70f-4d42-aa68-506700290750" method="POST" className='myform'>
              <div className="m-2">
                <input className='formControl' placeholder='Full name' type="text" name="name" required /><br />
              </div>
              <div className="m-2">
                <input className='formControl' placeholder='Email' type="email" name="email" required /><br />
              </div>
              <div className="m-2">
                <textarea className='formControl' placeholder='Messages' name="message" id="" required></textarea><br />
              </div>
              <div className="m-2 flex">
                <input type="hidden" name="_gotcha" className='d-none' />
                <select name="Status" className='form-select '>
                  <option value="one-year">Status</option>
                  <option value="hired">Hired</option>
                  <option value="interview">Interview</option>
                  <option value="proposal">Proposal</option>
                  <option value="inquire">Inquire</option>
                </select>
                <button className='btnsend' type="submit"><IconSend className='Iconsend' />Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
