import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SocialAuth extends Component {
  render() {
    const { authType } = this.props;
    return (
      <div>
        <div className="mt-1">
          <a
            href={`${process.env.API_URL}/auth/google`}
            className="button is-medium is-fullwidth is-outlined">
            <span className="icon is-medium has-text-danger">
              <i className="fa fa-google" />
            </span>
            <span>{authType} with Google</span>
          </a>
        </div>
        <div className="mt-1 mb-1">
          <a
            href={`${process.env.API_URL}/auth/facebook`}
            className="button is-medium is-fullwidth facebook">
            <span className="icon is-medium">
              <i className="fa fa-facebook" />
            </span>
            <span>{authType} with Facebook</span>
          </a>
        </div>
      </div>
    );
  }
}

SocialAuth.propTypes = {
  authType: PropTypes.string.isRequired,
};

export default SocialAuth;
