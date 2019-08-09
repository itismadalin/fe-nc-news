import React, { Component } from 'react';
import * as api from '../Api/api';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';

class AddComment extends Component {
    state = {
        comment: '',
        isLoading: true,
        error: null
    }
    render() {
        if (this.state.error) return <ErrorDisplay status={this.state.error.status} msg={this.state.error.msg} />;
        return (
            <section>
                <form className="AddComment" onSubmit={this.handleSubmit}>
                    <textarea
                        className="Textarea"
                        value={this.state.comment}
                        onChange={this.handleChange}
                        placeholder="Post your thoughts on this..."
                        required
                    />
                    <br></br>
                    <br></br>
                    <input className="MultipleButtons" type="submit" value="Add Comment" />
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
        }).catch(({ response }) => {
            const error = { status: response.status, msg: response.data.msg }
            this.setState({ error, isLoading: false })
        });
    };

    handleChange = ({ target: { value } }) => {
        this.setState({ comment: value });
    }
}

export default AddComment;

