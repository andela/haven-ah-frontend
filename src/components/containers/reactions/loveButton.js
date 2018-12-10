import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loveAction } from '../../../actions/reactionAction';

class LoveButton extends Component {
  handleLove = () => {
    const { slug } = this.props.article;
    return this.props.loveAction(slug);
  }

  render() {
    const {
      article: {
        Reactions: {
          hasLoved,
        },
      },
    } = this.props;
    return (
      hasLoved
        ? <i
          className="fa fa-heart fa-2x"
          onClick={this.handleLove} />
        : <i
          className="fa fa-heart-o fa-2x"
          onClick={this.handleLove} />
    );
  }
}

const mapStateToProps = state => ({
  reaction: state.reaction.payload,
  article: state.articleThread.article,
});

LoveButton.propTypes = {
  loveAction: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  reaction: PropTypes.object,
};

LoveButton.defaultProps = {
  reaction: {},
};

export default connect(
  mapStateToProps, { loveAction }
)(LoveButton);
