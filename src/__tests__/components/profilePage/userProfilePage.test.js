import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfilePage from '../../../components/views/ProfilePage';
import { userProfile, match } from '../../utitlities/mockData';
import store from '../../testUtilities/store';

afterEach(cleanup);

const profileStore = store(userProfile);

describe('ProfilePage component', () => {
  it('should be rendered without crashing', () => {
    render(
      <Router><ProfilePage match={match} store={profileStore} /></Router>
    );
  });
});
