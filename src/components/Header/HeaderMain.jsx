import React, { useState } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Person } from "../../assets/icons/person.svg";
import { ReactComponent as Favorite } from "../../assets/icons/favorite.svg";
import { ReactComponent as Cart } from "../../assets/icons/cart.svg";
import { ReactComponent as Search } from "../../assets/icons/searchl.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import Burger from "../Burger/Burger";

const HeaderMain = ({burgerLogic, setBurgerLogic}) => {


  const burgerHandler = () => {
    setBurgerLogic((prevState) => !prevState);
  };

  return (
    <div className=" pt-3 flex w-full  gap-y-3  lg:gap-y-0   gap-x-9 items-center justify-between flex-wrap lg:flex-nowrap">





      
      <NavLink className="shrink-0 flex gap-7 lg:gap-0 items-center  ">
        <div className="w-full h-full z-30" onClick={burgerHandler}>
          <Burger burgerLogic={burgerLogic}  />
        </div>
        <Logo className="min-w-[134px] z-30" />
      </NavLink>

      <form
        action=""
        className=" order-2   lg:order-none  lg:max-w-[592px] py-[10px] px-4 w-full flex bg-mutedBg h-[40px] rounded-lg border border-muted-dark items-center"
      >
        <button>
          <Search />
        </button>
        <input
          type="search"
          className="search bg-mutedBg px-6 h-[20px]  w-full    "
          placeholder="Axtaris..."
        />
        <button>
          <Close />
        </button>
      </form>

      <div className=" flex gap-2 md:gap-6 items-center ">
        <div className="min-w-[24px]">
          <Person />
        </div>
        <div className="min-w-[24px]">
          <Favorite />
        </div>
        <div className="flex gap-2 items-center relative pr-2 ">
          <Cart />
          <div className="absolute -top-2 left-3 md:static rounded-full bg-success min-h-[20px] min-w-[20px] w-5 h-5 text-center text-white flex items-center justify-center">
            2
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
