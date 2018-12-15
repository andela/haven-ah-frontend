import {
  LOVE_REQUEST,
  LOVE_SUCCESS,
  LOVE_FAILURE,
} from '../actionTypes/reactionActionTypes';

export const loveAction = (slug, commentId) => ({
  type: LOVE_REQUEST,
  slug,
  commentId,
});

export const loveSuccess = payload => ({
  type: LOVE_SUCCESS,
  payload,
});

export const loveFailure = error => ({
  type: LOVE_FAILURE,
  error,
});
