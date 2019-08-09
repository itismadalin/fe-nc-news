import React from 'react';
import * as api from '../Api/api';

const DeleteComment = ({ comment_id, onChange }) => {

    const deleteComment = () => {
        api.deleteComment(comment_id)
            .then(response => {
                onChange();
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            <button
                value={comment_id}
                onClick={deleteComment}>Remove Comment</button>
        </div>
    );
}

export default DeleteComment;