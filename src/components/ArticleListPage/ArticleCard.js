import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ article }) => {
  const { created_at } = article;
  const date = new Date(created_at).toLocaleDateString();
  return (
    <div className="ArticleCard">
      <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
      </Link>
      <p>Author: {article.author}</p>
      <p>Created: {date}</p>
      <p>Comments: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
    </div>
  );
};

export default ArticleCard;
