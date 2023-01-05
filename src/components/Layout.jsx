import { useState } from "react";

import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = () => {
  return (


    <div className="flex flex-col min-h-screen ">
      <Header />


      <main className="grow">
        <Outlet />
      </main>



      <Footer />
    </div>

    
  );
};

export default Layout;
