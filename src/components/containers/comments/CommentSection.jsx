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
    count: 1,
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
      comments, slug, fetching, commentsLoaded
    } = this.props;

    const { count } = this.state;

    return (
      <div className="container comment--section">
        {this.renderModal()}
        <div className="columns">
          <div className="column is-3" />
          <div className="column test">
            <CommentForm slug={slug} postComment={this.props.postComment} />
          </div>
          <div className="column is-3" />
        </div>
        <div className="container">
          {
            comments
            && comments.length > 0
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
        </div>
        {
          !commentsLoaded && <div className="columns">
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
      </div>
    );
  }
}

CommentSection.propTypes = {
  slug: PropTypes.string.isRequired,
  fetching: PropTypes.bool,
  comments: PropTypes.array,
  postComment: PropTypes.func,
  getComments: PropTypes.func,
  commentsLoaded: PropTypes.bool,
};

export default CommentSection;
