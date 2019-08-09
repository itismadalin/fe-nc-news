import React, { Component } from 'react';
import * as api from '../Api/api';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';


class Voter extends Component {
    state = {
        votes: this.props.votes,
        error: null
    }

    render() {
        if (this.state.error) return <ErrorDisplay status={this.state.error.status} msg={this.state.error.msg} />;
        return (
            <>
                <button onClick={() => this.vote(1)}>LIKE</button>
                <button onClick={() => this.vote(-1)}>HATE</button>
                <p>Votes:{this.state.votes}</p>
            </>
        );
    };

    vote(num) {
        const { article_id, comment_id } = this.props;
        if (article_id) {
            api
                .patchArticleVotes(article_id, num)
                .then(resp => {
                    this.setState({ votes: resp.votes });
                })
                .catch(({ response }) => {
                    const error = { status: response.status, msg: response.data.msg }
                    this.setState({ error, isLoading: false })
                });
        } else if (comment_id) {
            api
                .patchCommentVotes(comment_id, num)
                .then(resp => {
                    this.setState({ votes: resp.votes });
                })
                .catch(({ response }) => {
                    const error = { status: response.status, msg: response.data.msg }
                    this.setState({ error, isLoading: false })
                });
        }

    };
};

export default Voter;