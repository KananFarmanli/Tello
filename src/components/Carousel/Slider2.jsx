import React from 'react';
import Carousel from "nuka-carousel/lib/carousel";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';






function Slider2() {
    var settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 2000,
    
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
             <img  className=' h-20 w-full xs:w-full xs:h-[50px] sm:h-[50px]  md:h-[60px] lg:h-[80px]' src="../src/assets/imgs/Slider2/toshiba.svg" alt="" />
        </div>
        <div className="bg-white  xs:bg-transparent ">
             <img  className=' h-20 w-full xs:w-full xs:h-[50px] sm:h-[50px]  md:h-[60px] lg:h-[80px]' src="../src/assets/imgs/Slider2/acer.svg" alt="" />
        </div>
        <div className="bg-white  xs:bg-transparent ">
             <img  className=' h-20 w-full xs:w-full xs:h-[50px] sm:h-[50px]  md:h-[60px] lg:h-[80px]' src="../src/assets/imgs/Slider2/philips.svg" alt="" />
        </div>
        <div className="bg-white  xs:bg-transparent ">
             <img  className=' h-20 w-full xs:w-full xs:h-[50px] sm:h-[50px]  md:h-[60px] lg:h-[80px]' src="../src/assets/imgs/Slider2/bosch.svg" alt="" />
        </div>
        <div className="bg-white  xs:bg-transparent ">
             <img  className=' h-20 w-full xs:w-full xs:h-[50px] sm:h-[50px]  md:h-[60px] lg:h-[80px]' src="../src/assets/imgs/Slider2/electrolux.svg" alt="" />
        </div>
        <div className="bg-white  xs:bg-transparent ">
             <img className=' h-20 w-full xs:w-full xs:h-[50px] sm:h-[50px]  md:h-[60px] lg:h-[80px]'  src="../src/assets/imgs/Slider2/hp.svg" alt="" />
        </div>
        <div className="bg-white  xs:bg-transparent ">
             <img className=' h-20 w-full xs:w-full xs:h-[50px] sm:h-[50px]  md:h-[60px] lg:h-[80px]' src="../src/assets/imgs/Slider2/gorenje.svg" alt="" />
        </div>
    
</Slider>

</div>
    );
}

export default Slider2;


/* const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2005,
    cssEase: "linear"
  };
 */

        {/* <Carousel
     withoutControls={true}
        wrapAround={true}
        swiping={true}
        autoplay={true}
        cellAlign={'right'}
        cellSpacing={4}
        slidesToShow={7}
        autoplayInterval={5000}
        disableEdgeSwiping={false}
        pauseOnHover={true}
        speed={1000}
        style={{
            paddingTop:"20px",
            paddingBottom:"20px",
         
            // display:"flex",
            // justifyContent:"center",
            // alignItems:"center" 
            
    }}
        defaultControlsConfig={{
        pagingDotsClassName:"hidden",
          prevButtonStyle: {
            display: "none",
          },
          nextButtonStyle: {
            display: "none",
          },
          
         
        }}
      >
        <div className="pl-4">
             <img  src="../src/assets/imgs/Slider2/toshiba.svg" alt="" />
        </div>
        <div className="">
             <img   src="../src/assets/imgs/Slider2/acer.svg" alt="" />
        </div>
        <div className="">
             <img   src="../src/assets/imgs/Slider2/philips.svg" alt="" />
        </div>
        <div className="">
             <img   src="../src/assets/imgs/Slider2/bosch.svg" alt="" />
        </div>
        <div className="">
             <img   src="../src/assets/imgs/Slider2/electrolux.svg" alt="" />
        </div>
        <div className="">
             <img   src="../src/assets/imgs/Slider2/hp.svg" alt="" />
        </div>
        <div className="">
             <img  src="../src/assets/imgs/Slider2/gorenje.svg" alt="" />
        </div>
      </Carousel> */}