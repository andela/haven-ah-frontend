import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import RegisterPage from '../../../components/views/RegisterPage';
import store from '../../../store';

afterEach(cleanup);

describe('RegisterPage Section  component', () => {
  it('should render without crashing', () => {
    render(<Router>
      <RegisterPage store={store} />
    </Router>);
  });
});
