import {
  RECENT_ARTICLES_FAILURE,
  RECENT_ARTICLES_REQUEST,
  RECENT_ARTICLES_SUCCESS,
} from '../actionTypes/recentArticlesType';

export const recentArticlesAction = () => ({
  type: RECENT_ARTICLES_REQUEST,
});

export const recentArticlesSuccessAction = articles => ({
  type: RECENT_ARTICLES_SUCCESS,
  articles,
});

export const recentArticlesFailureAction = error => ({
  type: RECENT_ARTICLES_FAILURE,
  error,
});
