import React from 'react';
import Navbar from '../containers/navbar/navbar';
import CreateAticle from '../containers/createArticle/createArticle';

const CreateArticlePage = () => {
  return (
    <div className="layout">
      <div className="container">
        <header>
          <Navbar isLoggedIn />
        </header>
      </div>
      <CreateAticle />
    </div>
  );
};

export default CreateArticlePage;
