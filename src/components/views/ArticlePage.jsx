import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../containers/navbar/navbar';
import ArticleThread from '../containers/articleThread/articleThread';

const ArticlePage = ({ match }) => {
  return (
    <div className="layout">
      <div className="container">
        <header>
          <Navbar isLoggedIn />
        </header>
      </div>

      <Route exact path={`${match.path}/:slug`} component={ArticleThread}/>
    </div>
  );
};

ArticlePage.propTypes = {
  match: PropTypes.object.isRequired
};

export default ArticlePage;
