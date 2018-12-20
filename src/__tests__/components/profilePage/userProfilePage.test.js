import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';
import ProfilePage from '../../../components/views/ProfilePage';
import BioComponent from '../../../components/containers/profile/bio';
import BookmarkCard from '../../../components/containers/profile/bookmarkCard';
import BookmarkComponent
  from '../../../components/containers/profile/bookmarks';
import {
  userProfile, match, article, bookmarks, profile
} from '../../utitlities/mockData';
import store from '../../testUtilities/store';

afterEach(cleanup);

const profileStore = store(userProfile);

describe('ProfilePage component', () => {
  it('should be rendered without crashing', () => {
    render(
      <Router><ProfilePage match={match} store={profileStore} /></Router>
    );
  });

  it('should be rendered without crashing', () => {
    render(
      <Router><BioComponent profile={profile} /></Router>
    );
  });

  it('should be rendered without crashing', () => {
    render(
      <Router><BookmarkCard article={article} /></Router>
    );
  });

  it('should be rendered without crashing', () => {
    render(
      <Router><BookmarkComponent bookmarks={bookmarks} /></Router>
    );
  });
});
