import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import ArticlePage from '../../../components/views/ArticlePage';

afterEach(cleanup);

const match = {
  path: 'fake/path'
};

describe('ArticlePage component', () => {
  it('should be rendered without crashing', () => {
    render(
      <Router><ArticlePage match={match} /></Router>
    );
  });
});
