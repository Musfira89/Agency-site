"use client";
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import ThemeButton from "@/components/ThemeButtin";
import { useWindowScroll } from "react-use";

function NavMenu({ texts }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className={`list-none flex flex-col space-y-5 px-6 lg:px-0 py-4 lg:py-0 lg:space-y-0 
    lg:flex-row lg:space-x-10 text-gray-500 dark:text-gray-300  lg:-ml-24 ${texts}`}
    >
      <li className="cursor-pointer hover:text-[#4e6bff]">Home</li>
      <li className="cursor-pointer hover:text-[#4e6bff]">Features</li>
      <div className="flex flex-col w-full ">
        <li
          className="flex items-center justify-between lg:justify-none gap-2 relative cursor-pointer
           hover:text-[#4e6bff] z-10"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Pages <MdOutlineKeyboardArrowDown />
        </li>
        {/* Dropdowns of pages */}
        {isDropdownOpen ? (
          <div
            className=" p-4 absolute mt-8 rounded-md shadow-md space-y-4 w-[80%] flex-grow lg:w-auto
             bg-white dark:bg-gray-800 dark:text-white"
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <li className="cursor-pointer hover:text-[#4e6bff]">Blog Grid</li>
            <li className="cursor-pointer hover:text-[#4e6bff]">Blog Signal</li>
            <li className="cursor-pointer hover:text-[#4e6bff]">404</li>
          </div>
        ) : null}
      </div>

      <li className="cursor-pointer hover:text-[#4e6bff] ">Support</li>
    </div>
  );
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, settheme] = useState(true);
  const { y } = useWindowScroll();
  const [shadow, setshadow] = useState("shadow-none");
  const [bgColor, setBgColor] = useState("transparent");
  const [buttons, setbutton] = useState("bg-[#ffff]/10");
  const [texts, settext] = useState("text-gray-500");

  useEffect(() => {
    if (y > 100) {
      setshadow("shadow-md");
      setBgColor("white");
      setbutton("bg-[#4e6bff]");
      settext("text-gray-500");
    } else {
      setshadow("shadow-none");
      setBgColor("transparent");
      setbutton("bg-[#ffff]/10");
      settext("text-white");
    }
  }, [y]);

  return (
    <div className={``}>
      <nav
        className={`hidden lg:flex justify-between items-center w-full h-24 
       px-6 py-8 z-30 fixed bg-${bgColor} ${shadow}  dark:bg-gray-800`}
      >
        {/* Logo - Section */}
        <div className="p-6">
          <Image
            src={"/images/logo-light.svg"}
            width={150}
            height={150}
            alt="logo"
          />
        </div>

        {/* Middle - Section */}
        <NavMenu textcolor={texts} />

        {/* Login - Theme - Section */}
        <div
          className={`flex items-center space-x-3 `}
          onClick={() => settheme(!theme)}
        >
          {/* Theme Switch Button */}
          <ThemeButton />

          {/* Signin and Signup button */}
          <button className={`px-5 py-3 ${texts}  rounded-3xl`}>Sign In</button>
          <button className={`px-5 py-3 ${buttons}  text-white rounded-3xl`}>
            SignUp
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      <nav
        className={`lg:hidden fixed flex w-full justify-between items-center px-8 py-4  z-30 bg-${bgColor} ${shadow}`}
      >
        {/* Logo - Section */}
        <div>
          <Image
            src={"/images/logo-light.svg"}
            width={150}
            height={150}
            alt="logo"
          />
        </div>
        {/* Mobile Menu open Section */}
        <div className="flex space-x-6 ">
          <div onClick={() => settheme(!theme)}>
            {/* Theme Switch Button */}
            <ThemeButton />
          </div>
          {/* Signin and Signup button */}
          <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <VscChromeClose className="w-6 h-6" />
            ) : (
              <RxHamburgerMenu className="w-6 h-6" />
            )}
          </div>
        </div>
      </nav>
      {isMobileMenuOpen ? (
        <div
          className={`lg:hidden fixed mt-20 w-full z-10  bg-white dark:bg-gray-700 mx-4 my-6
           `}
        >
          <NavMenu />
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
