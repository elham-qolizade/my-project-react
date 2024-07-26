import React from "react";
import { useState } from "react";
import { navbarData } from "../helpers/NavbarData";
import { VscMenu } from "react-icons/vsc";
import logo from "../assets/image/logo.svg";
import { Link } from "react-router-dom";

export default function HeaderLayout() {
  const [toggle, setToggle] = useState(false);

  const showNav = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container flex flex-row items-center justify-between p-10 gap-11">
      <div className="logo-img">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="flex flex-col items-center justify-between w-full text-white lg:flex-row ">
        <button
          className="flex justify-end rounded lg:hidden"
          onClick={showNav}
        >
          <VscMenu />
        </button>
        <ul
          className={`${
            toggle ? " flex" : " hidden"
          } flex-col  lg:flex  sm:mt-4 sm:px-24 sm:py-4 bg-[#3b3054] md:py-8 md:px-28  md:gap-8 lg:mt-0  lg:p-0   lg:bg-white  lg:flex-row rounded-t-md text-white justify-center items-center `}
        >
          {navbarData.map((link, index) => {
            return (
              <li key={index} className={link.cname}>
                <Link
                  className="hover:text-sky-500"
                  to={link.href}
                  onClick={showNav}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          className={`${
            toggle ? " flex" : " hidden"
          } lg:flex bg-[#3b3054] rounded-b-md flex-col  lg:bg-white    gap-2 lg:flex-row  `}
        >
          <button className="font-mono font-bold text-gray-400 ">Login</button>
          <button className="bg-[#2acfcf] text-white  rounded-3xl py-2 px-5 ">
            SingUp
          </button>
        </div>
      </div>
    </div>
  );
}
