import React from 'react'
import { useState } from "react";
import { navbarData } from './NavbarData';
import { RiMenuLine } from "react-icons/ri";
import logo from '../assets/image/logo.svg'
import { Link } from 'react-router-dom'

export default function HeaderLayout() {
    const [toggle, setToggle] = useState(false);

    const showNav = () => {
        setToggle(!toggle);
    };

    return (
        <div className='flex flex-row   lg:items-center sm:pt-7 mobile:pt-7 md:pt-7  justify-around  container   ' >
            <div className='logo-img'>
                <img className='logo' src={logo} alt="" />
            </div>
            <div className=' flex md:flex-col  lg:flex-row sm:flex-col mobile:flex-col'>
                <button className="flex justify-end rounded  lg:hidden"
                    onClick={showNav} >
                    <RiMenuLine />
                </button>
                <ul className={`${toggle ? " flex" : " hidden"
                        } flex-col sm:bg-[#3b3054] lg:flex  sm:mt-4 sm:px-24 sm:py-4  mobile:bg-[#3b3054] md:bg-[#3b3054] md:py-8 md:px-28  md:gap-8 lg:mt-0  lg:p-0   lg:bg-white sm:rounded-t-md  lg:flex-row mobile:rounded-t-md md:text-white sm:text-white justify-center items-center `}>
                    {navbarData.map((link, index) => {
                        return (
                            <li key={index} className={link.cname}>
                                <Link className="hover:text-sky-500"
                                    to={link.href}
                                    onClick={showNav}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className={`${toggle ? " flex" : " hidden"} lg:flex lg:ms-[20%] sm:bg-[#3b3054] md:bg-[#3b3054] md:px-28 md:py-4 mobile:rounded-b-md mobile:p-10 mobile:flex-col mobile:bg-[#3b3054] sm:rounded-b-md md:rounded-b-md    lg:bg-white  sm: mx-auto md:mx-auto  gap-2 lg:flex-row md:flex-col  sm:flex-col  p-2 sm:m-0 md:m-0 lg:mt-4 `}>
                    <button className='font-mono font-bold text-gray-400 '>Login</button>
                    <button className='bg-[#2acfcf] text-white  rounded-[30px] py-2 px-5 '>SingUp</button>
                </div>
            </div>
        </div >
    )
}
