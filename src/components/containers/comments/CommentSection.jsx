import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';
import CommentModal from './CommentModal';
import CommentHistoryModal from './CommentHistoryModal';
import { getCommentHistory } from '../../../actions/commentHistoryActions';

const getArray = (arr, limit) => {
  return arr.filter((elem, index) => index < limit);
};

class CommentSection extends Component {
  state = {
    comment: {},
    replies: [],
    displayModal: false,
    displayHistoryModal: false,
    comments: [],
    count: 0,
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

  getHistory = (commentId) => {
    const { getHistory, slug } = this.props;
    getHistory({ slug, commentId });
    this.setState({
      displayHistoryModal: true,
    });
  }

  renderModal = () => {
    const { comment, replies, displayModal } = this.state;
    return (displayModal
      && <div className="columns" >
        <div className="column">
          <CommentModal replies={replies}
            comment={comment}
            hideModal={this.hideModal}
            displayModal={this.displayModal}
            displayHistoryModal={this.displayHistoryModal}
            slug={this.props.slug} />
        </div>
      </div>);
  }

  renderHistoryModal = () => {
    const { commentHistory } = this.props;
    if (commentHistory) {
      return (
        <CommentHistoryModal
          comments={commentHistory}
          closeModal={this.closeHistoryModal} />
      );
    }
  }

  closeHistoryModal = () => {
    this.setState({
      displayHistoryModal: false,
      commentHistory: []
    });
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
      newComment, comments, slug, fetching, commentHistory
    } = this.props;

    const { count } = this.state;

    return (
      <div>
        {this.renderModal()}
        {
          commentHistory
          && this.state.displayHistoryModal
          && <CommentHistoryModal
            comments={commentHistory}
            closeModal={this.closeHistoryModal} />
        }
        <div className="container">
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
                    </span>
                  }
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
                        displayModal={this.displayModal}
                        getHistory={this.getHistory}
                      />
                    </div>
                    <div className="column is-2" />
                  </div>
                );
              })
            }
            {
              newComment && <div className="columns"
                key={newComment.id}>
                <div className="column is-2" />
                <div className="column">
                  <CommentCard
                    comment={newComment}
                    displayModal={this.displayModal}
                  />
                </div>
                <div className="column is-2" />
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

CommentSection.propTypes = {
  slug: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
  newComment: PropTypes.object,
  comments: PropTypes.array,
  postComment: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired,
  getHistory: PropTypes.func.isRequired,
  commentHistory: PropTypes.array
};

CommentSection.defaultProps = {
  newComment: {},
  comments: [],
  commentHistory: []
};

const mapStateToProps = state => ({
  error: state.commentHistory.error,
  commentHistory: state.commentHistory.commentHistory,
});


export default connect(
  mapStateToProps,
  { getHistory: getCommentHistory }
)(CommentSection);
