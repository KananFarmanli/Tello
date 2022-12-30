import React from 'react';
import { ReactComponent as CopyrightIcon } from "../../assets/icons/copyright.svg";

const Copyright = () => {
    return (


        <div className='flex flex-col  md:flex-row justify-around md:justify-between items-center border-t border-t-white/10 px-[18px] lg:px-[38px] h-[68px]'>

                <div className='flex self-center place-self-center items-center gap-3 lg:pl-[74px]' >
                <CopyrightIcon className='w-4 h-4'/>  PeojectX 2021. Bütün hüquqlar qorunur.
                </div>

                <div className='flex  gap-10 -order-1 md:-order-none  -mt-20 md:mt-0'>
                    <p>Qaydalar və şərtlər</p>
                    <p>Məxfilik siyasəti</p>

                </div>


        </div>

        
    );
};

export default Copyright;