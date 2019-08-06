import React from 'react';
import { Link } from "@reach/router";

const ArticleCard = ({ article }) => {
    return (
        <div className="ArticleCard">
            <Link to={`/articles/${article.article_id}`}><h3>{article.title}</h3></Link>
            <p>Author: {article.author}</p>
            <p>{article.body}</p>
            <p>Created: {article.created_at}</p>
            <p>Votes: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
        </div>
    );
};

export default ArticleCard;