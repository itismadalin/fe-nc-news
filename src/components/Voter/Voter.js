import React, { Component } from 'react';
import * as api from '../Api/api';


class Voter extends Component {
    state = {
        votes: this.props.votes
    }

    render() {
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
                .catch(err => {
                    console.log(err);
                });
        } else if (comment_id) {
            api
                .patchCommentVotes(comment_id, num)
                .then(resp => {
                    this.setState({ votes: resp.votes });
                })
                .catch(err => {
                    console.log(err);
                });
        }

    };
};

export default Voter;