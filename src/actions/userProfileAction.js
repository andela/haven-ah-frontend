import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILURE,
  USER_BOOKMARK_FAILURE,
  USER_BOOKMARK_SUCCESS,
  USER_BOOKMARK_REQUEST
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
