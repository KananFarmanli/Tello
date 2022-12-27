import React from "react";
import { Routes, Route, NavLink, Navigate,} from "react-router-dom";
const HeaderMain = () => {
  return (
    <div className="pt-3 flex w-full gap-2 items-center justify-between pr-2">
      <NavLink >
        <img src="../src/assets/icons/logo2.svg" alt="" />
      </NavLink>

        <form action="" className="max-w-[592px] py-[10px] px-4 w-full flex bg-mutedBg h-[40px] rounded-lg border border-muted-dark" >
            <button><img src="../src/assets/icons/searchl.svg " alt="" /></button>
            <input type="search" className='search bg-mutedBg px-6 h-[20px]  w-full    ' placeholder="Axtaris..."/>
            <button><img src="../src/assets/icons/close.svg " alt="" /></button>
        </form>


    <div className=" flex gap-6 items-center">
      <div className="min-w-[24px]"><img  className="w-full" src="../src/assets/icons/person.svg" alt="" /></div>
      <div className="min-w-[24px]"><img className="w-full" src="../src/assets/icons/heart.svg" alt="" /></div>
      <div className="flex gap-2 items-center">
        <img className="min-w-[24px]" src="../src/assets/icons/shopping-cart.svg" alt="" />
        <div className="rounded-full bg-success min-h-[20px] min-w-[20px] w-5 h-5 text-center text-white flex items-center justify-center">2</div>
      </div>

    </div>


    </div>
  );
};

export default HeaderMain;
