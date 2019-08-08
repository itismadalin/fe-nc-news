import React from 'react';

const Voter = () => {

    const voteUp = ({ article_id, votes }) => {
        console.log('up');
    }

    const voteDown = () => {
        console.log('down');
    }

    return (
        <>
            <button onClick={voteUp}>LIKE</button>
            <p>Votes:{this.props.votes}</p>
            <button onClick={voteDown}>LIKE</button>
        </>
    );
};

export default Voter;