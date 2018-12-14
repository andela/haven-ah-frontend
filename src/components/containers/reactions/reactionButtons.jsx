import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LikeButton from './LikeButton';
import LoveButton from './LoveButton';
import { likeAction, loveAction } from '../../../actions/reactionAction';

class ReactionButtons extends Component {
  constructor(props) {
    super(props);
    const {
      article: {
        Reactions: {
          hasLiked, likesCount,
          hasLoved, loveCount,
        },
      }, commentId, loves, likes
    } = this.props;
    const loved = commentId ? this.props.hasLoved : hasLoved;
    const loveNum = commentId ? loves : loveCount;

    const liked = commentId ? this.props.hasLiked : hasLiked;
    const likesNum = commentId ? likes : likesCount;

    this.state = {
      liked,
      likesNum,
      loved,
      loveNum,
    };
  }

  handleLike = () => {
    const { slug } = this.props.article;
    const { commentId } = this.props;
    const { liked, loved } = this.state;
    let { likesNum, loveNum } = this.state;
    if (liked) {
      likesNum -= 1;
    } else {
      likesNum += 1;
    }
    const newState = {
      likesNum,
      liked: !liked,
    };

    if (loved) {
      loveNum -= 1;
      newState.loved = !loved;
      newState.loveNum = loveNum;
    }

    if (commentId) {
      this.props.likeAction(slug, commentId);
      this.setState(newState);
    } else {
      this.props.likeAction(slug);
      this.setState(newState);
    }
  }

  handleLove = () => {
    const { slug } = this.props.article;
    const { liked, loved } = this.state;
    const { commentId } = this.props;
    let { loveNum, likesNum } = this.state;
    if (this.state.loved) {
      loveNum -= 1;
    } else {
      loveNum += 1;
    }

    const newState = {
      loveNum,
      loved: !loved,
    };

    if (liked) {
      likesNum -= 1;
      newState.liked = !liked;
      newState.likesNum = likesNum;
    }

    if (commentId) {
      this.props.loveAction(slug, commentId);
      this.setState(newState);
    } else {
      this.props.loveAction(slug);
      this.setState(newState);
    }
  }

  render() {
    const {
      loved, liked, likesNum, loveNum,
    } = this.state;
    return (
      <span className="justify-content__start">
        <LoveButton
          loves={loveNum}
          hasLoved={loved}
          onLove={this.handleLove}
        />
        <LikeButton
          likes={likesNum}
          hasLiked={liked}
          onLike={this.handleLike}
        />
      </span>
    );
  }
}

const mapStateToProps = state => ({
  reaction: state.reaction.payload,
  article: state.articleThread.article,
});

ReactionButtons.propTypes = {
  article: PropTypes.object,
  comment: PropTypes.object,
  reaction: PropTypes.object,
  likeAction: PropTypes.func.isRequired,
  loveAction: PropTypes.func.isRequired,
  hasLiked: PropTypes.bool,
  hasLoved: PropTypes.bool,
  loves: PropTypes.number,
  likes: PropTypes.number,
  commentId: PropTypes.number,
};

ReactionButtons.defaultProps = {
  article: {},
  reaction: {},
  comment: null,
  commentId: null,
};

export default connect(
  mapStateToProps, { loveAction, likeAction }
)(ReactionButtons);
