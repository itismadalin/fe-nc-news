import React, { Component } from 'react';
import ArticleList from './ArticleList';
import * as api from '../api';

class ArticleListPage extends Component {
    state = {
        articles: null,
        isLoading: true
    }
    render() {
        return (
            <section>
                <h2>Latest News</h2>
                {this.state.isLoading ? <p>Loading the news...</p> :
                    <ArticleList articles={this.state.articles} />
                }
            </section>
        );
    }

    componentDidMount() {
        this.getArticles();
    }

    getArticles = () => {
        api.fetchArticles()
            .then((articles) => {
                console.log(articles)
                this.setState({ articles, isLoading: false })
            });
    }
}

export default ArticleListPage;