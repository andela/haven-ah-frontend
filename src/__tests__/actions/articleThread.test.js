import {
  fetchArticle,
  fetchArticleFailure,
  fetchArticleSuccess
} from '../../actions/articleThread';

import {
  ARTICLE_THREAD_REQUEST,
  ARTICLE_THREAD_FAILURE,
  ARTICLE_THREAD_SUCCESS
} from '../../actionTypes/articleThreadActionTypes';

describe('Article thread action', () => {
  it('should return the predefined action', () => {
    expect(fetchArticle()).toEqual({
      type: ARTICLE_THREAD_REQUEST,
    });
  });
});
describe('Fetch article Success ation', () => {
  it('should return the correct action type and payload', () => {
    expect(fetchArticleSuccess({ article: 'dummy article' })).toEqual({
      type: ARTICLE_THREAD_SUCCESS,
      payload: {
        article: 'dummy article'
      },
    });
  });
});
describe('Fetch article failure action', () => {
  it('should return the correct action type and payload', () => {
    expect(fetchArticleFailure({ error: 'Bad response' })).toEqual({
      type: ARTICLE_THREAD_FAILURE,
      payload: {
        error: 'Bad response'
      },
    });
  });
});
