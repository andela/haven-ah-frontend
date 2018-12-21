import searchArticleReducer from '../../reducers/searchReducer';
import * as types from '../../actionTypes/searchActionTypes';

describe('search Articles', () => {
  it('should have a default state', () => {
    expect(searchArticleReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      fetching: false,
      articles: null,
      error: null
    });
  });

  it('should update bookmark Articles state while loading', () => {
    expect(searchArticleReducer(undefined, {
      type: types.SEARCH_REQUEST
    })).toEqual({
      fetching: true,
      error: null,
      articles: null
    });
  });

  it('should fail to update bookmark Articles state', () => {
    expect(searchArticleReducer(undefined, {
      type: types.SEARCH_FAILURE,
    })).toEqual({
      error: undefined,
      fetching: false,
      articles: null,
    });
  });

  it('should update bookmark Articles state', () => {
    expect(searchArticleReducer(undefined, {
      type: types.SEARCH_SUCCESS,
      payload: []
    })).toEqual({
      error: null,
      fetching: false,
      articles: [],
    });
  });
});
