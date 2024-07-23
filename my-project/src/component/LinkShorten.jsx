import React from 'react'

export default function LinkShorten() {
    return (
        <div className='flex justify-center '>
            <div className='form-link  absolute bg-[#3b3054]  sm:w-[55%]  lg:w-[82%] p-[4%] rounded-[11px] '>
                <form className='flex lg:flex-row sm:flex-col items-center sm:gap-[7px]' >
                    <input className='py-[2%] lg:px-[30%] sm:px-[20%]  rounded-[4px] ' type="text" placeholder='Shorten a link here...' />
                    <button type='submit' className='text-white ml-[3%]  sm:w-[100%] font-bold py-[2%] rounded-[7px] bg-[#2acfcf] w-[16%]  ' >Shorten it!</button>
                </form>
            </div>
        </div>
    )
}
