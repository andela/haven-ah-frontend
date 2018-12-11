import React, { Component } from 'react';
import PropTypes from 'prop-types';
import image from '../../../../public/images/man.png';
import './comment.scss';

class CommentForm extends Component {
  state = {
    showCommentInput: false,
    comment: '',
    inputIsValid: false,
  }

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
    const { postCommentFeedback } = this.refs;
    const { slug, postComment } = this.props;

    if (this.state.comment.length > 0) {
      postComment({ slug, comment: this.state.comment });
      postCommentFeedback.className = 'has-text-primary is-size-7 test';
      postCommentFeedback.innerHTML = 'You have posted your comment';
      this.setState({ comment: '' });
    } else {
      postCommentFeedback.className = 'has-text-danger is-size-7 test';
      postCommentFeedback.innerHTML = 'Please enter a comment';
    }
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
            <div className="commentbox-input test">
              <form onSubmit={this.submit} className="test">
                <textarea
                  className="textarea"
                  placeholder="comments here"
                  name="comment"
                  value={this.state.comment}
                  onChange={this.handleInputChange}
                  ref={this.commentInput}
                  data-testid="comment-input"
                />
                <div className="mt-1 test">
                  <button className="test button is-small is-orange mr-1">
                    Comment
                  </button>
                  <span className="is-size-7
                    test" ref="postCommentFeedback"/>
                </div>
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
