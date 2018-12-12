import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import SocialAuth from
  '../../../components/containers/auth/SocialAuth';

afterEach(cleanup);

describe('Social Authentication  component', () => {
  it('should render without crashing', () => {
    render(<Router>
      <SocialAuth authType="Sign up">
        <p>This is a Sign up page</p>
      </SocialAuth>
    </Router>);
  });
});
