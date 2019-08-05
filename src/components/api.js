import axios from 'axios';

const request = axios.create({ baseURL: 'http://bencnews.herokuapp.com/api' });

export const fetchArticles = async query => {
    const { data } = await request.get('/articles', { params: query });
    return data.articles;
}