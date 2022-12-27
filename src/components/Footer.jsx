import React from "react";
import Copyright from "./Footer/Copyright";
import FooterMain from "./Footer/FooterMain";

const Footer = () => {
  return (
    <footer className="flex flex-col min-h-[411px]  bg-secondary w-full text-white/80">

        <FooterMain />

      <Copyright />
    </footer>
  );
};

export default Footer;
