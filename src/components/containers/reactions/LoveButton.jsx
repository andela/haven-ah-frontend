import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoveButton extends Component {
  handleLove = () => {
    this.props.onLove();
  }

  render() {
    const { hasLoved, loves } = this.props;
    return (
      hasLoved
        ? <div className="article--reaction__love">
          <i
            data-testid="love"
            className="fa fa-heart fa-2x"
            onClick={this.handleLove} />
          <span className="article--reaction__love-count">
            {loves}
          </span>
        </div>
        : <div className="article--reaction__love">
          <i
            data-testid="love"
            className="fa fa-heart-o fa-2x"
            onClick={this.handleLove} />
          <span className="article--reaction__love-count">
            {loves}
          </span>
        </div>
    );
  }
}

LoveButton.propTypes = {
  onLove: PropTypes.func,
  hasLoved: PropTypes.bool,
  loves: PropTypes.number,
  commentId: PropTypes.number,
};

LoveButton.defaultProps = {
  reaction: {},
  hasLoved: null,
  loves: null,
  onLove: null,
};

export default LoveButton;
