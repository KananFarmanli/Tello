import React from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import Acer from "../../assets/imgs/Slider2/acer.svg"
import Bosch from "../../assets/imgs/Slider2/bosch.svg"
import Electrolux from "../../assets/imgs/Slider2/electrolux.svg"
import Gorenje from "../../assets/imgs/Slider2/gorenje.svg"
import Hp from "../../assets/imgs/Slider2/hp.svg"
import Philips from "../../assets/imgs/Slider2/philips.svg"
import Toshiba from "../../assets/imgs/Slider2/toshiba.svg"






function Slider2() {
    var settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 2000,
   
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
       
        responsive: [
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint:768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,

            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
           
              
            }
          },
          {
            breakpoint: 475,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    
    return (
<div className=' xs:py-[15px]  sm:py-[15px] md:py-[20px]  lg:py-[35px] '>

<Slider {...settings}>

<div className="bg-white  xs:bg-transparent ">
             <img  className=' h-20 w-full xs:w-full xs:h-[50px] sm:h-[50px]  md:h-[60px] lg:h-[80px]' src={Electrolux} alt="" />
        </div>
        <div className="bg-white  xs:bg-transparent ">
             <img  className=' h-20 w-full xs:w-full xs:h-[50px] sm:h-[50px]  md:h-[60px] lg:h-[80px]' src={Philips}  alt="" />
        </div>
        <div className="bg-white  xs:bg-transparent ">
             <img  className=' h-20 w-full xs:w-full xs:h-[50px] sm:h-[50px]  md:h-[60px] lg:h-[80px]' src={Acer} alt="" />
        </div>
        <div className="bg-white  xs:bg-transparent ">
             <img  className=' h-20 w-full xs:w-full xs:h-[50px] sm:h-[50px]  md:h-[60px] lg:h-[80px]' src={Hp} alt="" />
        </div>
        <div className="bg-white  xs:bg-transparent ">
             <img  className=' h-20 w-full xs:w-full xs:h-[50px] sm:h-[50px]  md:h-[60px] lg:h-[80px]' src={Gorenje} alt="" />
        </div>
        <div className="bg-white  xs:bg-transparent ">
             <img className=' h-20 w-full xs:w-full xs:h-[50px] sm:h-[50px]  md:h-[60px] lg:h-[80px]'  src={Toshiba} alt="" />
        </div>
        <div className="bg-white  xs:bg-transparent ">
             <img className=' h-20 w-full xs:w-full xs:h-[50px] sm:h-[50px]  md:h-[60px] lg:h-[80px]' src={Bosch} alt="" />
        </div>
    
</Slider>

</div>
    );
}

export default Slider2;
