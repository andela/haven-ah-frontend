import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import CommentModal from './CommentModal';

class CommentSection extends Component {
  state = {
    comment: {},
    replies: [],
    displayModal: false,
  }

  loadComments = () => {
    this.props.getComments(this.props.slug);
  }

  renderModal = () => {
    const { comment, replies, displayModal } = this.state;
    return (displayModal
      && <div className="columns" >
        <div className="column">
          <CommentModal replies={replies}
            comment={comment}
            hideModal={this.hideModal}
            displayModal={this.displayModal} />
        </div>
      </div>);
  }

  displayModal = (comment, replies) => {
    this.setState({
      comment,
      replies,
      displayModal: true
    });
  }

  hideModal = () => {
    this.setState({
      comment: {},
      replies: [],
      displayModal: false
    });
  }

  render() {
    const { newComment, comments, slug } = this.props;

    if (comments && comments.length > 0) {
      console.log(comments);
    }

    return (
      <div className="container">
        {this.renderModal()}
        <div className="columns">
          <div className="column is-3" />
          <div className="column test">
            <CommentForm slug={slug} postComment={this.props.postComment} />
          </div>
          <div className="column is-3" />
        </div>
        {comments
          && !comments.length && <div className="columns">
          <div className="column is-3" />
          <div className="column">
            <button className="button is-light is-medium is-fullwidth"
              onClick={this.loadComments}>
              <span className="ah-orange">Load comments...</span>
            </button>
          </div>
          <div className="column is-3" />
        </div>
        }
        <div className="container">
          {
            comments
            && comments.map((comment) => {
              return (
                <div className="columns" key={comment.id}>
                  <div className="column is-2" />
                  <div className="column">
                    <CommentCard
                      comment={comment}
                      displayModal={this.displayModal} />
                  </div>
                  <div className="column is-2" />
                </div>
              );
            })
          }
          {
            newComment && <CommentCard
              comment={newComment}
              key={comment.id}
              displayModal={this.displayModal} />
          }
        </div>
      </div>
    );
  }
}

CommentSection.propTypes = {
  slug: PropTypes.string.isRequired,
  newComment: PropTypes.object,
  comments: PropTypes.array,
  postComment: PropTypes.func,
  getComments: PropTypes.func,
};

export default CommentSection;
