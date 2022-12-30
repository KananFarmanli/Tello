import React, { useState} from "react";
import HeaderMain from "./HeaderMain";
import Navbar from "./Navbar"
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Header = () => {
  const [burgerLogic, setBurgerLogic] = useState(false);

  burgerLogic ? disableBodyScroll(document) : enableBodyScroll(document)

  const burgerOffHandler = (e) =>{
  e.target && setBurgerLogic(false)
  }


  return (
    <header className=" lg:h-32   border-b border-b-success">

     <div onClick={burgerOffHandler} className={`  absolute h-screen w-screen  transition-all z-10  ${burgerLogic ? "  bg-black/50" : "hidden" } `}></div>
      <div className="my-container flex flex-col text-sm items-start h-full py-3 justify-between">
        <HeaderMain burgerLogic={burgerLogic} setBurgerLogic={setBurgerLogic} />
        <Navbar burgerLogic={burgerLogic}/>
      </div>
    </header>
  );
};

export default Header;
