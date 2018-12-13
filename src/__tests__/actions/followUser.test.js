import {
  followUserAction,
  followUserSuccess,
  followUserFailure,
  unFollowUserAction,
  unFollowUserSuccess,
  unFollowUserFailure,
} from '../../actions/followUser';

import {
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILURE,
  UNFOLLOW_USER_REQUEST,
  UNFOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_FAILURE,
} from '../../actionTypes/followUserActionTypes';

const username = 'Xtreme';

describe('Follow User Action', () => {
  it('should return the correct action', () => {
    expect(followUserAction(username)).toEqual({
      type: FOLLOW_USER_REQUEST,
      username,
    });
  });
});
describe('Follow User Action Success', () => {
  it('should return the correct action', () => {
    expect(followUserSuccess({ message: 'dummy message' })).toEqual({
      type: FOLLOW_USER_SUCCESS,
      payload: {
        message: 'dummy message'
      },
    });
  });
});
describe('Follow User Action Failure', () => {
  it('should return the correct action', () => {
    expect(followUserFailure({ error: 'Bad request' })).toEqual({
      type: FOLLOW_USER_FAILURE,
      error: {
        error: 'Bad request'
      },
    });
  });
});

describe('Follow User Action', () => {
  it('should return the correct action', () => {
    expect(unFollowUserAction(username)).toEqual({
      type: UNFOLLOW_USER_REQUEST,
      username,
    });
  });
});
describe('Follow User Action Success', () => {
  it('should return the correct action', () => {
    expect(unFollowUserSuccess({ message: 'dummy message' })).toEqual({
      type: UNFOLLOW_USER_SUCCESS,
      payload: {
        message: 'dummy message'
      },
    });
  });
});
describe('Follow User Action Failure', () => {
  it('should return the correct action', () => {
    expect(unFollowUserFailure({ error: 'Bad request' })).toEqual({
      type: UNFOLLOW_USER_FAILURE,
      error: {
        error: 'Bad request'
      },
    });
  });
});
