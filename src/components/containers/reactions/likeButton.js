import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { likeAction } from '../../../actions/reactionAction';

class LikeButton extends Component {
  handleLike = () => {
    const { slug } = this.props.article;
    return this.props.likeAction(slug);
  }

  render() {
    const {
      article: {
        Reactions: {
          hasLiked,
        },
      },
    } = this.props;
    return (
      hasLiked
        ? <i
          data-testid="like"
          className="fa fa-thumbs-up fa-2x"
          onClick={this.handleLike} />
        : <i
          data-testid="like"
          className="fa fa-thumbs-o-up fa-2x"
          onClick={this.handleLike} />
    );
  }
}

const mapStateToProps = state => ({
  reaction: state.reaction.payload,
  article: state.articleThread.article,
});

LikeButton.propTypes = {
  likeAction: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  reaction: PropTypes.object,
};

LikeButton.defaultProps = {
  reaction: {},
};

export default connect(
  mapStateToProps, { likeAction }
)(LikeButton);
