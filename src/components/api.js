import axios from 'axios';

const request = axios.create({ baseURL: 'http://bencnews.herokuapp.com/api' });

export const fetchArticles = async query => {
    const { data } = await request.get('/articles', { params: query });
    return data.articles;
}

export const getSingleArticle = async article_id => {
    const { data } = await request.get(`/articles/${article_id}`);
    return data.article;
}

export const getTopics = async () => {
    const displayTopic = 'topics';
    let { data: { topics } } = await request.get(displayTopic);
    return topics;
}

