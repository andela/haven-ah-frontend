import userProfileReducer from '../../reducers/userProfileReducer';
import * as types from '../../actionTypes/userProfileActionType';

describe('User profile reducer: ', () => {
  it('should have the correct default state', () => {
    expect(userProfileReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      fetching: false,
      profile: null,
      bookmarks: null,
      error: null
    });
  });

  it('should update the reducer state while fetching', () => {
    expect(userProfileReducer(undefined, {
      type: types.USER_PROFILE_REQUEST
    })).toEqual({
      fetching: true,
      profile: null,
      bookmarks: null,
      error: null
    });
  });

  it('should update the state when successful', () => {
    expect(userProfileReducer(undefined, {
      type: types.USER_PROFILE_SUCCESS,
      payload: { firstName: 'sullivan' }
    })).toEqual({
      fetching: false,
      profile: { firstName: 'sullivan' },
      bookmarks: null,
      error: false
    });
  });

  it('should add error to the reducer state', () => {
    expect(userProfileReducer(undefined, {
      type: types.USER_PROFILE_FAILURE,
      payload: 'Bad request'
    })).toEqual({
      fetching: false,
      profile: null,
      bookmarks: null,
      error: 'Bad request'
    });
  });

  it('should update the reducer state with bookmarks', () => {
    expect(userProfileReducer(undefined, {
      type: types.USER_BOOKMARK_SUCCESS,
      payload: []
    })).toEqual({
      fetching: false,
      profile: null,
      bookmarks: [],
      error: null
    });
  });

  it('should add error to the reducer state', () => {
    expect(userProfileReducer(undefined, {
      type: types.USER_BOOKMARK_FAILURE,
      payload: 'Bad request'
    })).toEqual({
      fetching: false,
      profile: null,
      bookmarks: null,
      error: 'Bad request'
    });
  });
});
