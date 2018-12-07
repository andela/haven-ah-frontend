import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import ArticleThread from '../../../components/containers/articleThread/articleThread';
<<<<<<< HEAD
import store from '../../utitlities/store';
import {
  initialArticleThread,
  articleThread,
  match
} from '../../utitlities/mockData';

afterEach(cleanup);

const initialStore = store(initialArticleThread);
const articleThreadStore = store(articleThread);
=======
import store from '../../../store';

afterEach(cleanup);

const match = {
  params: {
    slug: 'dummy-slug'
  }
};
>>>>>>> ft(articles): Get single article

describe('ArticleThread component', () => {
  it('should render without crashing', () => {
    render(<Router>
<<<<<<< HEAD
      <ArticleThread match={match} store={initialStore} />
    </Router>);
  });

  describe('Article thread conditional rendering', () => {
    it('should render article thread without images', () => {
      render(<Router>
        <ArticleThread match={match} store={articleThreadStore} />
      </Router>);
    });
  });
=======
      <ArticleThread match={match} store={store} />
    </Router>);
  });
>>>>>>> ft(articles): Get single article
});
