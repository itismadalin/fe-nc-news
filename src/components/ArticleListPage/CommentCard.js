import React from 'react';

const CommentCard = ({ comment }) => {
    return (
        <div className="CommentCard">
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <p>{comment.created_at}</p>
            <p>{comment.votes}</p>
        </div>
    );
};

export default CommentCard;