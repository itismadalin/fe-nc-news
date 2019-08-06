import React from 'react';
import ArticleCard from './ArticleCard'

const ArticleList = ({ articles }) => {
    return (
        <div>
            {articles.map(article => {
                return (
                    <div>
                        <ArticleCard article={article} />
                    </div>
                )
            })
            };
        </div>
    );
};

export default ArticleList;