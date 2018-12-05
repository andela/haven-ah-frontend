import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Navbar from '../../../components/containers/navbar/navbar';

afterEach(cleanup);

const props = {
  isLoggedIn: false,
};

describe('Navbar', () => {
  it('should render without crashing', () => {
    render(<Router><Navbar {...props}/></Router>);
  });
});

describe('Navbar', () => {
  it('should contain header text', () => {
    const { getByText } = render(<Router><Navbar {...props}/></Router>);
    const header = getByText('Haven');
    const headerText = header.textContent;

    expect(headerText).toBe('Haven');
    expect(header).toMatchSnapshot();
  });

  it('should contain a clickable burger', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<Router><Navbar {...props}/></Router>);
    const burger = getByTestId('burger');
    burger.onclick = handleClick;
    fireEvent.click(burger);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    expect(Navbar).toMatchSnapshot();
  });
});
