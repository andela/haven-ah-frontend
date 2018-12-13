import {
  ARTICLE_THREAD_REQUEST,
  ARTICLE_THREAD_SUCCESS,
  ARTICLE_THREAD_FAILURE,
  CLEAR_REDIRECT
} from '../actionTypes/articleThreadActionTypes';

export const fetchArticle = slug => ({
  type: ARTICLE_THREAD_REQUEST,
  payload: slug
});

export const fetchArticleSuccess = data => ({
  type: ARTICLE_THREAD_SUCCESS,
  payload: data,
});

export const fetchArticleFailure = error => ({
  type: ARTICLE_THREAD_FAILURE,
  payload: error,
});

export const clearRedirect = () => ({
  type: CLEAR_REDIRECT
});
