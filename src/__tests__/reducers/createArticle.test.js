import createArticleReducer from '../../reducers/createArticle';
import * as types from '../../actionTypes/createArticle';
import { CLEAR_REDIRECT } from '../../actionTypes/articleThreadActionTypes';

describe('Single article reducer: ', () => {
  it('should have the correct default state', () => {
    expect(createArticleReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      slug: null,
      error: null,
      publishing: false
    });
  });

  it('should update the reducer state while fetching', () => {
    expect(createArticleReducer(undefined, {
      type: types.CREATE_ARTICLE_REQUEST
    })).toEqual({
      slug: null,
      error: null,
      publishing: true
    });
  });

  it('should update the state when successful', () => {
    expect(createArticleReducer(undefined, {
      type: types.CREATE_ARTICLE_SUCCESS,
      payload: 'slug-4533'
    })).toEqual({
      slug: 'slug-4533',
      error: null,
      publishing: false
    });
  });

  it('should add error to the reducer state', () => {
    expect(createArticleReducer(undefined, {
      type: types.CREATE_ARTICLE_FAILURE,
      payload: 'Bad request'
    })).toEqual({
      slug: null,
      error: 'Bad request',
      publishing: false
    });
  });

  it('should clear redirect', () => {
    expect(createArticleReducer(undefined, {
      type: CLEAR_REDIRECT
    })).toEqual({
      slug: null,
      error: null,
      publishing: false
    });
  });
});
