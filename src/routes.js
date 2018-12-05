import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/views/HomePage';

import Login from './components/views/LoginPage';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default Routes;
