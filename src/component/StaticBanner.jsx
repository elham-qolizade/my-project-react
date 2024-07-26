import React from "react";
import record from "../assets/image/icon-detailed-records.svg";
import customize from "../assets/image/icon-fully-customizable.svg";
import recognation from "../assets/image/icon-brand-recognition.svg";
export default function StaticBanner() {
  return (
    <div className="bg-[#eff0f5]  container lg:mt-20 md:mt-16  sm:mt-14 xs:mt-12">
      <div className="flex flex-col items-center justify-center pt-32 pb-20 text-center ">
        <h2 className="text-[#35323e] font-bold lg:text-5xl sm:text-3xl ">
          Advanced Statistics
        </h2>
        <p className="py-2 text-gray-500 lg:text-lg sm:text-base xs:text-sm">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="lg:pb-32 sm:pb-28 xs:pb-20">
        <ul className="flex flex-col items-center justify-center lg:px-10 lg:flex-row lg:items-start">
          <li className="  relative flex flex-col items-center lg:items-start max-w-[21.875rem]  px-9 lg:px-8 pb-10 lg:pb-9 pt-20 bg-white rounded-md">
            <div className="p-6   absolute bg-[#3b3054]  top-[-2rem] flex items-center justify-center  rounded-full ">
              <img src={recognation} alt="" />
            </div>
            <h2 className="text-xl font-bold text-black">Brand Recognition</h2>
            <p className="mt-5 leading-6 text-center lg:leading-relaxed lg:text-left">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instill confidence in your
              content.
            </p>
          </li>
          <li className="   w-2 lg:w-[1.875rem] h-14 lg:h-2  lg:mt-[9.5rem] bg-[#2acfcf]"></li>
          <li className=" relative flex flex-col items-center lg:items-start max-w-[21.875rem] lg:mt-8 px-9 lg:px-8 pb-10 lg:pb-9 pt-20 bg-white rounded-md">
            <div className="  absolute bg-[#3b3054]  top-[-2rem] flex items-center justify-center p-6 rounded-full">
              <img src={record} alt="" />
            </div>
            <h2 className="text-xl font-bold text-black">Detailed Records</h2>
            <p className="mt-5 leading-6 text-center lg:leading-relaxed lg:text-left">
              Gain insights into who is clicking your links. Knowing when and
              where people with you content helps inform better decisions.
            </p>
          </li>
          <li className="   w-2 lg:w-[1.875rem] h-14 lg:h-2  lg:mt-[9.5rem] bg-[#2acfcf]"></li>
          <li className=" lg:mt-16 relative flex flex-col items-center lg:items-start max-w-[21.875rem]  px-9 lg:px-8 pb-10 lg:pb-9 pt-20 bg-white rounded-md">
            <div className="  absolute p-6 bg-[#3b3054]  top-[-2rem] flex items-center justify-center w-[5.5rem] h-[5.5rem] rounded-full">
              <img src={customize} alt="" />
            </div>
            <h2 className="text-xl font-bold text-black">Fully Customizable</h2>
            <p className="mt-5 leading-6 text-center lg:leading-relaxed lg:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </li>
        </ul>
      </div>
      <div className="boost-banner gap-5 bg-[#3b3054] py-14 flex flex-col items-center justify-center">
        <h2 className="font-bold text-white lg:text-5xl md:text-4xl sm:text-3xl mobile:text-lg ">
          Boost your links today
        </h2>
        <button className="text-white font-bold lg:text-lg md:text-bse sm:text-base mobile:text-sm bg-[#2acfcf] py-[10px] px-12 rounded-[20px] ">
          Get Startr{" "}
        </button>
      </div>
    </div>
  );
}
