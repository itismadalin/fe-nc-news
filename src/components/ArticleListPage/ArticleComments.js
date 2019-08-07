import React, { Component } from 'react';
import CommentCard from './CommentCard';
import * as api from "../../api";

class ArticleComments extends Component {
    state = {
        comments: null,
        isLoading: true
    }
    render() {
        return (
            <div>
                {this.state.comments.map(comment => {
                    return <CommentCard key={comment.comment_id} comment={comment} />
                })}
            </div>
        );
    }

    componentDidMount() {
        this.getComments();
    }

    fetchComments = () => {
        api.getComments(this.props.article_id).then(comments => {
            this.setState({ comments, isLoading: false })
        });
    };
}

export default ArticleComments;