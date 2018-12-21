import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchArticles from
  '../../../components/containers/searchArticles/SearchArticles';
import store from '../../../store';


afterEach(cleanup);

describe('Search Articles  component', () => {
  it('should render without crashing', () => {
    render(<Router>
      <SearchArticles store={store}/>
    </Router>);
  });
  it('should handle click for searching articles', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <SearchArticles
        store={store} />
    );

    const search = getByTestId('search');
    search.onclick = handleClick;
    fireEvent.click(search);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it('should handle change for search bar inputs', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <SearchArticles
        store={store} />
    );

    const searchBar = getByTestId('searchBar');
    searchBar.value = 'hello';
    searchBar.onchange = handleClick;
    fireEvent.change(searchBar, { target: { value: 'Hello there' } });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
