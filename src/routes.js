import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/views/HomePage';
import Register from './components/views/RegisterPage';
import confirmEmail from './components/containers/confirmEmail';
import ArticlePage from './components/views/ArticlePage';

import Login from './components/views/LoginPage';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Register} />
      <Route exact path="/confirm/" component={confirmEmail} />
      <Route path="/articles" component={ArticlePage} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default Routes;
