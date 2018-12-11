import {
  recentArticlesAction,
  recentArticlesFailureAction,
  recentArticlesSuccessAction
} from '../../actions/recentArticlesAction';

import {
  RECENT_ARTICLES_REQUEST,
  RECENT_ARTICLES_FAILURE,
  RECENT_ARTICLES_SUCCESS
} from '../../actionTypes/recentArticlesType';

describe('RECENT article thread action', () => {
  it('should return the predefined action', () => {
    expect(recentArticlesAction()).toEqual({
      type: RECENT_ARTICLES_REQUEST,
    });
  });
});
describe('Fetch article Success ation', () => {
  it('should return the correct action type and payload', () => {
    expect(recentArticlesSuccessAction({ article: 'dummy article' })).toEqual({
      type: RECENT_ARTICLES_SUCCESS,
      articles: {
        article: 'dummy article'
      },
    });
  });
});
describe('Fetch article failure action', () => {
  it('should return the correct action type and payload', () => {
    expect(recentArticlesFailureAction({ error: 'Bad response' })).toEqual({
      type: RECENT_ARTICLES_FAILURE,
      error: {
        error: 'Bad response'
      },
    });
  });
});
