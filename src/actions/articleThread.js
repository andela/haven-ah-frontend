import * as types from '../actionTypes/articleThreadActionTypes';

export const fetchArticle = slug => ({
  type: types.ARTICLE_THREAD_REQUEST,
  payload: slug
});

export const fetchArticleSuccess = data => ({
  type: types.ARTICLE_THREAD_SUCCESS,
  payload: data,
});

export const fetchArticleFailure = error => ({
  type: types.ARTICLE_THREAD_FAILURE,
  payload: error,
});

export const getComments = slug => ({
  type: types.GET_COMMENTS_REQUEST,
  payload: slug,
});

export const getCommentsSuccess = comments => ({
  type: types.GET_COMMENTS_SUCCESS,
  payload: comments,
});

export const getCommentsFailure = response => ({
  type: types.GET_COMMENTS_FAILURE,
  payload: response.message,
});

export const postComment = commentObj => ({
  type: types.POST_COMMENT_REQUEST,
  payload: commentObj,
});

export const postCommentSuccess = newComment => ({
  type: types.POST_COMMENT_SUCCESS,
  payload: newComment,
});

export const postCommentFailure = error => ({
  type: types.POST_COMMENT_FAILURE,
  payload: error,
});

export const clearRedirect = () => ({
  type: types.CLEAR_REDIRECT
});
