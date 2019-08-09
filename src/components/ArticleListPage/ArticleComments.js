import React, { Component } from 'react';
import CommentCard from './CommentCard';
import * as api from '../Api/api';
import AddComment from './AddComment';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';

class ArticleComments extends Component {
    state = {
        comments: null,
        isLoading: true,
        error: null
    }
    render() {
        if (this.state.error) return <ErrorDisplay status={this.state.error.status} msg={this.state.error.msg} />;
        return (
            <div>
                <AddComment article_id={this.props.article_id} onChange={this.getComments} AddComment={this.AddComment} />
                {!this.state.isLoading && this.state.comments.map(comment => {
                    return <CommentCard key={comment.comment_id} comment={comment} onChange={this.getComments} />
                })}
            </div>
        );
    }

    componentDidMount() {
        this.getComments();
    }

    getComments = () => {
        api.fetchComments(this.props.article_id).then(comments => {
            this.setState({ comments, isLoading: false });
        }).catch(({ response }) => {
            const error = { status: response.status, msg: response.data.msg }
            this.setState({ error, isLoading: false })
        });
    };
}

export default ArticleComments;