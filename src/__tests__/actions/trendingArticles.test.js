import {
  trendingArticlesAction,
  trendingArticlesFailureAction,
  trendingArticlesSuccessAction
} from '../../actions/trendingArticlesAction';

import {
  TRENDING_ARTICLES_REQUEST,
  TRENDING_ARTICLES_SUCCESS,
  TRENDING_ARTICLES_FAILURE
} from '../../actionTypes/trendingActionType';

describe('trending article thread action', () => {
  it('should return the predefined action', () => {
    expect(trendingArticlesAction()).toEqual({
      type: TRENDING_ARTICLES_REQUEST,
    });
  });
});
describe('Fetch article Success ation', () => {
  it('should return the correct action type and payload', () => {
    expect(trendingArticlesSuccessAction({ article: 'dummy article' }))
      .toEqual({
        type: TRENDING_ARTICLES_SUCCESS,
        articles: {
          article: 'dummy article'
        },
      });
  });
});
describe('Fetch article failure action', () => {
  it('should return the correct action type and payload', () => {
    expect(trendingArticlesFailureAction({ error: 'Bad response' })).toEqual({
      type: TRENDING_ARTICLES_FAILURE,
      error: {
        error: 'Bad response'
      },
    });
  });
});
