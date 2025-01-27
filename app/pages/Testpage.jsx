"use client";
import Image from 'next/image';
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../public/assets/css/TestStyle.css'
import AboutImage from '../../public/assets/img/avails.png'; 

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Testpage() {
const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: false,
centerMode: true,
centerPadding: "190px",
};

const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    appendDots: (dots) => (
      <div className="dots-wrapper">
        {dots}
      </div>
    ),
  };

return (
<div>
    <h2>React Slick Example</h2>
    <div className="divider_shape divider_overlap_above divider_shape-wave-02 w-full mb:h-24 tb:h-32 ds:h-48 text-white-500 opacity-100">
      <svg
        className="w-full h-full fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          className="fill-current"
          fillOpacity="1"
          d="M0,224L30,192C60,160,120,96,180,101.3C240,107,300,181,360,202.7C420,224,480,192,540,154.7C600,117,660,75,720,53.3C780,32,840,32,900,42.7C960,53,1020,75,1080,90.7C1140,107,1200,117,1260,101.3C1320,85,1380,43,1410,21.3L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 409.6 409.6">
      <path d="M409.602 341.336c0 37.7-30.567 68.266-68.266 68.266-37.703 0-68.266-30.567-68.266-68.266 0-37.703 30.563-68.266 68.266-68.266 37.7 0 68.266 30.563 68.266 68.266zM324.27 179.2c0 32.991-26.743 59.734-59.735 59.734-32.992 0-59.734-26.743-59.734-59.735 0-32.988 26.742-59.734 59.734-59.734 32.992 0 59.735 26.746 59.735 59.734zm-119.47 128c0 56.554-45.847 102.402-102.402 102.402C45.848 409.602 0 363.754 0 307.199c0-56.554 45.848-102.398 102.398-102.398 56.555 0 102.403 45.844 102.403 102.398zM170.672 85.336c0 47.129-38.207 85.336-85.336 85.336S0 132.465 0 85.336 38.207 0 85.336 0s85.336 38.207 85.336 85.336zM409.602 51.2c0 28.277-22.926 51.198-51.204 51.198-28.277 0-51.199-22.921-51.199-51.199C307.2 22.922 330.121 0 358.4 0c28.277 0 51.203 22.922 51.203 51.2zm-17.071 170.663c0 9.426-7.64 17.067-17.066 17.067-9.426 0-17.067-7.64-17.067-17.067 0-9.422 7.641-17.062 17.067-17.062s17.066 7.64 17.066 17.062zM264.535 59.734c0 14.141-11.46 25.602-25.601 25.602-14.137 0-25.598-11.461-25.598-25.602 0-14.136 11.46-25.597 25.598-25.597 14.14 0 25.601 11.46 25.601 25.597zm0 0" fill="url(&quot;#SvgjsLinearGradient1042&quot;)">
        </path><defs><linearGradient id="SvgjsLinearGradient1042"><stop stop-color="#f6d365" offset="0"></stop><stop stop-color="#fda085" offset="1"></stop></linearGradient></defs></svg>
    </div>
    <Slider {...settings}>
    <div className="slide-wrapper">
        <div className="items-box">
            <div className="image-wrapper">
                <Slider {...settings2}>
                    <div className="image-box">
                        <Image src={AboutImage} alt="Your Image Alt Text" className="content-image" /> 
                    </div>
                    <div className="image-box">
                        <Image src={AboutImage} alt="Your Image Alt Text" className="content-image" />
                    </div>
                    <div className="image-box">
                        <Image src={AboutImage} alt="Your Image Alt Text" className="content-image" />
                    </div>
                </Slider>
            </div>
            <div className="details-wrapper">
                <p>Details for Slide 1ghjghj</p>
            </div>
        </div>
    </div>

    <div className="slide-wrapper">
        <div className="items-box">
            <div className="image-wrapper">
                <Slider {...settings2}>
                    <div className="image-box">
                        <Image src={AboutImage} alt="Your Image Alt Text" className="content-image" /> 
                    </div>
                    <div className="image-box">
                        <Image src={AboutImage} alt="Your Image Alt Text" className="content-image" />
                    </div>
                    <div className="image-box">
                        <Image src={AboutImage} alt="Your Image Alt Text" className="content-image" />
                    </div>
                </Slider>
            </div>
            <div className="details-wrapper">
                <p>Details for Slide 1ghjghj</p>
            </div>
        </div>
    </div>

    <div className="slide-wrapper">
        <div className="items-box">
            <div className="image-wrapper">
                <Slider {...settings2}>
                    <div className="image-box">
                        <Image src={AboutImage} alt="Your Image Alt Text" className="content-image" /> 
                    </div>
                    <div className="image-box">
                        <Image src={AboutImage} alt="Your Image Alt Text" className="content-image" />
                    </div>
                    <div className="image-box">
                        <Image src={AboutImage} alt="Your Image Alt Text" className="content-image" />
                    </div>
                </Slider>
            </div>
            <div className="details-wrapper">
                <p>Details for Slide 1ghjghj</p>
            </div>
        </div>
    </div>
    </Slider>
</div>
);
}
