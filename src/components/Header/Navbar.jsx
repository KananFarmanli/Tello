import React from 'react';
import { Routes, Route, NavLink, Navigate,} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul className='flex gap-14 justify-between'>

                <li className=''>
                    <NavLink>Yeni</NavLink>
                </li>
                <li className=''>
                    <NavLink>Apple</NavLink>
                </li>
                <li className=''>
                    <NavLink>Samsung</NavLink>
                </li>
                <li className=''>
                    <NavLink>Xiaomi</NavLink>
                </li>
                <li className=''>
                    <NavLink>Redmi</NavLink>
                </li>
                <li className=''>
                    <NavLink>Bütün Brendlər</NavLink>
                </li>
                <li className=''>
                    <NavLink>Aksessuarlar</NavLink>
                </li>
                <li className=''>
                    <NavLink>Endirimlər</NavLink>
                </li>


             

            </ul>
            
        </div>
    );
};

export default Navbar;