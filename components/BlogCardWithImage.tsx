import { IArticle } from "@/types";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo1 from "../public/vercel.svg";

interface IPropType {
  article: IArticle;
}

const BlogCardWithImage = ({ article }: IPropType) => {
  return (
    <div className="flex items-center h-64 rounded-md bg-gradient-to-r from-violet-500 to-violet-900">
      <Link href="">
        <p className="text-2xl w-2/3 text-white  font-bold p-4 after:content-[''] after:bg-primary after:w-16 after:block after:h-1 after:rounded-md  cursor-pointer">
          {article.attributes.Title}
        </p>
      </Link>
      <Image
        src={logo1}
        height={50}
        width={80}
        alt="logo"
        className="w-1/3 mr-6"
      />
    </div>
  );
};

export default BlogCardWithImage;
