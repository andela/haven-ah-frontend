import articleThreadReducer from '../../reducers/articleThread';
import * as types from '../../actionTypes/articleThreadActionTypes';

describe('Single article reducer: ', () => {
  const state = {
    fetching: false,
    commenting: false,
    article: null,
    error: null,
    comments: [],
    newComment: null,
    commentError: ''
  };

  it('should have the correct default state', () => {
    expect(articleThreadReducer(undefined, {
      type: 'non-existent type'
    })).toEqual(state);
  });

  it('should update the reducer state while fetching', () => {
    expect(articleThreadReducer(undefined, {
      type: types.ARTICLE_THREAD_REQUEST
    })).toEqual({ ...state, fetching: true });
  });

  it('should update the state when successful', () => {
    expect(articleThreadReducer(undefined, {
      type: types.ARTICLE_THREAD_SUCCESS,
      payload: { title: 'dummy' }
    })).toEqual({
      ...state,
      article: { title: 'dummy' },
    });
  });

  it('should add error to the reducer state', () => {
    expect(articleThreadReducer(undefined, {
      type: types.ARTICLE_THREAD_FAILURE,
      payload: 'Bad request'
    })).toEqual({
      ...state,
      error: 'Bad request',
    });
  });

  it('should turn on fetching on making comments request', () => {
    expect(articleThreadReducer(undefined, {
      type: types.GET_COMMENTS_REQUEST,
      payload: 'slug'
    })).toEqual({
      ...state,
      fetching: true,
    });
  });

  const comments = [
    {
      id: 1,
      body: 'My first comment'
    },
    {
      id: 2,
      body: 'My second comment'
    },
  ];

  it('should update the state with comments', () => {
    expect(articleThreadReducer(undefined, {
      type: types.GET_COMMENTS_SUCCESS,
      payload: comments
    })).toEqual({
      ...state,
      comments,
    });
  });

  it('should add error to the reducer state on get comments failure', () => {
    expect(articleThreadReducer(undefined, {
      type: types.GET_COMMENTS_FAILURE,
      payload: 'Bad request'
    })).toEqual({
      ...state,
      error: 'Bad request',
    });
  });
});
