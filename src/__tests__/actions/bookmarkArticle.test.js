import {
  bookmarkArticleAction,
  bookmarkArticleFailure,
  bookmarkArticleSuccess,
  unbookmarkArticleAction,
  unbookmarkArticleFailure,
  unbookmarkArticleSuccess
} from '../../actions/bookmarkArticle';

import {
  BOOKMARK_ARTICLE_REQUEST,
  BOOKMARK_ARTICLE_FAILURE,
  BOOKMARK_ARTICLE_SUCCESS,
  UNBOOKMARK_ARTICLE_REQUEST,
  UNBOOKMARK_ARTICLE_FAILURE,
  UNBOOKMARK_ARTICLE_SUCCESS
} from '../../actionTypes/bookmarkArticleActionTypes';

describe('bookmark article thread action', () => {
  it('should return the predefined action', () => {
    expect(bookmarkArticleAction()).toEqual({
      type: BOOKMARK_ARTICLE_REQUEST,
      slug: undefined
    });
  });
});
describe('bookmark article Success ation', () => {
  it('should return the correct action type and payload', () => {
    expect(bookmarkArticleSuccess({ article: 'dummy article' }))
      .toEqual({
        type: BOOKMARK_ARTICLE_SUCCESS,
        payload: {
          article: 'dummy article'
        },
      });
  });
});
describe('bookmark article failure action', () => {
  it('should return the correct action type and payload', () => {
    expect(bookmarkArticleFailure({ error: 'Bad response' })).toEqual({
      type: BOOKMARK_ARTICLE_FAILURE,
      error: {
        error: 'Bad response'
      },
    });
  });
});

describe('unbookmark article thread action', () => {
  it('should return the predefined action', () => {
    expect(unbookmarkArticleAction()).toEqual({
      type: UNBOOKMARK_ARTICLE_REQUEST,
      payload: {
        slug: undefined,
        id: undefined
      }
    });
  });
});
describe('unbookmark article Success ation', () => {
  it('should return the correct action type and payload', () => {
    expect(unbookmarkArticleSuccess({ article: 'dummy article' }))
      .toEqual({
        type: UNBOOKMARK_ARTICLE_SUCCESS,
        payload: {
          article: 'dummy article'
        },
      });
  });
});
describe('unbookmark article failure action', () => {
  it('should return the correct action type and payload', () => {
    expect(unbookmarkArticleFailure({ error: 'Bad response' })).toEqual({
      type: UNBOOKMARK_ARTICLE_FAILURE,
      error: {
        error: 'Bad response'
      },
    });
  });
});
