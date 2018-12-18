import recentArticlesReducer from '../../reducers/recentArticlesReducer';
import * as types from '../../actionTypes/recentArticlesType';

describe('recent Articles', () => {
  it('should have a default state', () => {
    expect(recentArticlesReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      fetching: false,
      articles: null,
      error: null
    });
  });

  it('should update recent Articles state while loading', () => {
    expect(recentArticlesReducer(undefined, {
      type: types.RECENT_ARTICLES_REQUEST
    })).toEqual({
      fetching: true,
      error: null,
      articles: null
    });
  });

  it('should update recent Articles state', () => {
    expect(recentArticlesReducer(undefined, {
      type: types.RECENT_ARTICLES_SUCCESS,
      articles: []
    })).toEqual({
      error: false,
      fetching: false,
      articles: [],
    });
  });
});
