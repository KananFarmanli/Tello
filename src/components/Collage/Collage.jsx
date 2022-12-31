import React from 'react';
import Watch  from "../../assets/imgs/Assist/watchBanner.svg";
import Wallet  from "../../assets/imgs/Assist/walletBanner.svg";
import Mobile  from "../../assets/imgs/Assist/mobileBanner.svg";

function Collage(props) {
    return (
        <div className=' relative my-container py-6 md:py-16 grid  grid-cols-1  sm:grid-cols-2 gap-x-3 gap-y-3  lg:gap-y-4 lg:gap-x-8 md:grid-rows-2 '>




            <div className="sm:row-span-2  w-full  relative">
            
            <div className='text-xs lg:text-base flex flex-col gap-3   pt-3 pl-3 lg:pt-6 lg:pl-6 absolute'>
                <h1 className=' text-sm lg:text-2xl font-medium'>Telefon</h1>
                <p className='font-light'>Məhsul sayı: 322</p>
                <p className='text-edit font-light'>Məhsullara keçid</p>
            </div> 
            <img className='w-full xs:h-[300px] sm:h-auto xs:object-cover xs:object-[50%_70%] sm:object-center  ' src={Mobile} alt="" />



            </div>


            <div className="w-full relative">
            <div className='text-xs lg:text-base flex flex-col gap-3 pt-3 pl-3 lg:pt-6 lg:pl-6 absolute'>
                <h1 className=' text-sm lg:text-2xl font-medium'>Smart Saat</h1>
                <p className='font-light'>Məhsul sayı: 322</p>
                <p className='text-edit font-light'>Məhsullara keçid</p>
            </div> 
            <img className='w-full ' src={Watch} alt="" />



            
            </div>


            <div className="w-full relative">
            <div className='text-xs lg:text-base flex flex-col gap-3 pt-3 pl-3 lg:pt-6 lg:pl-6 absolute'>
                <h1 className='text-sm lg:text-2xl font-medium'>Aksesuar</h1>
                <p className='font-light'>Məhsul sayı: 322</p>
                <p className='text-edit font-light'>Məhsullara keçid</p>
            </div> 
            <img className='w-full ' src={Wallet} alt="" />

         
            </div>


        </div>
    );
}

export default Collage;

