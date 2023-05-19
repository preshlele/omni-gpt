"use client";
import Link from "next/link";
import { navLinks } from "@/utils/helper";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center max-w-full mx-auto  my-7 px-4 text-white">
      <Image src="/logo.png" width={100} height={100} alt="logo" />
      <ul className="hidden md:flex">
        {navLinks.map((link) => (
          <li key={link.path} className="p-4 border-gray-600">
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className=" relative md:hidden">
        {nav ? (
          <div className=" relative z-40 text-white">
            <AiOutlineClose size={30} />
          </div>
        ) : (
          <RxHamburgerMenu size={30} />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed flex flex-col items-center gap-14 left-0 top-0 w-full h-full border-r border-r-gray-900 text-white bg-[#111826] transition ease-in"
            : "transition ease-out duration-200  fixed top-[-100%]"
        }
      >
        {/* mobile navbar menu */}
        {navLinks.map((link) => (
          <li
            key={link.path}
            className="relative text-3xl font-semibold top-36"
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
