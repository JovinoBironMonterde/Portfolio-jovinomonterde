import React from 'react'

// import { useState, useEffect, FunctionComponent } from 'react';
import '../../public/assets/css/ProfessionStyle.css'
import { IconBrandFigma, IconBrandTrello } from '@tabler/icons-react';
// import ProgressBar from 'react-customizable-progressbar'


const Profession = () => {
    const percentage = 100; // Set your desired percentage here
  return (
    <div className='pageContentContaier pt-20' id='Profession'>
             <div className="exp-container ">
                 <div className="profession mb-11">
                     <div className="bar-container reveal">
                          <h4>Profession</h4>
                          <br />
                         <div className="barCon reveal fade-left">
                               <label>HTML</label>
                             <div className="bars">
                                 <div className="percent html"><span>95%</span></div>
                             </div>
                         </div>
                         <br />                 
                         <div className="barCon reveal fade-left">
                              <label>CSS</label>
                             <div className="bars">
                                 <div className="percent css"><span>95%</span></div>
                             </div>
                         </div>
                         <br />               
                         <div className="barCon reveal fade-left">
                              <label>Tailwind</label>
                             <div className="bars">
                                 <div className="percent tailwind"><span>85%</span></div>
                             </div>
                         </div>
                         <br /> 
                         <div className="barCon reveal fade-left">
                              <label>Bootstrap</label>
                             <div className="bars">
                                 <div className="percent bootstrap"><span>95%</span></div>
                             </div>
                         </div>
                         <br /> 
                         <div className="barCon reveal  fade-left">
                              <label>Javascript</label>
                             <div className="bars">
                                 <div className="percent javascript"><span>80%</span></div>
                             </div>
                         </div>
                         <br /> 
                         <div className="barCon reveal  fade-left">
                              <label>Jquery</label>
                             <div className="bars">
                                 <div className="percent Jquery"><span>80%</span></div>
                             </div>
                         </div>
                         <br /> 
                         <div className="barCon reveal fade-left">
                              <label>React js/Next js</label>
                             <div className="bars">
                                 <div className="percent reactnext"><span>75%</span></div>
                             </div>
                         </div>
                         <br /> 
                         <div className="barCon reveal fade-left">
                              <label>MUI</label>
                             <div className="bars">
                                 <div className="percent mui"><span>75%</span></div>
                             </div>
                         </div>
                         <br /> 
                         <div className="barCon reveal fade-left">
                             <label>Wordpress</label>
                            <div className="bars">
                                <div className="percent wordpress"><span>75%</span></div>
                            </div>
                        </div>
                        <br /> 
                         <div className="barCon reveal fade-left">
                              <label>Laravel</label>
                             <div className="bars">
                                 <div className="percent laravel"><span>50%</span></div>
                             </div>
                         </div>
                         <br /> 
                        <div className="barCon reveal fade-left">
                            <label>Webflow</label>
                            <div className="bars">
                                <div className="percent webflow"><span>75%</span></div>
                            </div>
                        </div>
                        <br /> 
                         {/* <div className="barCon reveal fade-left">
                              <label>VB.Net</label>
                             <div className="bars">
                                 <div className="percent vb"><span>80%</span></div>
                             </div>
                         </div>                   
                         <br />  */}
                         <div className="barCon reveal fade-left">
                             <label>Mysql</label>
                            <div className="bars">
                                <div className="percent mysql"><span>80%</span></div>
                            </div>
                        </div>
                        <br /> 
                        <div className="barCon reveal fade-left">
                             <label>Git</label>
                            <div className="bars">
                                <div className="percent git"><span>80%</span></div>
                            </div>
                        </div>
                        
                     </div>
                     {/* <div className="Circlebar-container mt-4 reveal mb-4" >
                        <div className="round-bar">
                            <div className='text-center mx-2 reveal fade-left'>
                              
                                <div className="outer figma">
                                    <div className="inner">
                                        <div className="icon"><i className="fa-brands fa-figma"></i></div>
                                    </div>
                                   
                                    <span className="Circlebar-percent">
                                        <IconBrandFigma />
                                        85%
                                    </span>
                                </div>
                            </div>
                            <div className='text-center mx-2 reveal fade-left'>
                               
                                <div className="outer figma">
                                    <div className="inner">
                                        <div className="icon"><i className="fa-brands fa-figma"></i></div>
                                    </div>
                                    <span className="Circlebar-percent">
                                        <IconBrandTrello/>
                                        75%
                                    </span>
                                </div>
                            </div>
                            <div className='text-center mx-2 reveal fade-left'>
                              
                                <div className="outer figma">
                                    <div className="inner">
                                        <div className="icon"><i className="fa-brands fa-figma"></i></div>
                                    </div>
                                    <span className="Circlebar-percent">75%</span>
                                </div>
                            </div>
                        </div>
                    </div> */} 
                 </div>
                 
                 <div className="experience">
                     <div className="experience-container ">
                           <h4>Experience</h4>
                         <div className="expCon reveal fade-bottom my-8">
                             <h5>Concentrix</h5>
                             <h5>September 2016 - December 2021</h5>
                             <h5>Security Control Officer</h5>
                             <p>Monitor and maintain surveillance systems, observe
                                 suspicious activity, alert authorities during security
                                 breaches, prepare incident reports, maintain
                                 equipment, comply with policies, and collaborate
                                 with security teams</p>
                         </div>
                         <div className="linr-hr2">
                             <hr/>
                         </div>
                          <div className="expCon reveal fade-bottom my-8">
                             <h5>Municipal Of Babatngon</h5>
                             <h5>February 2022 - June 2022</h5>
                             <h5>Office Clerk</h5>
                             <p>Assisting property owners and taxpayers with
                                 inquiries related to assessments, property values, tax
                                 calculations, and assessment appeals</p>
                         </div>
                         <div className="linr-hr2">
                             <hr/>
                         </div>
                         <div className="expCon reveal fade-bottom my-8">
                             <h5>Automation and Security, Inc.</h5>
                             <h5>September 2022 - November 2022</h5>
                             <h5>Office Admin</h5>
                             <p>Maintain organized and up-to-date files, documents,
                                 and records related to the company&#39;s operations,
                                 including customer orders, invoices, and contracts.</p>
                         </div>
                         <div className="linr-hr2">
                             <hr/>
                         </div>
                          <div className="expCon reveal fade-bottom my-8">
                             <h5>Telmo Solution</h5>
                             <h5>November 2022 - May 2023</h5>
                             <h5>Front-End Web Developer</h5>
                             <p>Take design mockups and translate them into clean,
                                 responsive, and pixel-perfect web interfaces. Write
                                 well-structured HTML, CSS, and JavaScript code to
                                 ensure smooth integration with backend systems.
                                 </p>
                         </div>
                         <div className="linr-hr2">
                             <hr/>
                         </div>
                          <div className="expCon reveal fade-bottom my-8">
                             <h5>Mimnu</h5>
                             <h5>May 2023 - October 2023</h5>
                             <h5>Front-End Web Developer (WFH)</h5>
                             <p>My role at Mimnu, an e-commerce site, I am responsible
                                 for designing each webpage with a strong emphasis on creating
                                  interactive and engaging user experiences. Additionally, 
                                  I ensure that these designs are seamlessly integrated
                                   into a mobile-responsive format, guaranteeing optimal
                                 functionality across various devices and enhancing the
                                  overall usability of the website.
                                 </p>
                         </div>
 
                         
                     </div>
                 </div>
             </div>
    </div>
  )
}

export default Profession
