import bookmarkArticleReducer from '../../reducers/boomarkArticle';
import * as types from '../../actionTypes/bookmarkArticleActionTypes';

describe('unbookmark Articles', () => {
  it('should have a default state', () => {
    expect(bookmarkArticleReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      fetching: false,
      payload: null,
      error: null
    });
  });

  it('should update bookmark Articles state while loading', () => {
    expect(bookmarkArticleReducer(undefined, {
      type: types.UNBOOKMARK_ARTICLE_REQUEST
    })).toEqual({
      fetching: true,
      error: null,
      payload: null
    });
  });

  it('should fail to update bookmark Articles state', () => {
    expect(bookmarkArticleReducer(undefined, {
      type: types.UNBOOKMARK_ARTICLE_FAILURE,
    })).toEqual({
      error: undefined,
      fetching: false,
      payload: null,
    });
  });

  it('should update bookmark Articles state', () => {
    expect(bookmarkArticleReducer(undefined, {
      type: types.UNBOOKMARK_ARTICLE_SUCCESS,
      payload: []
    })).toEqual({
      error: null,
      fetching: false,
      payload: [],
    });
  });
});

describe('bookmark Articles', () => {
  it('should have a default state', () => {
    expect(bookmarkArticleReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      fetching: false,
      payload: null,
      error: null
    });
  });

  it('should update bookmark Articles state while loading', () => {
    expect(bookmarkArticleReducer(undefined, {
      type: types.BOOKMARK_ARTICLE_REQUEST
    })).toEqual({
      fetching: true,
      error: null,
      payload: null
    });
  });

  it('should fail to update bookmark Articles state', () => {
    expect(bookmarkArticleReducer(undefined, {
      type: types.BOOKMARK_ARTICLE_FAILURE,
    })).toEqual({
      error: undefined,
      fetching: false,
      payload: null,
    });
  });

  it('should update bookmark Articles state', () => {
    expect(bookmarkArticleReducer(undefined, {
      type: types.BOOKMARK_ARTICLE_SUCCESS,
      payload: []
    })).toEqual({
      error: null,
      fetching: false,
      payload: [],
    });
  });
});
