import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../../App';

const renderer = new ShallowRenderer();

describe('App', () => {
  it('should render without crashing', () => {
    renderer.render(<App />);
  });
});
