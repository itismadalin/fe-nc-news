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

export const patchArticleVotes = async (article_id, increment) => {
    const { data } = await request.patch(`/articles/${article_id}`, { inc_votes: increment });
    return data.article;
}

export const updateVotes = async (article_id, comment_id, inc_votes) => {
    const URL = article_id ? `articles/${article_id}` : `comments/${comment_id}`;
    let { response } = await request.patch(URL, { inc_votes });
    return response;
};


export const postComment = async ({ body, author, article_id }) => {
    console.log(body, '<- body')
    console.log(author, '<- author')
    console.log(article_id, '<- article_id')
    const postedComments = `articles/${article_id}/comments`;
    let { data: { comment } } = await request.post(postedComments, { author, body });
    return comment;
};