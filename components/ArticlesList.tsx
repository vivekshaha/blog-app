import { IArticle } from "@/types";
import React from "react";
import Blogcard from "./Blogcard";
import BlogCardWithImage from "./BlogCardWithImage";

interface IPropType {
  articles: IArticle[];
}

const ArticlesList = ({ articles }: IPropType) => {
  return (
    <>
      <div className="grid gap-6 lg:grid-cols-2 ">
        {articles.map((article, index) => {
          if (index == 1) {
            return <BlogCardWithImage article={article} key={article.id} />;
          } else {
            return <Blogcard article={article} key={article.id} />;
          }
        })}
      </div>
      <div> </div>
    </>
  );
};

export default ArticlesList;
