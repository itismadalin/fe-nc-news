import React, { Component } from 'react';
import ArticleList from './ArticleList';
import * as api from '../api';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
// import Sorter from '../Sorter/Sorter'

class ArticleListPage extends Component {
    state = {
        articles: null,
        isLoading: true,
        error: null
    }
    render() {
        if (this.state.error) return <ErrorDisplay status={this.state.error.status} msg={this.state.error.msg} />;
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

    componentDidUpdate(prevProps) {
        if (prevProps.topic !== this.props.topic) {
            this.getArticles();
        };
    };

    getArticles = (query) => {
        const queries = { topic: this.props.topic, ...query };
        api.fetchArticles(queries).then((articles) => {
            this.setState({ articles, isLoading: false });
        }).catch(({ response }) => {
            const error = { status: response.status, msg: response.data.msg }
            this.setState({ error, isLoading: false })
        });
    };
};

export default ArticleListPage;