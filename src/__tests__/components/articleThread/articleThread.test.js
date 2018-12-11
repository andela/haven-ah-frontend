import React from 'react';
import { cleanup } from 'react-testing-library';
import ShallowRenderer from 'react-test-renderer/shallow';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../testUtilities/store';
import ArticleThread
  from '../../../components/containers/articleThread/articleThread';
import {
  initialArticleThread,
  articleThread,
  match
} from '../../testUtilities/mockData';

const renderer = new ShallowRenderer();
afterEach(cleanup);

const initialStore = store(initialArticleThread);
const articleThreadStore = store(articleThread);

describe('ArticleThread component', () => {
  it('should render without crashing', () => {
    renderer.render(<Router>
      <ArticleThread match={match} store={initialStore} />
    </Router>);
  });

  describe('Article thread conditional rendering', () => {
    it('should render article thread without images', () => {
      renderer.render(<Router>
        <ArticleThread match={match} store={articleThreadStore} />
      </Router>);
    });
  });
});
