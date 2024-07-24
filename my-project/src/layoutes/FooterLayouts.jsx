import React from 'react'
import logo from '../assets/image/logo.svg'
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
export default function FooterLayouts() {
    return (
        <div className='flex p-16 text-white bg-black lg:flex-row sm:gap-5 mobile:gap-5 sm:items-center md:items-center md:flex-row lg:justify-around md:justify-around mobile:items-center sm:justify-center mobile:justify-center sm:flex-col mobile:flex-col '>

            <div>
                <img src={logo} alt="" />
            </div>
            <div className='flex gap-20 lg:flex-row md:flex-row sm:justify-center mobile:justify-center sm:flex-col mobile:flex-col'>

                <ul className='flex flex-col gap-2'>
                    <span>Features</span>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>

                <ul className='flex flex-col gap-2' >
                    <span>Resources</span>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>

                <ul className='flex flex-col gap-2'>
                    <span>Company</span>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex flex-row  md:mt-3 sm:mt-3 mobile:mt-3 gap-[10px]'>
                <FaInstagram className='icon' />
                <FaPinterestP className='icon' />
                <FaFacebookSquare className='icon' />
                <FaTwitter className='icon' />
            </div>
        </div>
    )
}
