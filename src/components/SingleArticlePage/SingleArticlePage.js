import React, { Component } from 'react';
import * as api from '../api';

class SingleArticlePage extends Component {
    state = {
        article: null,
        isLoading: true
    }
    render() {
        const { article, isLoading } = this.state;
        return (
            <div>
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
                this.setState({ article, isLoading: false })
            });
    }
}

export default SingleArticlePage;