import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import ArticlePreloader
  from '../../../components/containers/articleThread/articlePreloader';

afterEach(cleanup);


describe('Preloader  component', () => {
  it('should render without crashing', () => {
    render(<Router>
      <ArticlePreloader />
    </Router>);
  });
});
