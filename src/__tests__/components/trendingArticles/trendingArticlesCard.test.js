import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import TrendingArticlesCard
  from '../../../components/trendingsection/TrendingCard';
import store from '../../../store';

afterEach(cleanup);

describe('Trending Section  component', () => {
  it('should render without crashing', () => {
    render(<Provider store={store}><Router>
      <TrendingArticlesCard
        readtime={80}
        title={'hello'}
        description={'holla'}
        images={[]}
        slug={'gshjbdhjhvjj'}
        authorImage={'https://'}
        authorName={'uche'}
        bookmarkFlag={false}
        store={store}
      />
    </Router></Provider>);
  });
});
