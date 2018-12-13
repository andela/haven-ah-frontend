import {
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_FAILURE,
  CREATE_ARTICLE_SUCCESS
} from '../actionTypes/createArticle';

export const createArticleRequest = article => ({
  type: CREATE_ARTICLE_REQUEST,
  payload: article
});

export const createArticleSuccess = data => ({
  type: CREATE_ARTICLE_SUCCESS,
  payload: data,
});

export const createArticleFailure = error => ({
  type: CREATE_ARTICLE_FAILURE,
  payload: error,
});
