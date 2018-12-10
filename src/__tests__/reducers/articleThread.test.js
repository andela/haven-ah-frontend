import articleThreadReducer from '../../reducers/articleThread';
import * as types from '../../actionTypes/articleThreadActionTypes';

describe('Single article reducer: ', () => {
  it('should have the correct default state', () => {
    expect(articleThreadReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      fetching: false,
      article: null,
      error: null
    });
  });

  it('should update the reducer state while fetching', () => {
    expect(articleThreadReducer(undefined, {
      type: types.ARTICLE_THREAD_REQUEST
    })).toEqual({
      fetching: true,
      article: null,
      error: null
    });
  });

  it('should update the state when successful', () => {
    expect(articleThreadReducer(undefined, {
      type: types.ARTICLE_THREAD_SUCCESS,
      payload: { title: 'dummy' }
    })).toEqual({
      fetching: false,
      article: { title: 'dummy' },
      error: null
    });
  });

  it('should add error to the reducer state', () => {
    expect(articleThreadReducer(undefined, {
      type: types.ARTICLE_THREAD_FAILURE,
      payload: 'Bad request'
    })).toEqual({
      fetching: false,
      article: null,
      error: 'Bad request'
    });
  });
});
