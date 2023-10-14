import React from 'react'
import '../../public/assets/css/ServiceStyle.css'
import { IconCode, IconDeviceMobile, IconSettingsCode   } from '@tabler/icons-react';

const Services = () => {
  return (
    <div className='service-section pageContentContaier' id='Services'>
         <div className="service-container">
                <div className="service-content">
                    <div className="service-title">
                        <h3>My Service</h3>
                    </div>

                    <div className="divBox-con reveal fade-bottom">
                        <div className="divBox reveal">
                            <div className="flex items-center justify-between">
                              <span className='serviceTitle'>UI/UX Design Implementation</span>
                              <div className="serviceicon"><IconCode width={60} height={60}/></div>
                            </div>
                            <div className="text-left">
                            <div className="serviceInfo">
                              <p>I can transform UI/UX designs into interactive web pages using HTML, CSS, and JavaScript. My focus is on creating visually appealing and user-friendly interfaces based on design mockups and wireframes.</p>
                            </div>
                           </div>
                        </div>
                        <div className="divBox reveal">
                           <div className="flex items-center justify-between">
                           <span className='serviceTitle'>Responsive Web Design</span>
                                 <div className="serviceicon mobile"><IconDeviceMobile width={60} height={60}/></div>
                           </div>
                            <div className="text-left">
                                <div className="serviceInfo">
                                    <p>Craft websites that provide an optimal user experience on all devices, from desktops to tablets and smartphones, ensuring seamless navigation and interaction.</p>
                                </div>
                            </div>
                        </div>
                        <div className="divBox reveal">
                        <div className="flex items-center justify-between">
                           <span className='serviceTitle'>Support and Maintenance</span>
                                 <div className="serviceicon mobile"><IconSettingsCode width={60} height={60}/></div>
                           </div>
                              <div className="text-left">
                                <p>Provide ongoing support and maintenance services to keep your website updated, secure, and running smoothly, allowing you to focus on your core business.</p>
                              </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Services
