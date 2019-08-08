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