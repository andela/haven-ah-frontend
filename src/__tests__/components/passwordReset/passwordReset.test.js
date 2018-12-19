import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from 'react-testing-library';
import PasswordReset
  from '../../../components/views/PasswordReset';
import BeginReset
  from '../../../components/containers/passwordReset/beginPasswordReset';
import UpdatePassword
  from '../../../components/containers/passwordReset/updatePassword';
import PasswordResetComponent
  from '../../../components/containers/passwordReset/passwordReset';
import { match, resetPasswordState, location } from '../../testUtilities/mockData';
import store from '../../testUtilities/store';

afterEach(cleanup);

describe('Password reset component', () => {
  const beginResetStore = store(resetPasswordState(false, false, false, false));
  const finalResetStore = store(resetPasswordState(true, true, true, true));
  it('should render without crashing', () => {
    render(
      <Router><PasswordReset match={match} /></Router>
    );
  });

  it('should render child components', () => {
    render(
      <Router><BeginReset match={match} store={beginResetStore} /></Router>
    );
  });

  it('should render child components', () => {
    const { getByText, getByTestId } = render(
      <Router><BeginReset match={match} store={finalResetStore} /></Router>
    );

    const emailInput = getByTestId('email');
    emailInput.value = 'hello';

    const submitBtn = getByText('Retrieve account');
    fireEvent.change(emailInput, { target: { value: 'Hello there' } });
    fireEvent.click(submitBtn);
  });

  it('should render reset password component', () => {
    render(
      <Router>
        <PasswordResetComponent
          confirmTokenRequest={jest.fn()}
          location={location}
          store={beginResetStore}
        />
      </Router>
    );
    render(
      <Router>
        <PasswordResetComponent
          confirmTokenRequest={jest.fn()}
          location={location}
          store={finalResetStore}
        />
      </Router>
    );
  });

  it('should render update password component', () => {
    render(
      <Router><UpdatePassword match={match} store={finalResetStore} /></Router>
    );
  });

  it('should render update password component', () => {
    const { getByText, getByTestId } = render(
      <Router><UpdatePassword match={match} store={beginResetStore} /></Router>
    );
    const submitBtn = getByText('Update password');
    const passwordInput = getByTestId('password');
    passwordInput.value = 'hello';
    fireEvent.click(submitBtn);

    const confirmPasswordInput = getByTestId('confirmpassword');
    confirmPasswordInput.value = 'hello';


    fireEvent.change(passwordInput, { target: { value: 'Hello there' } });
    fireEvent.click(submitBtn);

    fireEvent.change(passwordInput, { target: { value: 'helohelohelo' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'helohelohelo' } });
    fireEvent.click(submitBtn);
  });
});
