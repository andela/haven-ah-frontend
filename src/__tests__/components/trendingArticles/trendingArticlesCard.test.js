import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import TrendingArticlesCard from '../../../components/trendingsection/TrendingCard';
import store from '../../../store';

afterEach(cleanup);

describe('Hero Section  component', () => {
  it('should render without crashing', () => {
    render(<Router>
      <TrendingArticlesCard
        readtime={80}
        title={'hello'}
        description={'holla'}
        images={[]}
        store={store}
      />
    </Router>);
  });
});
