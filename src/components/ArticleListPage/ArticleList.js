import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles }) => {
  return (
    <div>
      {articles.map(article => {
        return (
          <div key={article.title}>
            <ArticleCard article={article} />
          </div>
        );
      })}
      ;
    </div>
  );
};

export default ArticleList;
