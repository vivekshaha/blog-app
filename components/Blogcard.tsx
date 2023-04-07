import { IArticle } from "@/types";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { fromatDate } from "@/utils";

interface IPropType {
  article: IArticle;
}
const Blogcard = ({ article }: IPropType) => {
  return (
    <>
      <div>
        <Link href={`/article/${article.attributes.Slug}`}>
          <h1 className="text-xl font-bold hover:border-primary hover:underline hover:boder-b-4 hover:cursor-pointer">
            {article.attributes.Title}
          </h1>
        </Link>
        <div className="mt-4">
          <div className="flex items-center">
            <img
              src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
              alt="test of author"
              width={30}
              height={25}
              className="mr-4 rounded-md"
            />
            <span className="text-sm font-bold ">
              {article.attributes.author.data.attributes.firstname}{" "}
              {article.attributes.author.data.attributes.lastname} on &nbsp;
            </span>
            <span>{fromatDate(article.attributes.createdAt)}</span>
          </div>
          <div className="mt-6 text-gray-500 ">
            {article.attributes.shortDescription.slice(0, 250)}...
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogcard;
