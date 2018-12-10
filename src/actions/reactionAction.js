import {
  LIKE_REQUEST,
  LIKE_SUCCESS,
  LIKE_FAILURE,
  LOVE_REQUEST,
  LOVE_SUCCESS,
  LOVE_FAILURE,
} from '../actionTypes/reactionActionTypes';

export const likeAction = slug => ({
  type: LIKE_REQUEST,
  slug,
});

export const likeSuccess = payload => ({
  type: LIKE_SUCCESS,
  payload,
});

export const likeFailure = error => ({
  type: LIKE_FAILURE,
  error,
});

export const loveAction = slug => ({
  type: LOVE_REQUEST,
  slug,
});

export const loveSuccess = payload => ({
  type: LOVE_SUCCESS,
  payload,
});

export const loveFailure = error => ({
  type: LOVE_FAILURE,
  error,
});
