import React, { Component } from 'react';
import * as api from '../Api/api';

class AddComment extends Component {
    state = {
        comment: ''
    }
    render() {
        return (
            <section className="AddComment">
                <form className="AddComment" onSubmit={this.handleSubmit}>
                    <textarea
                        value={this.state.comment}
                        onChange={this.handleChange}
                        placeholder="Post your thoughts..."
                        name="comment"
                        required
                    />
                    <br></br>
                    <br></br>
                    <input type="submit" value="Add Comment" />
                </form>
            </section>
        );
    }

    handleSubmit = e => {
        const { comment } = this.state;
        const { article_id } = this.props;
        e.preventDefault();
        api.postComment({ body: comment, article_id }).then(comment => {
            this.props.addComment(comment);
            this.setState({ comment: "" });
        });
    };

    handleChange = ({ target: { value } }) => {
        this.setState({ comment: value });
    };
}

export default AddComment;

