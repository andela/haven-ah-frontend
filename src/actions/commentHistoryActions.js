import {
  GET_COMMENT_HISTORY,
  COMMENT_HISTORY_SUCCESS,
  COMMENT_HISTORY_FAILURE
} from '../actionTypes/commentHistoryActionTypes';

export const getCommentHistory = payload => ({
  type: GET_COMMENT_HISTORY,
  payload: { ...payload }
});

export const commentHistorySuccess = commentHistory => ({
  type: COMMENT_HISTORY_SUCCESS,
  payload: commentHistory,
});

export const commentHistoryFailure = error => ({
  type: COMMENT_HISTORY_FAILURE,
  payload: error
});
