import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoveButton from './LoveButton';
import { loveAction } from '../../../actions/reactionAction';
import { getToken } from '../../../utilities/auth';

class ReactionButtons extends Component {
  constructor(props) {
    super(props);
    const {
      article: {
        Reactions: {
          hasLoved, loveCount,
        },
      }, commentId, loves
    } = this.props;
    const loved = commentId ? this.props.hasLoved : hasLoved;
    const loveNum = commentId ? loves : loveCount;

    this.state = {
      loved,
      loveNum,
    };
  }

  handleLove = () => {
    const { slug } = this.props.article;
    const { loved } = this.state;
    const { commentId } = this.props;
    let { loveNum } = this.state;
    let newState = {
      loveNum,
      loved,
    };
    if (getToken()) {
      if (this.state.loved) {
        loveNum -= 1;
      } else {
        loveNum += 1;
      }

      newState = {
        loveNum,
        loved: !loved,
      };
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
      loved, loveNum,
    } = this.state;
    return (
      <span className="justify-content__start">
        <LoveButton
          loves={loveNum}
          hasLoved={loved}
          onLove={this.handleLove}
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
  mapStateToProps, { loveAction }
)(ReactionButtons);
