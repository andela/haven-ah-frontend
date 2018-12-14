import React, { Component } from 'react';
import PropTypes from 'prop-types';
import image from '../../../../public/images/eyes.jpeg';
import './comment.scss';

class CommentForm extends Component {
  state = {
    showCommentInput: false,
    comment: '',
  }

  commentInputSection = React.createRef();

  commentInput = React.createRef();

  showCommentInput = () => {
    this.setState({ showCommentInput: true });
    this.toggleCommentInput();
    setTimeout(() => this.commentInput.current.focus());
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  toggleCommentInput = () => {
    window.addEventListener('click', (event) => {
      if (!event.target.parentNode.className.includes('test')
        && this.state.showCommentInput) {
        this.setState({ showCommentInput: false });
      }
    });
  }

  submit = (event) => {
    event.preventDefault();
    const { slug, postComment } = this.props;
    postComment({ slug, comment: this.state.comment });
  }

  render() {
    return (
      <div className="comment-area test">
        <div className="commentbox--owner justify-content__start test"
          onClick={this.showCommentInput}>
          <img className="commenter-avatar__image test" src={image} />
          <span className="add-comment-text test">Add comment...</span>
        </div>
        {
          this.state.showCommentInput
          && (
            <div className="commentbox-input test"
              ref={this.commentInputSection}>
              <form onSubmit={this.submit} className="test">
                <textarea
                  className="textarea"
                  placeholder="comments here"
                  name="comment"
                  value={this.state.comment}
                  onChange={this.handleInputChange}
                  ref={this.commentInput}
                />
                <button className="test button is-small mt-1 is-orange">
                  Comment
                </button>
              </form>
            </div>
          )
        }
      </div>
    );
  }
}

CommentForm.propTypes = {
  slug: PropTypes.string.isRequired,
  postComment: PropTypes.func.isRequired
};

export default CommentForm;
