import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/HomePage';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default Routes;
