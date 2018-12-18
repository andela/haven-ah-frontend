import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import TrendingSection from
  '../../../components/trendingsection/TrendingSection';
import store from '../../../store';

afterEach(cleanup);

describe('Trending Section  component', () => {
  const articles = [
    {
      id: 1,
      title: 'MY test article',
      description: 'My test description',
      images: 'https://',
      readtime: '500',
      slug: 'a-slug-85988640950',
      authorImage: 'https://',
      authorName: 'presley',
    },
    {
      id: 2,
      title: 'A test article',
      description: 'A test description',
    },
  ];

  it('should render without crashing', () => {
    render(<Router>
      <TrendingSection store={store} articles={articles}/>
    </Router>);
  });
});
