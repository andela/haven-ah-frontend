import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import BeginPasswordReset from '../containers/passwordReset/beginPasswordReset';
import ResetPassword from '../containers/passwordReset/passwordReset';
import UpdatePassword from '../containers/passwordReset/updatePassword';

const PasswordResetPage = ({ match }) => {
  return (
    <div className="layout">
      <Route
        exact
        path={`${match.path}/begin-password-reset`}
        component={BeginPasswordReset}
      />
      <Route
        exact
        path={`${match.path}/update`}
        component={UpdatePassword}
      />
      <Route
        exact
        path={`${match.path}/`}
        component={ResetPassword}
      />
    </div>
  );
};

PasswordResetPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default PasswordResetPage;
