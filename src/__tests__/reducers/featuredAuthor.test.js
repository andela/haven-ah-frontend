import featuredAuthorReducer from '../../reducers/featuredAuthor';
import * as types from '../../actionTypes/featuredAuthorActionTypes';

describe('Featured author', () => {
  it('should have a default state', () => {
    expect(featuredAuthorReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      fetching: false,
      data: {},
      error: '',
    });
  });

  it('should update featured author state while loading', () => {
    expect(featuredAuthorReducer(undefined, {
      type: types.FEATURED_AUTHOR_REQUEST
    })).toEqual({
      fetching: true,
      data: {},
      error: ''
    });
  });

  it('should update featured author state', () => {
    expect(featuredAuthorReducer(undefined, {
      type: types.FEATURED_AUTHOR_SUCCESS,
      data: { article: {} }
    })).toEqual({
      fetching: false,
      data: {
        article: {}
      },
      error: ''
    });
  });
});
