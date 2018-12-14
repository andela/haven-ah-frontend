import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import handleAuth from '../../utilities/authHandler';
import MockLocalStorage from '../../helpers/mockLocalStorage';
import UserNavItems from '../../components/containers/navbar/userNavItems';

afterEach(cleanup);

describe('Social Authentication  component', () => {
  it('should render without crashing', () => {
    const Component = handleAuth(UserNavItems);
    render(
      <Router>
        <Route exact path="/login" component={Component} />
      </Router>
    );
  });

  it('should redirect to homepage', () => {
    global.localStorage = new MockLocalStorage();
    localStorage.setItem('token', 'SULLIVAN.JIGGY.PRISCILLA.UCHE.THEO');

    const Component = handleAuth(UserNavItems);
    render(
      <Router>
        <Route exact path="/login" component={Component} />
      </Router>
    );
  });
});
