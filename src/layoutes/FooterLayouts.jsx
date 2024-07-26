import React from "react";
import logo from "../assets/image/logo.svg";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
export default function FooterLayouts() {
  return (
    <div className="container flex flex-col items-center gap-5 p-16 text-white bg-black lg:flex-row lg:justify-between ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-col gap-20 lg:flex-row ">
        <ul className="flex flex-col gap-2">
          <span>Features</span>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>

        <ul className="flex flex-col gap-2">
          <span>Resources</span>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>

        <ul className="flex flex-col gap-2">
          <span>Company</span>
          <li>About</li>
          <li>Our Team</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex flex-row gap-2 mt-3 lg:mt-0">
        <FaInstagram className="icon" />
        <FaPinterestP className="icon" />
        <FaFacebookSquare className="icon" />
        <FaTwitter className="icon" />
      </div>
    </div>
  );
}
