import React from 'react';
import StaticCards1 from "../../assets/imgs/Assist/staticCards1.svg";
import StaticCards2  from "../../assets/imgs/Assist/staticCards2.svg";

function CardsOfTwo(props) {
    return (
        <div className='my-container flex flex-col gap-4 md:gap-6  xl:flex-row py-6'>
            <img  className='' src={StaticCards1} alt="" />
            <img className='' src={StaticCards2} alt="" />




        </div>
    );
}

export default CardsOfTwo;