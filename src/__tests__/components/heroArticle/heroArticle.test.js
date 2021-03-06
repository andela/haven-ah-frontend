import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from
  '../../../components/containers/hero-section/HeroSection';
import store from '../../../store';

afterEach(cleanup);

describe('Hero Section  component', () => {
  it('should render without crashing', () => {
    render(<Router>
      <HeroSection store={store} />
    </Router>);
  });
});
