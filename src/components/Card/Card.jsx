import React from 'react';
import Iphone  from "../../assets/imgs/Assist/iphone.svg";

function Card({name, model, size, color, price, discount}) {

    let onsale = "text-base text-priceColor-true"
    let oldprice = "text-sm  text-priceColor-false ine-through"

    return (
        <div className="pointer-events-none flex flex-col justify-center items-center sm:gap-6 min-w-[191px] min-h-[284px] md:min-w-[286px] md:min-h-[386px] rounded-lg drop-shadow-md bg-white  p-4 sm:p-6">
            
            <img src={Iphone} alt="" />
            <div className='space-y-4 text-sm md:text-base '>
                <p className='flex flex-wrap gap-x-2 '> <span>iPhone</span> <span>13</span> <span> 256 gb</span> <span> midnight</span></p>
                <p> <span> 1360 $</span> <span></span> </p>
            </div>
        </div>
    );
}

export default Card;