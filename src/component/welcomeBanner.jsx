import React from 'react'
import Logo from '../assets/image/illustration-working.svg'
export default function welcomeBanner() {
    return (
        <div className='flex lg:flex-row container justify-center items-center mobile:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse  py-12'>
            <div className='flex flex-col md:mt-8 lg:mt-0 sm:mt-8 mobile:mt-8  items-center text-center' >
                <h1   className='font-bold lg:text-7xl lg:leading-tight md:text-5xl text-[#3e3e3e;] sm:text-4xl mobile:text-2xl'>More than just shorter links</h1>
                <p className='text-gray-400 lg:text-xl sm:text-lg lg:px-[13%] lg:leading-normal ' >Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className='text-white font-bold bg-[#2acfcf]  py-[10px] px-16 rounded-[20px] mt-9'>Get Start</button>
            </div>
            <div>
                <img src={Logo} alt="" />
            </div>
        </div>
    )
}
