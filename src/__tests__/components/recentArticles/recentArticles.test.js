import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import RecentArticles from
  '../../../components/containers/recentArticles/RecentArticles';
import store from '../../../store';


afterEach(cleanup);

describe('Recent Articles  component', () => {
  const props = {
    articles: [
      {
        id: 1,
        title: 'test article',
        description: 'im a tesst',
      },
    ],
    recentArticlesAction: jest.fn(),
  };

  it('should render without crashing', () => {
    render(<Router>
      <RecentArticles {...props} store={store}/>
    </Router>);
  });
});
