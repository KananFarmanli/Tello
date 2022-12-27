import React from "react";
import HeaderMain from "./Header/HeaderMain";
import Navbar from "./Header/Navbar";

const Header = () => {
  return (
    <header className="h-32  border-b border-b-success">
      
      <div className="my-container flex flex-col text-sm items-start h-full py-3 justify-between">

      <HeaderMain />
      <Navbar />
        
      </div>
      
    </header>
  );
};

export default Header;
