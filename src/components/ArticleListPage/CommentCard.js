import React from "react";
import Voter from "../Voter/Voter";
import DeleteComment from "../ArticleListPage/DeleteComment";

const CommentCard = ({ comment, username, onChange }) => {
  return (
    <div className="CommentCard">
      <p>{comment.body}</p>
      <p>{comment.author}</p>
      <p>{comment.created_at}</p>
      <Voter votes={comment.votes} comment_id={comment.comment_id} />
      <DeleteComment
        comment_id={comment.comment_id}
        disabled={username === comment.author ? false : true}
        onChange={onChange}
      />
    </div>
  );
};

export default CommentCard;
