import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  followUserAction,
  unFollowUserAction,
} from '../../../actions/followUser';

class FollowButton extends Component {
  constructor(props) {
    super(props);
    const {
      article: {
        Reactions: {
          hasFollowedAuthor,
        }
      },
    } = this.props;

    this.state = {
      hasFollowedAuthor,
    };
  }

  shouldComponentUpdate(nextProps) {
    const checkFollowing = nextProps.following === this.props.following;

    if (!checkFollowing) {
      this.setState({
        hasFollowedAuthor: !this.state.hasFollowedAuthor,
      });
      return true;
    }
    return true;
  }

  handleFollow = () => {
    const { username } = this.props.article.Author;
    this.props.followUserAction(username);
  }

  handleUnfollow = () => {
    const { username } = this.props.article.Author;
    this.props.unFollowUserAction(username);
  }

  render() {
    const { hasFollowedAuthor } = this.state;
    return (
      hasFollowedAuthor
        ? <button
          data-testid="follow"
          className= {`
            button is-small
            article--button__following`}
          onClick={this.handleUnfollow}>
            Following
        </button>
        : <button
          data-testid="follow"
          className= {`
            button is-small
            article--button__follow`}
          onClick={this.handleFollow}>
            Follow
        </button>
    );
  }
}

const mapStateToProps = state => ({
  article: state.articleThread.article,
  following: state.following.payload,
});

FollowButton.propTypes = {
  article: PropTypes.object,
  Reactions: PropTypes.object,
  followUserAction: PropTypes.func.isRequired,
  unFollowUserAction: PropTypes.func.isRequired,
  following: PropTypes.object,
  status: PropTypes.number,
};

FollowButton.defaultProps = {
  following: {},
  status: 100,
};

export default connect(
  mapStateToProps,
  {
    followUserAction,
    unFollowUserAction,
  }
)(FollowButton);
