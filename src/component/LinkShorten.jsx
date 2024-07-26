import React from "react";

export default function LinkShorten() {
  return (
    <div className="container absolute flex items-center justify-center ">
      <div className="grid w-[82%] bg-[#3b3054] rounded-xl ">
        <form className=" grid lg:grid-cols-6  xs:gap-2 xs:p-3 md:p-5 sm:p-4 lg:px-10 lg:py-12   grid-cols-1 items-center justify-center sm:gap-2 ">
          <input
            className="rounded-md lg:text-lg md:text-base lg:py-4 lg:col-span-5 px-72 sm:px-0 sm:text-center xs:px-8 xs:py-2 xs:text-sm "
            type="text"
            placeholder="Shorten a link here..."
          />
          <button
            type="submit"
            className="text-white  font-bold lg:py-4  rounded-[7px] bg-[#2acfcf] xs:py-2 "
          >
            Shorten it!
          </button>
        </form>
      </div>
    </div>
  );
}
