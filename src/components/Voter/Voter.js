import React, { Component } from "react";
import * as api from "../../api";
import ErrorDisplay from "../ErrorDisplay/ErrorDisplay";

class Voter extends Component {
  state = {
    votes: this.props.votes,
    error: null,
    liked: false,
    hated: false
  };

  render() {
    if (this.state.error)
      return (
        <ErrorDisplay
          status={this.state.error.status}
          msg={this.state.error.msg}
        />
      );
    return (
      <>
        <button
          className="MultipleButtons"
          onClick={() => {
            if (this.state.hated) this.vote(2);
            else this.vote(1);
            this.setState({ liked: true, hated: false });
          }}
          disabled={this.state.liked}
        >
          LIKE
        </button>
        <button
          className="MultipleButtons"
          onClick={() => {
            if (this.state.liked) this.vote(-2);
            else this.vote(-1);
            this.setState({ hated: true, liked: false });
          }}
          disabled={this.state.hated}
        >
          HATE
        </button>
        <p>Votes:{this.state.votes}</p>
      </>
    );
  }

  vote(num) {
    const { article_id, comment_id } = this.props;
    if (article_id) {
      api
        .patchArticleVotes(article_id, num)
        .then(resp => {
          this.setState({ votes: resp.votes });
        })
        .catch(({ response }) => {
          const error = { status: response.status, msg: response.data.msg };
          this.setState({ error, isLoading: false });
        });
    } else if (comment_id) {
      api
        .patchCommentVotes(comment_id, num)
        .then(resp => {
          this.setState({ votes: resp.votes });
        })
        .catch(({ response }) => {
          const error = { status: response.status, msg: response.data.msg };
          this.setState({ error, isLoading: false });
        });
    }
  }
}

export default Voter;
