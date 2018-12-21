import {
  REPORT_ARTICLE_REQUEST,
  REPORT_ARTICLE_SUCCESS,
  REPORT_ARTICLE_FAILURE
} from '../actionTypes/reportArticleActionTypes';

export const reportArticle = payload => ({
  type: REPORT_ARTICLE_REQUEST,
  payload
});

export const reportArticleSuccess = message => ({
  type: REPORT_ARTICLE_SUCCESS,
  payload: message
});

export const reportArticleFailure = error => ({
  type: REPORT_ARTICLE_FAILURE,
  payload: error
});
