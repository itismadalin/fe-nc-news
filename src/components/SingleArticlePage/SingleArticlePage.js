import React, { Component } from 'react';
import * as api from '../api';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';

class SingleArticlePage extends Component {
    state = {
        article: null,
        isLoading: true,
        error: null
    }
    render() {
        const { article, isLoading, error } = this.state;
        if (error) return <ErrorDisplay status={error.status} msg={error.msg} />;
        return (
            <div className="SingleArticlePage">
                {isLoading ? <p>Loading Article...</p> :
                    <>
                        <h2>{article.title}</h2>
                        <p>{article.body}</p>
                        <p>Votes: {article.votes}</p>
                    </>
                }
            </div>
        );
    }

    componentDidMount() {
        this.fetchSingleArticle();
    }

    fetchSingleArticle = () => {
        api.getSingleArticle(this.props.id)
            .then(article => {
                this.setState({ article, isLoading: false });
            }).catch(({ response }) => {
                const error = { status: response.status, msg: response.data.msg }
                this.setState({ error, isLoading: false })
            });
    };
};

export default SingleArticlePage;