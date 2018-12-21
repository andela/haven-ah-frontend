import React from 'react';
import Navbar from '../containers/navbar/navbar';
import SearchArticle from '../containers/searchArticles/SearchArticles';
import { isLoggedIn } from '../../utilities/auth';

const SearchArticlePage = () => {
  return (
    <div className="layout">
      <div className="container">
        <header>
          <Navbar isLoggedIn={isLoggedIn()} />
        </header>
      </div>
      <SearchArticle />
    </div>
  );
};

export default SearchArticlePage;
