import React from 'react'
import '../../public/assets/css/ProjectStyle.css'
import Image from 'next/image';
import nextjsIcon from '../../public/assets/img/nextjs2.png'; 
import laraverICon from '../../public/assets/img/laravel.png'; 
import htmlIcon from '../../public/assets/img/html.png'; 
import cssIcon from '../../public/assets/img/css.png'; 
import bootstrapIcon from '../../public/assets/img/bootstrap.png';
import wordpressIcon from '../../public/assets/img/wp.png';
import Webflow from '../../public/assets/img/WEB.png';
import jsIcon from '../../public/assets/img/js.png';
import lamplight from '../../public/assets/img/lamplight.png';
import kylin from '../../public/assets/img/kylin.png';
import Losangeles from '../../public/assets/img/projec1.png';
import wordpress from '../../public/assets/img/stavick.png';
import BURGERBISTRO from '../../public/assets/img/BURGERBISTRO.png';
import avails from '../../public/assets/img/avails2.png';
import apchu from '../../public/assets/img/apchu.png';
import Sprout from '../../public/assets/img/sprout2.png'
import mimnu from '../../public/assets/img/mimnu.png';;




const Projects = () => {
  return (
    <div className='pageContentContaier py-20' id='Projects'>
     <div className="project-container">
            {/* <h5>Projects</h5> */}
            <div className="projectCon">
                <div className="project">
                  <Image src={lamplight} alt="Next.js" width={500} />
                    <div className="project-text">
                        <h5>Lamp Light Page</h5>
                       <div className="imgCon">
                            <div className="stacks mx-2">
                                {/* <div className="img"><img src="./img/nextjs.png" alt="" width="100%"></div> */}
                                <Image src={nextjsIcon} alt="Next.js" width={20} height={20} />
                                
                            </div>
                            <div className="stacks mx-2">
                              <Image src={htmlIcon} alt="Next.js" width={20} height={20} />
                                {/* <div className="img"><img src="./img/html.png" alt="" width="100%"></div> */}
                               
                            </div>
                            <div className="stacks mx-2">
                              <Image src={cssIcon} alt="Next.js" width={20} height={20} />
                                {/* <div className="img"><img src="./img/css.png" alt="" width="100%"></div> */}
                                
                            </div>
                            <div className="stacks mx-2">
                              <Image src={bootstrapIcon} alt="Next.js" width={20} height={20} />
                                {/* <div className="img"><img src="./img/bootstrap.png" alt="" width="100%"></div> */}
                               
                            </div>
                            <div className="stacks mx-2">
                              <Image src={jsIcon} alt="Next.js" width={20} height={20} />
                                {/* <div className="img"><img src="./img/js.png" alt="" width="100%"></div>  */}
                               
                            </div> 
                    </div>
                    <div className="div-btn">
                        <a href="https://github.com/JovinoBironMonterde/Lamplight_mobileSystem" target="_blank">View Code</a>
                        {/* <!-- <a href="https://newlamplight-project.vercel.app/" target="_blank">View Project</a> --> */}
                    </div>
                    </div>
                </div>
                <div className="project">
                  <Image src={kylin} alt="Next.js" width={500} />
                    <div className="project-text">
                        <h5>Kylin Project</h5>
                       <div className="imgCon">
                            <div className="stacks mx-2">
                              <Image src={htmlIcon} alt="Next.js" width={20} height={20} />      
                            </div>
                            <div className="stacks mx-2">
                              <Image src={cssIcon} alt="Next.js" width={20} height={20} />   
                            </div>
                            <div className="stacks mx-2">
                              <Image src={bootstrapIcon} alt="Next.js" width={20} height={20} />  
                            </div>
                            <div className="stacks mx-2">
                              <Image src={jsIcon} alt="Next.js" width={20} height={20} />
                            </div> 
                    </div>
                    <div className="div-btn">
                    <a href="https://github.com/JovinoBironMonterde/LoanSystem_project" target="_blank">View Code</a>
                        <a href="https://jovinobironmonterde.github.io/kylin_sample_project/" target="_blank">View Project</a>
                    </div>
                    </div>
                </div>
                <div className="project">
                  <Image src={Losangeles} alt="Next.js" width={500} />
                    <div className="project-text">
                        <h5>Losangeles Mountains</h5>
                       <div className="imgCon">
                            <div className="stacks mx-2">
                              <Image src={htmlIcon} alt="Next.js" width={20} height={20} />      
                            </div>
                            <div className="stacks mx-2">
                              <Image src={cssIcon} alt="Next.js" width={20} height={20} />   
                            </div>
                            <div className="stacks mx-2">
                              <Image src={bootstrapIcon} alt="Next.js" width={20} height={20} />  
                            </div>
                            <div className="stacks mx-2">
                              <Image src={jsIcon} alt="Next.js" width={20} height={20} />
                            </div> 
                    </div>
                    <div className="div-btn">
                      <a href="https://github.com/JovinoBironMonterde/losangeles_CT_Skill-test" target="_blank">View Code</a>
                      <a href="https://jovinobironmonterde.github.io/losangeles_CT_Skill-test/" target="_blank">View Project</a>
                    </div>
                    </div>
                </div>
                <div className="project">
                  <Image src={wordpress} alt="Next.js" width={500} />
                    <div className="project-text">
                        <h5>Stavick Studios</h5>
                       <div className="imgCon">
                            <div className="stacks mx-2">
                              <Image src={wordpressIcon} alt="Next.js" width={20} height={20} />      
                            </div>
                            <div className="stacks mx-2">
                              <Image src={cssIcon} alt="Next.js" width={20} height={20} />   
                            </div>
                    </div>
                    <div className="div-btn">
                        <a href="https://dev.stavickstudios.com/" target="_blank">View Project</a>
                    </div>
                    </div>
                </div>
                <div className="project">
                  <Image src={BURGERBISTRO} alt="Next.js" width={500} />
                    <div className="project-text">
                        <h5>Burger Bistro</h5>
                       <div className="imgCon">
                            <div className="stacks mx-2">
                              <Image src={Webflow} alt="Next.js" width={20} height={20} />      
                            </div>
                            <div className="stacks mx-2">
                              <Image src={cssIcon} alt="Next.js" width={20} height={20} />   
                            </div>
                    </div>
                    <div className="div-btn">
                      <a href="https://sample-page-25e41f.webflow.io/" target="_blank">View Project</a>
                    </div>
                    </div>
                </div>
                <div className="project">
                  <Image src={avails} alt="Next.js" width={500} />
                    <div className="project-text">
                        <h5>Avails</h5>
                       <div className="imgCon">
                            <div className="stacks mx-2">
                              <Image src={laraverICon} alt="Next.js" width={20} height={20} />      
                            </div>
                            <div className="stacks mx-2">
                              <Image src={htmlIcon} alt="Next.js" width={20} height={20} />      
                            </div>
                            <div className="stacks mx-2">
                              <Image src={cssIcon} alt="Next.js" width={20} height={20} />   
                            </div>
                            <div className="stacks mx-2">
                              <Image src={bootstrapIcon} alt="Next.js" width={20} height={20} />  
                            </div>
                            <div className="stacks mx-2">
                              <Image src={jsIcon} alt="Next.js" width={20} height={20} />
                            </div> 
                    </div>
                    <div className="div-btn">
                      <a href="https://miigigs.com/" target="_blank">View Project</a>
                    </div>
                    </div>
                </div>
                <div className="project">
                  <Image src={apchu} alt="Next.js" width={500} />
                    <div className="project-text">
                        <h5>Apchu</h5>
                       <div className="imgCon">
                            <div className="stacks mx-2">
                              <Image src={laraverICon} alt="Next.js" width={20} height={20} />      
                            </div>
                            <div className="stacks mx-2">
                              <Image src={htmlIcon} alt="Next.js" width={20} height={20} />      
                            </div>
                            <div className="stacks mx-2">
                              <Image src={cssIcon} alt="Next.js" width={20} height={20} />   
                            </div>
                            <div className="stacks mx-2">
                              <Image src={bootstrapIcon} alt="Next.js" width={20} height={20} />  
                            </div>
                            <div className="stacks mx-2">
                              <Image src={jsIcon} alt="Next.js" width={20} height={20} />
                            </div> 
                    </div>
                    <div className="div-btn">
                      <a href="https://www.apccdc.com/" target="_blank">View Project</a>
                    </div>
                    </div>
                </div>
                <div className="project">
                  <Image src={Sprout} alt="Next.js" width={500} />
                    <div className="project-text">
                        <h5>Sprout Catering</h5>
                       <div className="imgCon">
                            <div className="stacks mx-2">
                              <Image src={laraverICon} alt="Next.js" width={20} height={20} />      
                            </div>
                            <div className="stacks mx-2">
                              <Image src={htmlIcon} alt="Next.js" width={20} height={20} />      
                            </div>
                            <div className="stacks mx-2">
                              <Image src={cssIcon} alt="Next.js" width={20} height={20} />   
                            </div>
                            <div className="stacks mx-2">
                              <Image src={bootstrapIcon} alt="Next.js" width={20} height={20} />  
                            </div>
                            <div className="stacks mx-2">
                              <Image src={jsIcon} alt="Next.js" width={20} height={20} />
                            </div> 
                    </div>
                    <div className="div-btn">
                      <a href="https://sprout.avails.com.au/authentication/login" target="_blank">View Project</a>
                    </div>
                    </div>
                </div>
                <div className="project">
                  <Image src={mimnu} alt="Next.js" width={500} />
                    <div className="project-text">
                        <h5>Mimnu E-commerce</h5>
                       <div className="imgCon">
                            <div className="stacks mx-2">
                              <Image src={laraverICon} alt="Next.js" width={20} height={20} />      
                            </div>
                            <div className="stacks mx-2">
                              <Image src={htmlIcon} alt="Next.js" width={20} height={20} />      
                            </div>
                            <div className="stacks mx-2">
                              <Image src={cssIcon} alt="Next.js" width={20} height={20} />   
                            </div>
                            <div className="stacks mx-2">
                              <Image src={bootstrapIcon} alt="Next.js" width={20} height={20} />  
                            </div>
                            <div className="stacks mx-2">
                              <Image src={jsIcon} alt="Next.js" width={20} height={20} />
                            </div> 
                    </div>
                    <div className="div-btn">
                      <a href="https://mimnu.com" target="_blank">View Project</a>
                    </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Projects
