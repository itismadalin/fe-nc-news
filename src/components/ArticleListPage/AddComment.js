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
                        rows="5"
                        cols="60"
                        value={this.state.comment}
                        onChange={this.handleChange}
                        placeholder="Post your thoughts on this..."
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
        const { article_id, onChange } = this.props;
        e.preventDefault();
        api.postComment({ body: comment, username: "jessjelly", article_id }).then(comment => {
            onChange();
            this.setState({ comment: "" });
        })
    };

    handleChange = ({ target: { value } }) => {
        this.setState({ comment: value });
    };
}

export default AddComment;

