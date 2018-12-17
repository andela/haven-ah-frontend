import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import RecentArticleCard from
  '../../../components/containers/recentArticles/recentArticlesCard';
import store from '../../../store';

afterEach(cleanup);
const article = {
  id: 2,
  title: 'a title',
  images: [],
  description: 'a description',
  readtime: 500,
  Author: {
    username: 'uchman',
    imageUrl: 'htps://'
  }
};

describe('Recent Articles component', () => {
  it('should render without crashing', () => {
    render(<Provider store={store}><Router>
      <RecentArticleCard article={article}
        store={store} />
    </Router></Provider>);
  });
});
