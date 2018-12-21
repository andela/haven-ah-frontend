import {
  REPORT_ARTICLE_REQUEST,
  REPORT_ARTICLE_SUCCESS,
  REPORT_ARTICLE_FAILURE
} from '../../actionTypes/reportArticleActionTypes';

import {
  reportArticle,
  reportArticleSuccess,
  reportArticleFailure
} from '../../actions/reportArticle';


describe('Report article request', () => {
  it('should return a report article request action', () => {
    expect(reportArticle({})).toEqual({
      type: REPORT_ARTICLE_REQUEST,
      payload: {}
    });
  });
});

describe('Report article success', () => {
  it('should return a report article success action', () => {
    expect(reportArticleSuccess('Message')).toEqual({
      type: REPORT_ARTICLE_SUCCESS,
      payload: 'Message'
    });
  });
});

describe('Report article failure', () => {
  it('should return a report article failure action', () => {
    expect(reportArticleFailure('Error')).toEqual({
      type: REPORT_ARTICLE_FAILURE,
      payload: 'Error'
    });
  });
});
