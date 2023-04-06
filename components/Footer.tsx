import React from "react";
import Link from "next/link";
import logo from "../public/images-removebg-preview (1).png";
import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillDribbbleSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="container fixed bottom-0 flex flex-row items-center justify-between w-5/6 px-4 pb-2">
      <div className="flex items-center justify-center ">
        <Link href="/" className="flex">
          <Image src={logo} width={20} height={15} alt="log of" />
          <span className="items-center ml-4 text-xl font-bold text-primary-dar">
            Coding
          </span>
        </Link>

        <p className="mt-2 ml-4">&#169; 2023 Coding- @shahviivek.in</p>
      </div>
      <div className="flex items-center ">
        <Link href="www.faceboook.com">
          <AiFillLinkedin className="text-3xl " />
        </Link>
        <Link href="www.faceboook.com">
          <AiFillFacebook className="text-3xl" />
        </Link>
        <Link href="www.faceboook.com">
          <AiFillTwitterSquare className="text-3xl" />
        </Link>
        <Link href="www.faceboook.com">
          <AiFillDribbbleSquare className="text-3xl" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
