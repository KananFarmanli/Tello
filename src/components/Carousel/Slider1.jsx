import React from 'react';
import Carousel from "nuka-carousel/lib/carousel";

const Slider = () => {
    return (
        <Carousel
        wrapAround={true}
        swiping={true}
        autoplay={true}
        dragging={true}
        autoplayInterval={3000}
        disableEdgeSwiping={false}
        pauseOnHover={true}
        speed={500}
        defaultControlsConfig={{
          containerClassName:"df",
          prevButtonStyle: {
            display: "none",
          },
          nextButtonStyle: {
            display: "none",
          },
         
        }}
      >
        <div className="relative bg-styling  flex justify-end items-end">
            <div className="  bg-styling bg-[url('../src/assets/imgs/Slider1/slide.svg')] blur-3xl absolute top-0 z-[1]">  
            </div>
            <div className="bg-transparent w-full h-full relative z-[2] flex flex-col sm:flex-row  items-center justify-center px-[15px] sm:px-[20px] md:px-[50px] lg:px-[75px]">
            
            <div className="bg-transparent   flex  flex-col gap-4 items-center sm:items-start justify-center text-center sm:text-left">
            <h1 className=" text-4xl  sm:text-3xl  md:text-5xl font-semibold ">Buy & Sell <br/>
              What's Now & Next</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, magni.</p>
            </div>
            <img className="pointer-events-none w-[300px]  sm:w-[300px] md:w-[400px] lg:w-[550px] h-auto" src="../src/assets/imgs/Slider1/iphonesslide.svg"alt="" />
            </div>
        </div>
 
       
       
        <div className="w-screen h-[450px]  sm:h-[350px] md:h-[500px] lg:h-[652px] flex flex-col sm:flex-row justify-evenly items-center px-[15px] sm:px-[20px] md:px-[50px] lg:px-[75px]">
            <div className="bg-transparent w-full h-full  flex  flex-col gap-4 items-center sm:items-start justify-center text-center sm:text-left ">
            <h1 className=" grow-0 text-4xl pt-8 sm:py-0 sm:text-3xl  md:text-5xl font-semibold">Elagantligin son noqtesi</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, magni.</p>
            </div>
            <img className=" pointer-events-none w-[400px]  sm:w-[300px] md:w-[450px] lg:w-[650px] xl:w-full h-auto" src="../src/assets/imgs/Slider1/galaxyslide.webp" alt="" />
        </div>

        <div className="w-screen h-[450px]  sm:h-[350px] md:h-[500px] lg:h-[652px] flex flex-col gap-6 sm:gap-10 sm:flex-row justify-center sm:justify-evenly items-center px-[15px] sm:px-[20px] md:px-[50px] lg:px-[75px]">
            <img className=" pointer-events-none w-[300px]  sm:w-[300px] md:w-[450px] lg:w-[550px] h-auto" src="../src/assets/imgs/Slider1/watchslide.png" alt="" />
            <div className="bg-transparent   flex  flex-col gap-4 items-center sm:items-end justify-center text-center sm:text-left">
            <h1 className=" text-4xl  sm:text-3xl  md:text-5xl font-semibold">Imtahanlari ugurla kec!</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, magni.</p>
            </div>


        </div>
      </Carousel>
    );
};

export default Slider;