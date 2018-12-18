import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
  USER_BOOKMARK_FAILURE,
  USER_BOOKMARK_SUCCESS,
  USER_BOOKMARK_REQUEST,
  UPDATE_USER_IMAGE,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE
} from '../actionTypes/userProfileActionType';

export const userProfileAction = username => ({
  type: USER_PROFILE_REQUEST,
  payload: username,
});

export const userProfileSuccessAction = profile => ({
  type: USER_PROFILE_SUCCESS,
  payload: profile,
});

export const userProfileFailureAction = error => ({
  type: USER_PROFILE_FAILURE,
  payload: error,
});

export const userBookmarksRequest = username => ({
  type: USER_BOOKMARK_REQUEST,
  payload: username
});

export const userBookmarkSuccess = bookmarks => ({
  type: USER_BOOKMARK_SUCCESS,
  payload: bookmarks
});

export const userBookmarkFailure = error => ({
  type: USER_BOOKMARK_FAILURE,
  payload: error
});

export const updateUserImage = url => ({
  type: UPDATE_USER_IMAGE,
  payload: url
});

export const editProfileAction = (username, userData) => ({
  type: EDIT_PROFILE_REQUEST,
  payload: { username, userData }
});

export const editProfileSuccessAction = userData => ({
  type: EDIT_PROFILE_SUCCESS,
  payload: userData,
});

export const editProfileFailureAction = error => ({
  type: EDIT_PROFILE_FAILURE,
  payload: error
});
