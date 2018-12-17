import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import LogoutComponent from '../../../components/containers/logout/logout';

afterEach(cleanup);

describe('Logout component', () => {
  it('should render without crashing', () => {
    render(<Router>
      <LogoutComponent />
    </Router>);
  });
});
