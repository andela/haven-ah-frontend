import React from 'react';
import { render } from 'react-testing-library';
import App from '../../App';

// const renderer = new ShallowRenderer();

describe('App', () => {
  it('should render without crashing', () => {
    render(<App />);
  });
});
