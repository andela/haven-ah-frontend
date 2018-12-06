import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import TrendingSection from '../../../components/trendingsection/TrendingSection';
import store from '../../../store';

afterEach(cleanup);

describe('Hero Section  component', () => {
  it('should render without crashing', () => {
    render(<Router>
      <TrendingSection store={store} />
    </Router>);
  });
});
