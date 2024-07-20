import React from 'react'
import logo from '../assets/image/logo.svg'
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
export default function FooterLayouts() {
    return (
        <div className='text-white bg-black p-[8%] flex flex-row  justify-around '>

            <div>
                <img src={logo} alt="" />
            </div>
            <div className='flex flex-row gap-[28%]'>

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
