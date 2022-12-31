import React from 'react';
import Box  from "../../assets/imgs/Assist/box.svg";
import Card  from "../../assets/imgs/Assist/card-pos.svg";
import Medal  from "../../assets/imgs/Assist/medal-star.svg";

function Pros() {
    return (
        <div className='my-container flex flex-col sm:flex-row justify-between items-center py-6 text-center gap-y-10'>
            
            <div className='flex flex-col gap-10 justify-center items-center'>
                <img src={Box} alt="" />
                <h1 className='font-medium text-xl'>Çatdırılma</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
            <div className='flex flex-col gap-10 justify-center items-center'>
                <img src={Card} alt="" />
                <h1 className='font-medium text-xl'>Çatdırılma</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>
            <div className='flex flex-col gap-10 justify-center items-center'>
                <img src={Medal} alt="" />
                <h1 className='font-medium text-xl'>Çatdırılma</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
            </div>



        </div>
    );
}

export default Pros;