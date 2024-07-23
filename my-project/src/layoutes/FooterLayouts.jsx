import React from 'react'
import logo from '../assets/image/logo.svg'
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
export default function FooterLayouts() {
    return (
        <div className='text-white bg-black p-[8%] flex lg:flex-row sm:gap-[20px] mobile:gap-[20px] sm:items-center md:items-center md:flex-row lg:justify-around  md:justify-around sm:justify-center mobile:justify-center sm:flex-col mobile:flex-col '>

            <div>
                <img src={logo} alt="" />
            </div>
            <div className='flex lg:flex-row md:flex-row lg:gap-[28%] sm:gap-[10px] mobile:gap-[10px] sm:justify-center mobile:justify-center sm:flex-col  mobile:flex-col'>

                <ul>
                    <span>Features</span>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>

                <ul>
                    <span>Resources</span>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>

                <ul>
                    <span>Company</span>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex flex-row  gap-[10px]'>
                <FaInstagram className='icon' />
                <FaPinterestP className='icon' />
                <FaFacebookSquare className='icon' />
                <FaTwitter className='icon' />
            </div>
        </div>
    )
}
