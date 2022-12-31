import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Button from "../button/Button";

const sideBarParams = "absolute top-0 left-0  bg-primaryBg h-screen";

const Navbar = ({ burgerLogic }) => {
  return (
    <div
      className={`overflow-auto flex flex-col absolute top-0  lg:static  h-screen lg:h-auto w-full xs:w-[360px] lg:w-auto pt-[136px] lg:pt-0 z-20 lg:z-0 bg-primaryBg  ${
        burgerLogic ? " left-0 transition-all " : " -left-[550px] transition-all lg:transition-none"
      }`}
    >
      <ul className=" flex flex-col lg:flex-row gap-6 justify-between  px-[15px]  sm:px-[20px]  md:px-[50px] lg:px-0 text-xl lg:text-sm pt-9 lg:pt-0 border-t border-t-success lg:border-none ">
        <li className="">
          <NavLink>Yeni</NavLink>
        </li>
        <li className="">
          <NavLink>Apple</NavLink>
        </li>
        <li className="">
          <NavLink>Samsung</NavLink>
        </li>
        <li className="">
          <NavLink>Xiaomi</NavLink>
        </li>
        <li className="">
          <NavLink>Redmi</NavLink>
        </li>
        <li className="">
          <NavLink>Bütün Brendlər</NavLink>
        </li>
        <li className="">
          <NavLink>Aksessuarlar</NavLink>
        </li>
        <li className="">
          <NavLink>Endirimlər</NavLink>
        </li>
      </ul>

      <div className="flex grow items-end  justify-center  lg:hidden  ">
       
       <div className="flex gap-4 p-4 w-full justify-center items-center bg-[#FAF9F9] ">

       <Button
          className={"bg-white border border-success text-success h-12 w-[156px]" }>
            Daxil ol
        </Button>
        <Button
          className={"bg-success text-white h-12 w-[156px] "}>
            Qeydiyyat
        </Button>
       </div>

      </div>
    </div>
  );
};

export default Navbar;
