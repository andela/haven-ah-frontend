import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import ArticleThread from
  '../../../components/containers/articleThread/articleThread';
import store from '../../testUtilities/store';
import {
  initialArticleThread,
  articleThread,
  match
} from '../../testUtilities/mockData';

afterEach(cleanup);

const initialStore = store(initialArticleThread);
const articleThreadStore = store(articleThread);

describe('ArticleThread component', () => {
  it('should render without crashing', () => {
    render(<Provider store={initialStore}><Router>
      <ArticleThread match={match} />
    </Router></Provider>);
  });

  describe('Article thread conditional rendering', () => {
    it('should render article thread without images', () => {
      render(<Provider store={articleThreadStore}><Router>
        <ArticleThread match={match} />
      </Router></Provider>);
    });
  });
});
