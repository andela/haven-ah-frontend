import userProfileReducer from '../../reducers/userProfileReducer';
import * as types from '../../actionTypes/userProfileActionType';

describe('User profile reducer: ', () => {
  const state = {
    fetching: false,
    profile: null,
    bookmarks: null,
    error: null,
    updating: false,
    userData: null,
  };

  it('should have the correct default state', () => {
    expect(userProfileReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      ...state
    });
  });

  it('should update the reducer state while fetching', () => {
    expect(userProfileReducer(undefined, {
      type: types.USER_PROFILE_REQUEST
    })).toEqual({
      ...state,
      fetching: true,
    });
  });

  it('should update the state when successful', () => {
    expect(userProfileReducer(undefined, {
      type: types.USER_PROFILE_SUCCESS,
      payload: { firstName: 'sullivan' }
    })).toEqual({
      ...state,
      profile: { firstName: 'sullivan' },
    });
  });

  it('should add error to the reducer state', () => {
    expect(userProfileReducer(undefined, {
      type: types.USER_PROFILE_FAILURE,
      payload: 'Bad request'
    })).toEqual({
      ...state,
      error: 'Bad request'
    });
  });

  it('should update the reducer state with bookmarks', () => {
    expect(userProfileReducer(undefined, {
      type: types.USER_BOOKMARK_SUCCESS,
      payload: []
    })).toEqual({
      ...state,
      bookmarks: [],
    });
  });

  it('should add error to the reducer state', () => {
    expect(userProfileReducer(undefined, {
      type: types.USER_BOOKMARK_FAILURE,
      payload: 'Bad request'
    })).toEqual({
      ...state,
      error: 'Bad request'
    });
  });
});
