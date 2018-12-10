import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import ConfirmEmail from '../../../components/containers/confirmEmail';
import {
  redirectSignup,
} from '../../testUtilities/mockData';

afterEach(cleanup);


describe('Hero Section  component', () => {
  it('should render without crashing', () => {
    render(<Router>
      <ConfirmEmail location={redirectSignup.location} />
    </Router>);
  });
});
