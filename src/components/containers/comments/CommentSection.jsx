import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import CommentModal from './CommentModal';

const getArray = (arr, limit) => {
  return arr.filter((elem, index) => index < limit);
};

class CommentSection extends Component {
  state = {
    comment: {},
    replies: [],
    displayModal: false,
    comments: [],
    count: 0,
    lastMaxScrollPos: 0
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const docHeight = document.body.clientHeight;
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = docHeight - windowHeight;
    const scrollPercentage = scroll / bodyHeight;

    if (this.props.comments.length > 0 && scrollPercentage > 0.99) {
      this.setState({
        count: this.state.count + 1,
      });
    }
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
    const {
      newComment, comments, slug, fetching,
    } = this.props;

    const { count } = this.state;

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
        {
          comments
          && !comments.length && <div className="columns">
            <div className="column is-3" />
            <div className="column">
              <button
                data-testid="load-comments-btn"
                className="button is-light is-medium is-fullwidth"
                onClick={this.loadComments}>
                {
                  fetching
                  && <span>
                    <i className="fa fa-spin fa-spinner ah-orange" />
                  </span>}
                <span className="ah-orange ml-1">Load comments...</span>
              </button>
            </div>
            <div className="column is-3" />
          </div>
        }
        <div className="container">
          {
            comments
            && comments.length > 0
            && comments
              .sort((element, prevElement) => {
                return (
                  new Date(element.createdAt) - new Date(prevElement.createdAt)
                );
              })
            && getArray(comments, (count * 10)).map((comment) => {
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
            newComment && <div className="columns">
              <div className="column is-2" />
              <div className="column">
                <CommentCard
                  comment={newComment}
                  key={newComment.id}
                  displayModal={this.displayModal} />
              </div>
              <div className="column is-2" />
            </div>
          }
        </div>
      </div>
    );
  }
}

CommentSection.propTypes = {
  slug: PropTypes.string.isRequired,
  fetching: PropTypes.bool,
  newComment: PropTypes.object,
  comments: PropTypes.array,
  postComment: PropTypes.func,
  getComments: PropTypes.func,
};

export default CommentSection;
