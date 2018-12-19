import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { confirmTokenRequest } from '../../../actions/passwordReset';
import { setResetToken } from '../../../utilities/auth';

class PasswordReset extends Component {
  componentDidMount() {
    const { location, confirmToken } = this.props;
    const token = location.search.split('=')[1];
    confirmToken(token);
    setResetToken(token);
  }

  render() {
    const { confirmSuccess } = this.props;
    if (confirmSuccess) {
      return (<Redirect to="/resetpassword/update" />);
    }

    return (<div>Authenticating ...</div>);
  }
}

PasswordReset.propTypes = {
  location: PropTypes.object.isRequired,
  confirmSuccess: PropTypes.bool.isRequired,
  confirmToken: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  confirmSuccess: state.resetPassword.confirmSuccess
});

export default connect(mapStateToProps, {
  confirmToken: confirmTokenRequest
})(PasswordReset);
