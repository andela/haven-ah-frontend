import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import SearchResultCards from
  '../../../components/containers/searchArticles/SearchResultCards';
import store from '../../../store';

afterEach(cleanup);
const articles = {
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

describe('SearchResultCards component', () => {
  it('should render without crashing', () => {
    render(<Provider store={store}><Router>
      <SearchResultCards article={articles}
        store={store} />
    </Router></Provider>);
  });
});
