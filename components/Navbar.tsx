import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/images-removebg-preview (1).png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 ">
      <Link href="/">
        <div className="flex">
          <Image src={logo} width={35} height={35} alt="log of" />
          <span className="ml-4 text-4xl font-bold text-primary-dar">
            Coding
          </span>
        </div>
      </Link>
      <ul className="flex ">
        <li className="mr-6 font-medium text-gray-500">
          <Link href="#">Product</Link>
        </li>
        <li className="mr-6 font-medium text-gray-500">
          <Link href="#">Docs</Link>
        </li>
        <li className="mr-6 font-medium text-gray-500">
          <Link href="#">Pricing</Link>
        </li>
        <li className="mr-6 font-medium text-gray-500">
          <Link href="#">Companpy</Link>
        </li>
      </ul>
      <ul className="flex">
        <li className="px-4 py-2 mr-2 cursor-pointer ">Log In</li>
        <li className="px-4 py-2 text-white transition-all rounded-md cursor-pointer bg-primary hover:bg-primary-dar">
          Sign Up
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
