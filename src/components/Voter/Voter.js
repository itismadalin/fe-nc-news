import React, { Component } from 'react';
import * as api from '../Api/api';


class Voter extends Component {
    state = {
        votes: 0
    }
    render() {
        const { votes } = this.props;
        return (
            <>
                <button onClick={() => vote(1)}>LIKE</button>
                <p>Votes:{votes}</p>
                <button onClick={() => vote(-1)}>HATE</button>
            </>
        );
    };
};
const vote = inc_votes => {
    const { article_id } = this.props;
    api
        .patchArticleVotes(article_id, inc_votes)
        .catch(err => {
            this.setState(({ voteChange }) => ({
                voteChange: voteChange - inc_votes
            }));
        });
    this.setState(({ voteChange }) => ({
        voteChange: voteChange + inc_votes
    }));

};

export default Voter;