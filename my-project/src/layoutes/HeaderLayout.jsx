import React from 'react'

import logo from '../assets/image/logo.svg'
import { Link } from 'react-router-dom'

export default function HeaderLayout() {
    return (
        <div className='flex flex-row items-center justify-between m-[3%] px-[6%]' >
            <div className='logo-img'>
                <img className='logo' src={logo} alt="" />
            </div>
            <div className='pr-[42%] flex flex-row gap-[11%] text-gray-500 font-medium'>
                <Link to='/'> Features </Link>
                <Link to='/'> Pricing </Link>
                <Link to='/'> Resources</Link>
            </div>
            <div className='flex gap-10 '>
                <button className='font-mono font-bold text-gray-400 '>Login</button>
                <button className='bg-[#2acfcf] text-white  rounded-[30px] py-2 px-5 '>SingUp</button>
            </div>
        </div>
    )
}
