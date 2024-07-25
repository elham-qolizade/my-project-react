import React from 'react'

export default function LinkShorten() {
    return (
        <div className='container absolute flex items-center justify-center '>
            <div className='grid w-[82%] bg-[#3b3054] rounded-xl '>
                <form className=' grid lg:grid-cols-6  mobile:gap-2 mobile:p-3 md:p-5 sm:p-4 lg:px-10 lg:py-12   md:grid-cols-1 sm:grid-cols-1 items-center justify-center sm:gap-[7px] ' >
                    <input className='rounded-md lg:text-lg md:text-base lg:py-4 lg:col-span-5 px-72 sm:px-0 sm:text-center mobile:px-8 mobile:py-2 mobile:text-sm ' type="text" placeholder='Shorten a link here...' />
                    <button type='submit' className='text-white  font-bold lg:py-4  rounded-[7px] bg-[#2acfcf] mobile:py-2 ' >Shorten it!</button>
                </form>
            </div>
        </div>
    )
}
