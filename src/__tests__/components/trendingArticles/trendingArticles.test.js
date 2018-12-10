import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import TrendingSection
  from '../../../components/trendingsection/TrendingSection';
import store from '../../testUtilities/store';
import {
  trendingArticles,
} from '../../testUtilities/mockData';

afterEach(cleanup);
const renderer = new ShallowRenderer();

const trendingArticlesStore = store(trendingArticles);

describe('Trending Section  component', () => {
  it('should render without crashing', () => {
    renderer.render(<Router>
      <TrendingSection store={trendingArticlesStore} />
    </Router>);
  });
});
