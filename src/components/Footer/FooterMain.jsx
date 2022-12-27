import React from "react";
import { Routes, Route, NavLink, Navigate, Link } from "react-router-dom";
const FooterMain = () => {
  return (
    <div className="my-container grow w-full flex  items-center py-11 ">
      <div className="flex flex-col items-center lg:flex-row  w-full md:items-start justify-between gap-10 lg:gap-16 ">
        <div className=" flex flex-col gap-[26px]">
          <Link className="lg:-mt-2">
            <img src="../src/assets/icons/logo2.svg" alt="" />
          </Link>

          <div className="flex gap-8 items-center ">
            <Link>
              <img className="min-w-min" src="../src/assets/icons/instagram.svg" alt="" />
            </Link>
            <Link>
              <img className="min-w-min" src="../src/assets/icons/facebook.svg" alt="" />
            </Link>
            <Link>
              <img className="min-w-min" src="../src/assets/icons/youtube.svg" alt="" />
            </Link>
            <Link>
              <img className="min-w-min" src="../src/assets/icons/twitter.svg" alt="" />
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
                    <img className="min-w-min" src="../src/assets/icons/pin.svg" alt="" />
                    <p className="text-success ">M. K. Ataturk avenue 89, Baku, Azerbaijan</p>
                </Link>
                </li>
                <li>
                <Link className="flex gap-4">
                    <img className="min-w-min" src="../src/assets/icons/email.svg" alt="" />
                    <p>example@gmail.com</p>
                </Link>
                </li>
                <li>
                <Link className="flex gap-4" >
                    <img className="min-w-min" src="../src/assets/icons/phone.svg" alt="" />
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
