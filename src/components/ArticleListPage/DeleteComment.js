import React from "react";
import * as api from "../../api";

const DeleteComment = ({ comment_id, disabled, onChange }) => {
  const deleteComment = () => {
    api.deleteComment(comment_id).then(response => {
      onChange();
    });
  };

  return (
    <div>
      <button
        className="MultipleButtons"
        disabled={disabled}
        value={comment_id}
        onClick={deleteComment}
      >
        Remove Comment
      </button>
    </div>
  );
};

export default DeleteComment;
