import React from 'react'
import Logo from '../assets/image/illustration-working.svg'
export default function welcomeBanner() {
    return (
        <div className='flex flex-row py-[4%]'>

            <div className='flex flex-col  w-[50%] pl-[10%] gap-[1%]'>
                <h1 className='font-bold text-[70px]  text-[#3e3e3e;]'>More than just shorter links</h1>
                <p className='text-gray-400 text-[23px] ' >Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className='text-white font-bold bg-[#2acfcf] w-[34%] py-[10px] rounded-[20px] mt-[3%]'>Get Start</button>
            </div>
            <div className='w-[50%]'>
                <img src={Logo} alt="" />
            </div>
        </div>
    )
}
