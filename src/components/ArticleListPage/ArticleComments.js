import React, { Component } from 'react';
import CommentCard from './CommentCard';
import * as api from '../Api/api';
import AddComment from './AddComment';

class ArticleComments extends Component {
    state = {
        comments: null,
        isLoading: true
    }
    render() {
        return (
            <div>
                <AddComment article_id={this.props.article_id} AddComment={this.AddComment} />
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