import React from 'react';

const ArticleCard = ({ article }) => {
    return (
        <li>
            <h3>{article.title}</h3>
            <p>Author: {article.author}</p>
            <p>{article.body}</p>
            <p>Created: {article.created_at}</p>
            <p>Votes: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
        </li>
    );
};

export default ArticleCard;