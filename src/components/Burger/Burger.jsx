import React from "react";

const Burger = ({burgerLogic}) => {

const basicStyle = "w-5 h-[2px] bg-black transition-all "
const firstLine = " rotate-45 absolute top-1/2 -translate-y-1/2"
const secondLine = " hidden "
const thirdLine = " -rotate-45 absolute top-1/2 -translate-y-1/2"


  return (

    <div className=" flex w-6 h-6 flex-col gap-[4.4px] justify-center items-center lg:hidden relative transition-all ">
     <span className={!burgerLogic? basicStyle : basicStyle + firstLine }></span>
     <span className={!burgerLogic? basicStyle : basicStyle + secondLine }></span>
     <span className={!burgerLogic? basicStyle : basicStyle + thirdLine }></span>
    </div>
  );
};

export default Burger;
