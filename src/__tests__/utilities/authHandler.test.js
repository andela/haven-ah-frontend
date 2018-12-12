import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import handleAuth from '../../utilities/authHandler';

const Component = handleAuth(<p>This is a login Page</p>);

afterEach(cleanup);

describe('Social Authentication  component', () => {
  it('should render without crashing', () => {
    render(
      <Router>
        <Route exact path="/login" component={Component} />
      </Router>
    );
  });
});
