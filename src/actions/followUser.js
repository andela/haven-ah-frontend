import {
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILURE,
  UNFOLLOW_USER_REQUEST,
  UNFOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_FAILURE,
} from '../actionTypes/followUserActionTypes';

export const followUserAction = username => ({
  type: FOLLOW_USER_REQUEST,
  username,
});

export const followUserSuccess = payload => ({
  type: FOLLOW_USER_SUCCESS,
  payload,
});

export const followUserFailure = error => ({
  type: FOLLOW_USER_FAILURE,
  error,
});

export const unFollowUserAction = username => ({
  type: UNFOLLOW_USER_REQUEST,
  username,
});

export const unFollowUserSuccess = payload => ({
  type: UNFOLLOW_USER_SUCCESS,
  payload,
});

export const unFollowUserFailure = error => ({
  type: UNFOLLOW_USER_FAILURE,
  error,
});
