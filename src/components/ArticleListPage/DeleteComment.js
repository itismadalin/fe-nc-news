import React, { Component } from 'react';
import * as api from '../Api/api';

class DeleteComment extends Component {
    render() {
        return (
            <div>
                <button
                    value={this.props.comment_id}
                    onClick={this.deleteComment}>Remove Comment</button>
            </div>
        );
    }

    deleteComment = () => {
        api.deleteComment(this.props.comment_id)
            .then(response => {
                this.props.onChange();
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export default DeleteComment;