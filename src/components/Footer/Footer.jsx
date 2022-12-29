import React from "react";
import Copyright from "./Copyright";
import FooterMain from "./FooterMain";

const Footer = () => {
  return (
    <footer className="flex flex-col min-h-[411px]  bg-secondary w-full text-white/80">

        <FooterMain />

      <Copyright />
    </footer>
  );
};

export default Footer;
