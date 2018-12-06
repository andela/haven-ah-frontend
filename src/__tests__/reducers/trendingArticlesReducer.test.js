import trendingArticlesReducer from '../../reducers/trendingArticlesReducer';
import * as types from '../../actionTypes/trendingActionType';

describe('trending Articles', () => {
  it('should have a default state', () => {
    expect(trendingArticlesReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      fetching: false,
      error: null,
      articles: []
    });
  });

  it('should update trending Articles state while loading', () => {
    expect(trendingArticlesReducer(undefined, {
      type: types.TRENDING_ARTICLES_REQUEST
    })).toEqual({
      fetching: true,
      articles: [],
      error: null
    });
  });

  it('should update trending Articles state', () => {
    expect(trendingArticlesReducer(undefined, {
      type: types.TRENDING_ARTICLES_SUCCESS,
      articles: []
    })).toEqual({
      fetching: false,
      articles: [],
      error: null
    });
  });
});
