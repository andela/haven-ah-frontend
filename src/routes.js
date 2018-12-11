import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/views/HomePage';
import Register from './components/views/RegisterPage';
import confirmEmail from './components/containers/confirmEmail';
import ArticlePage from './components/views/ArticlePage';
import CreateArticle from './components/views/CreateArticlePage';
import checkAuth from './utilities/authHandler';
import Login from './components/views/LoginPage';

const signupOrRedirect = () => {
  return checkAuth(<Register />);
};

const loginOrRedirect = () => {
  return checkAuth(<Login />);
};

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/confirm/" component={confirmEmail} />
      <Route path="/articles" component={ArticlePage} />
      <Route exact path="/signup" component={signupOrRedirect} />
      <Route exact path="/login" component={loginOrRedirect} />
      <Route exact path="/new-article" component={CreateArticle} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default Routes;
