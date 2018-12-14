import {
  fetchArticle,
  fetchArticleFailure,
  fetchArticleSuccess,
  getComments,
} from '../../actions/articleThread';

import * as types from '../../actionTypes/articleThreadActionTypes';

describe('Article thread action', () => {
  it('should return the predefined action', () => {
    expect(fetchArticle()).toEqual({
      type: types.ARTICLE_THREAD_REQUEST,
    });
  });
});

describe('Fetch article Success ation', () => {
  it('should return the correct action type and payload', () => {
    expect(fetchArticleSuccess({ article: 'dummy article' })).toEqual({
      type: types.ARTICLE_THREAD_SUCCESS,
      payload: {
        article: 'dummy article'
      },
    });
  });
});

describe('Fetch article failure action', () => {
  it('should return the correct action type and payload', () => {
    expect(fetchArticleFailure({ error: 'Bad response' })).toEqual({
      type: types.ARTICLE_THREAD_FAILURE,
      payload: {
        error: 'Bad response'
      },
    });
  });
});

describe('Get comments request action', () => {
  it('should send request to get comment', () => {
    expect(getComments({ slug: 'slug' })).toEqual({
      type: types.GET_COMMENTS_REQUEST,
      payload: {
        slug: 'slug'
      },
    });
  });
});
