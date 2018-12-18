import {
  BOOKMARK_ARTICLE_REQUEST,
  BOOKMARK_ARTICLE_SUCCESS,
  BOOKMARK_ARTICLE_FAILURE,
  UNBOOKMARK_ARTICLE_REQUEST,
  UNBOOKMARK_ARTICLE_SUCCESS,
  UNBOOKMARK_ARTICLE_FAILURE,
} from '../actionTypes/bookmarkArticleActionTypes';

export const bookmarkArticleAction = slug => ({
  type: BOOKMARK_ARTICLE_REQUEST,
  payload: slug,
});
export const bookmarkArticleSuccess = payload => ({
  type: BOOKMARK_ARTICLE_SUCCESS,
  payload,
});
export const bookmarkArticleFailure = error => ({
  type: BOOKMARK_ARTICLE_FAILURE,
  error,
});
export const unbookmarkArticleAction = (slug, id) => ({
  type: UNBOOKMARK_ARTICLE_REQUEST,
  payload: {
    id,
    slug
  },
});
export const unbookmarkArticleSuccess = payload => ({
  type: UNBOOKMARK_ARTICLE_SUCCESS,
  payload,
});
export const unbookmarkArticleFailure = error => ({
  type: UNBOOKMARK_ARTICLE_FAILURE,
  error,
});
