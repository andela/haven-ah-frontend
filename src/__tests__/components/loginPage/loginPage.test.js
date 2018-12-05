import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from '../../../components/views/LoginPage';
import store from '../../../store';

afterEach(cleanup);
const props = {
  loggingIn: false,
  token: 'token',
  error: ''
};

describe('Login page', () => {
  it('should render without crashing', () => {
    render(<Router>
      <LoginPage {...props} store={store} />
    </Router>);
  });
});
