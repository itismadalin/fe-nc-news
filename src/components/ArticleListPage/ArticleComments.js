import React, { Component } from 'react';
import CommentCard from './CommentCard';
import * as api from '../Api/api';

class ArticleComments extends Component {
    state = {
        comments: null,
        isLoading: true
    }
    render() {
        return (
            <div>
                {!this.state.isLoading && this.state.comments.map(comment => {
                    return <CommentCard key={comment.comment_id} comment={comment} />
                })}
            </div>
        );
    }

    componentDidMount() {
        this.getComments();
    }

    getComments = () => {
        api.fetchComments(this.props.article_id).then(comments => {
            this.setState({ comments, isLoading: false })
        });
    };
}

export default ArticleComments;