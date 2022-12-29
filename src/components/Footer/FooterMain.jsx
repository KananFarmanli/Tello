import React from "react";
import { Routes, Route, NavLink, Navigate, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Youtube } from "../../assets/icons/youtube.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Pin } from "../../assets/icons/pin.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
const FooterMain = () => {
  return (
    <div className="my-container grow w-full flex  items-center py-11 ">
      <div className="flex flex-col items-center lg:flex-row  w-full md:items-start justify-between gap-10 lg:gap-16 ">
        <div className=" flex flex-col gap-[26px]">
          <Link className="lg:-mt-2">
            <Logo className="min-w-[134px]"/>
          </Link>

          <div className="flex gap-8 items-center ">
            <Link>
              <Instagram className="min-h-[20px]" />
            </Link>
            <Link>
              <Facebook className="min-h-[20px]"/>
            </Link>
            <Link>
              <Youtube className="min-w-[20px]"/>
            </Link>
            <Link>
              <Twitter className="min-w-[20px]"/>
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between gap-10 lg:gap-16">
            <div className="text-center md:text-left space-y-[30px] ">
            <h1 className="text-xl text-white font-medium">Menu</h1>
            <ul className="space-y-4 ">
                <li>
                <Link>Yeni</Link>
                </li>
                <li>
                <Link>Endirimlər</Link>
                </li>
                <li>
                <Link>Aksessuarlar</Link>
                </li>
                <li>
                <Link>Bütün brendlər</Link>
                </li>
            </ul>
            </div>

            <div className="text-center md:text-left space-y-[30px] ">
            <h1 className="text-xl text-white font-medium">Kömək</h1>
            <ul className="space-y-4 ">
                <li>
                <Link>Tez-tez soruşulan suallar</Link>
                </li>
                <li>
                <Link>Çatdırılma xidməti</Link>
                </li>
                <li>
                <Link>Geri qaytarılma şərtləri</Link>
                </li>
            </ul>
            </div>

            <div className="text-center  flex flex-col items-center md:block md:text-left space-y-[30px] pb-10 md:pb-0  ">
            <h1 className="text-xl text-white font-medium ">Əlaqə</h1>
            <ul className="space-y-4 ">
                <li>
                <Link className="flex gap-4 items-start">
                    <Pin className="min-w-[24px]"/>
                    <p className="text-success ">M. K. Ataturk avenue 89, Baku, Azerbaijan</p>
                </Link>
                </li>
                <li>
                <Link className="flex gap-4">
                    <Email className="min-w-[24px]"/>
                    <p>example@gmail.com</p>
                </Link>
                </li>
                <li>
                <Link className="flex gap-4" >
                    <Phone className="min-w-[24px]"/>
                    <p>*2108</p>
                </Link>
                </li>
            </ul>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default FooterMain;
