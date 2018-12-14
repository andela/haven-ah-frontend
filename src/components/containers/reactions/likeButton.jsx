import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LikeButton extends Component {
  handleLike = () => {
    this.props.onLike();
  }

  render() {
    const { hasLiked, likes } = this.props;
    return (
      hasLiked
        ? <div className="article--reaction__like">
          <i
            data-testid="like"
            className="fa fa-thumbs-up fa-2x"
            onClick={this.handleLike} />
          <span className="article--reaction__like-count">
            {likes}
          </span>
        </div>
        : <div className="article--reaction__like">
          <i
            data-testid="like"
            className="fa fa-thumbs-o-up fa-2x"
            onClick={this.handleLike} />
          <span className="article--reaction__like-count">
            {likes}
          </span>
        </div>
    );
  }
}

LikeButton.propTypes = {
  onLike: PropTypes.func,
  hasLiked: PropTypes.bool,
  likes: PropTypes.number,
  commentId: PropTypes.number,
};

LikeButton.defaultProps = {
  reaction: {},
  likes: null,
  hasLiked: null,
  commentId: null,
  onLove: null,
};

export default LikeButton;
