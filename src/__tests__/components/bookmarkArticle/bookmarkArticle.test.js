import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import BookmarkArticle from
  '../../../components/containers/bookmarkArticle/bookmarkArticle';
import store from '../../../store';

afterEach(cleanup);
const article = {
  id: 2,
  slug: 'atitle-7458687',
  bookmarkFlag: true
};

const articles = {
  id: 2,
  slug: 'atitle-7458687',
  bookmarkFlag: false,
};

describe('Bookmark Articles component', () => {
  it('should render without crashing', () => {
    render(<BookmarkArticle article={article}
      store={store} />);
  });
  it('should handle click for bookmarking', () => {
    const handleClick = jest.fn();
    localStorage.setItem('token', 'bhedhbhhdfgh');

    const { getByTestId } = render(
      <BookmarkArticle article={article}
        store={store} />
    );

    expect(localStorage.getItem('token')).toBe('bhedhbhhdfgh');
    const bookmark = getByTestId('bookmark');
    bookmark.onclick = handleClick;
    fireEvent.click(bookmark);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('should handle click for unbookmarking', () => {
    const handleClick = jest.fn();
    localStorage.setItem('token', 'bhedhbhhdfgh');

    const { getByTestId } = render(
      <BookmarkArticle article={articles}
        store={store} />
    );

    expect(localStorage.getItem('token')).toBe('bhedhbhhdfgh');
    const bookmark = getByTestId('bookmark');
    bookmark.onclick = handleClick;
    fireEvent.click(bookmark);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
