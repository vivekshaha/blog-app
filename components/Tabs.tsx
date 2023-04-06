import { ICategory } from "@/types";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";

interface IPropType {
  categories: ICategory[];
}

const Tabs = ({ categories }: IPropType) => {
  const router = useRouter();

  const isActiveLink = (category: ICategory) => {
    return category.attributes.Slug === router.query.category;
  };
  const handleOnSearch = (query: string) => {
    console.log("handling serch", query);
  };
  return (
    <div className="flex justify-between my-8 border-b-2 border-gray-100">
      <ul className="flex">
        <li
          className={
            "pb-6 mr-6 rounded-sm  " +
            `${
              router.pathname === "/"
                ? "border-b-4 border-primary text-primary"
                : "border-white"
            }
             `
          }
        >
          <Link href="/">Recent</Link>
        </li>
        {categories.map((category) => {
          return (
            <li
              key={category.id}
              className={
                "pb-6 mr-6 rounded-sm  " +
                `${
                  isActiveLink(category)
                    ? "border-b-4 border-primary text-primary"
                    : "border-white"
                }
                 `
              }
            >
              <Link href={`/category/${category.attributes.Slug}`}>
                {category.attributes.Title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center ">
        <AiOutlineSearch className="mr-2" />
        <input
          type="text"
          onChange={(e) => handleOnSearch(e.target.value)}
          placeholder="Search"
          className="px-2 py-1 ml-1 outline-none"
        />
      </div>
    </div>
  );
};

export default Tabs;
