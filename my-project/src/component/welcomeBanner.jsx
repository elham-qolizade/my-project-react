import React from 'react'
import Logo from '../assets/image/illustration-working.svg'
export default function welcomeBanner() {
    return (
        <div className='flex lg:flex-row   sm:justify-center sm:items-center md:flex-col-reverse sm:flex-col-reverse  py-[4%]'>

            <div className='flex flex-col  w-[50%] lg:pl-[10%] sm:items-center md:items-baseline  sm:p-0 gap-[1%] text-center'>
                <h1 className='font-bold lg:text-[70px]  text-[#3e3e3e;] sm:text-[38px]'>More than just shorter links</h1>
                <p className='text-gray-400 lg:text-[23px] sm:text-[18px] ' >Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className='text-white font-bold bg-[#2acfcf] w-[34%] py-[10px] rounded-[20px] mt-[3%]'>Get Start</button>
            </div>
            <div className='sm:w-[50%] lg:w-[50%] md:w-[90%] lg:p-0 md:p-0 md:pl-[3%]'>
                <img src={Logo} alt="" />
            </div>
        </div>
    )
}
