import React from "react";
import logolight from "../../../../public/images/logo-light.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col px-20 ">
      {/* Top Footer */}

      <div className="flex flex-col items-start gap-10 xl:gap-0 xl:flex-row xl:items-center py-24">
        {/* First Section */}
        <div className="flex flex-col gap-4 xl:w-2/6">
          <Image src={logolight} alt="logo" width={150} height={70} />
          <p className="text-gray-500 w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex gap-4 text-gray-500 dark:text-gray-300">
            <FaFacebookF className="w-6 h-6" />
            <FaTwitter className="w-6 h-6" />
            <FaLinkedinIn className="w-6 h-6" />
            <FaBehance className="w-6 h-6" />
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col xl:w-1/6 gap-8">
          <h1 className="font-medium text-2xl">Quick Links</h1>
          <ul className="text-gray-500 flex flex-col gap-4">
            <li>Home</li>
            <li>Product</li>
            <li>
              Careers
              <span className="text-xs bg-green-500 font-semibold px-2 py-[2px] ml-2 text-white rounded-full">
                Hiring
              </span>
            </li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* Third Section */}
        <div className="flex flex-col xl:w-1/6 gap-8">
          <h1 className="font-medium text-2xl">Services</h1>
          <ul className="text-gray-500 flex flex-col gap-4">
            <li>Web Development</li>
            <li>Graphics Design</li>
            <li>Digital Marketing</li>
            <li>Ui/Ux Design</li>
          </ul>
        </div>

        {/* Fourth Section */}
        <div className="flex flex-col xl:w-1/6 gap-8">
          <h1 className="font-medium text-2xl">Support</h1>
          <ul className="text-gray-500 flex flex-col gap-4">
            <li>Company</li>
            <li>Press media</li>
            <li>Our Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Fifth Section */}
        <div className="flex flex-col gap-8 xl:w-1/6">
          <h1 className="font-medium text-2xl">Newsletter</h1>
          <div>
            <p className="text-gray-500">Subscribe to receive future updates</p>
            <input
              type="text"
              placeholder="Email address "
              className="rounded-full border-[1px] border-gray-400 px-5 py-2 mt-2 flex-grow dark:bg-slate-800
              dark:border-gray-500"
            />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex justify-between text-gray-500 py-10 border-t-[1px] border-t-gray-500/40">
        <div className="flex list-none gap-10">
          <li>English</li>
          <li>Privacy Policy</li>
          <li>Support</li>
        </div>
        <p>© 2025 Base. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
