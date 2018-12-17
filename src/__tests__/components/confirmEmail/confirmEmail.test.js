import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import ConfirmEmail from
  '../../../components/containers/confirmEmail';
import store from '../../../store';

afterEach(cleanup);

describe('Confirm email  component', () => {
  const props = {
    token: 'jgevygfhjgfjhghdgvjgfag',
    location: {
      search: 'jhhtgbkdhkjrdghk'
    }
  };
  it('should render without crashing', () => {
    render(<Router>
      <ConfirmEmail store={store} {...props}/>
    </Router>);
  });
});
