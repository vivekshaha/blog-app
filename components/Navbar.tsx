import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/images-removebg-preview (1).png";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-4 py-2 items-center ">
      <Link href="/">
        <div className="flex">
          <Image src={logo} width={35} height={35} alt="log of" />
          <span className="ml-4 text-primary-dar font-bold text-4xl">
            Coding
          </span>
        </div>
      </Link>
      <ul className="flex ">
        <li className="font-medium text-gray-500 mr-6">
          <Link href="#">Product</Link>
        </li>
        <li className="font-medium text-gray-500 mr-6">
          <Link href="#">Docs</Link>
        </li>
        <li className="font-medium text-gray-500 mr-6">
          <Link href="#">Pricing</Link>
        </li>
        <li className="font-medium text-gray-500 mr-6">
          <Link href="#">Companpy</Link>
        </li>
      </ul>
      <ul className="flex">
        <li className="mr-2 px-4 py-2 cursor-pointer ">Log In</li>
        <li className="text-white bg-primary hover:bg-primary-dar rounded-md px-4 py-2 transition-all cursor-pointer">
          Sign Up
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
