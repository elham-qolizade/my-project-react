import React from 'react'
import record from '../assets/image/icon-detailed-records.svg'
import customize from '../assets/image/icon-fully-customizable.svg'
import recognation from '../assets/image/icon-brand-recognition.svg'
export default function StaticBanner() {
    return (
        <div className='bg-[#eff0f5] lg:mt-[6%]  sm:mt-[10%]'>

            <div className='lg:pt-[10%] sm:pb-[10%] sm:pt-[15%] lg:pb-[5%] px-[10%] flex  items-center justify-center text-center flex-col'>

                <h2 className='text-[#35323e] font-bold text-[40px]'>Advanced Statistics</h2>
                <p className='py-[1%] text-gray-500'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className='lg:pb-[13%] sm:pb-[18%]'>
                <ul className='flex lg:flex-row sm:flex-col  lg:gap-0 sm:gap-[13px] sm:px-[27%] lg:px-[10%] pr-[11%]'>
                    <li className='bg-white lg:text-justify h-[260px] pb-[25%] sm:text-center rounded-[3px]  px-[2%] flex flex-col  gap-[10px]  ' >

                        <div className='  sm:w-[31%] lg:w-[32%] bg-[#3b3054] relative sm:left-[33%] lg:left-[5%] top-[-45px] py-[8%] px-[8%] rounded-full ' >
                            <img src={recognation} alt="" />
                        </div>
                        <h2 className='text-[20px] font-medium text-black '>Brand Recognition</h2>
                        <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.</p>
                    </li>
                    <li className=' bg-[#2acfcf] relative w-[10%] h-[9px] top-[195px]'></li>
                    <li className='lg:text-justify h-[270px] sm:text-center pb-[7%] gap-[10px] relative  top-[30px] rounded-[5px] bg-white flex flex-col   px-[3%]'>
                        <div className=' sm:w-[31%] lg:w-[32%] bg-[#3b3054] relative py-[8%] px-[8%] rounded-full top-[-16%] sm:left-[31%] lg:left-[-4%]' >
                            <img src={record} alt="" />
                        </div>
                        <h2 className='text-[20px] font-medium text-black' >Detailed Records</h2>
                        <p>Gain insights into who is clicking your links. Knowing when and where people with you content helps inform better decisions.</p>
                    </li>
                    <li className='bg-[#2acfcf] w-[10%] relative top-[182px] h-[9px]'></li>
                    <li className=' lg:text-justify h-[270px] sm:text-center pb-[7%] gap-[10px] rounded-[2%] relative top-[90px] bg-white flex flex-col  px-[3%]'>
                        <div className=' sm:w-[33%] lg:w-[35%] bg-[#3b3054] relative py-[8%] px-[8%] rounded-full top-[-22%] sm:left-[31%] lg:left-[-4%]'  >
                            <img src={customize} alt="" />
                        </div>
                        <h2 className='text-[20px] font-medium text-black' >Fully Customizable</h2>
                        <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </li>
                </ul>
            </div>
            <div className='boost-banner bg-[#3b3054] py-[3%] flex flex-col items-center justify-center'>
                <h2 className='text-white lg:text-[40px] sm:text-[30px] font-bold ' >Boost your links today</h2>
                <button className='text-white font-bold bg-[#2acfcf] lg:w-[14%] sm:w-[24%] py-[10px] rounded-[20px] mt-[3%]'>Get Startr </button>
            </div>
        </div>
    )
}
