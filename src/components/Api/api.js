import axios from 'axios';


const request = axios.create({ baseURL: 'http://madalin-nc-news.herokuapp.com/api' });

export const fetchArticles = async query => {
    const { data } = await request.get('/articles', { params: query });
    return data.articles;
}

export const getSingleArticle = async article_id => {
    const { data } = await request.get(`/articles/${article_id}`);
    return data.article;
}

export const getTopics = async () => {
    const retrieveTopic = 'topics';
    let { data: { topics } } = await request.get(retrieveTopic);
    return topics;
}

export const fetchComments = async article_id => {
    const retrieveComments = `articles/${article_id}/comments`;
    let { data: { comments } } = await request.get(retrieveComments);
    return comments;

}

export const deleteComment = async comment_id => {
    let { response } = await request.delete(`/comments/${comment_id}`);
    return response;
};

export const patchArticleVotes = async (article_id, increment) => {
    const { data } = await request.patch(`/articles/${article_id}`, { inc_votes: increment });
    return data.article;
}

export const patchCommentVotes = async (comment_id, inc_votes) => {
    let { data } = await request.patch(`/comments/${comment_id}`, { inc_votes });
    return data.comment;
};


export const postComment = async ({ body, username, article_id }) => {
    const postedComments = `articles/${article_id}/comments`;
    let { data: { comment } } = await request.post(postedComments, { username, body });
    return comment;
};