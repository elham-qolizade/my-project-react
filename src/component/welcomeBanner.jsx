import React from "react";
import Logo from "../assets/image/illustration-working.svg";
export default function welcomeBanner() {
  return (
    <div className="container flex flex-col-reverse items-center justify-center py-12 lg:flex-row">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-bold lg:text-7xl lg:leading-tight md:text-5xl text-[#3e3e3e;] sm:text-4xl xs:text-2xl">
          More than just shorter links
        </h1>
        <p className="text-gray-400 lg:text-xl sm:text-lg lg:px-[13%] lg:leading-normal ">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="text-white font-bold bg-[#2acfcf]  py-2 px-16 rounded-[20px] mt-9">
          Get Start
        </button>
      </div>
      <div>
        <img src={Logo} alt="" />
      </div>
    </div>
  );
}
