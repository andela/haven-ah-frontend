import reactionReducer from '../../reducers/reactionReducer';
import * as types from '../../actionTypes/reactionActionTypes';

describe('Follow user reducer', () => {
  it('should have a default state', () => {
    expect(reactionReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      fetching: false,
      payload: null,
      error: null,
    });
  });
});

describe('Unfollow user reducer', () => {
  it('should have a default state', () => {
    expect(reactionReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      fetching: false,
      payload: null,
      error: null,
    });
  });

  it('should update follow user state while loading', () => {
    expect(reactionReducer(undefined, {
      type: types.LOVE_REQUEST
    })).toEqual({
      fetching: true,
      payload: null,
      error: null,
    });
  });

  it('should update follow user state', () => {
    expect(reactionReducer(undefined, {
      type: types.LOVE_SUCCESS,
      payload: { data: {} }
    })).toEqual({
      fetching: false,
      payload: {
        data: {}
      },
      error: null
    });
  });

  it('should update follow user state', () => {
    expect(reactionReducer(undefined, {
      type: types.LOVE_FAILURE,
      error: { error: 'Dud error message' }
    })).toEqual({
      fetching: false,
      payload: null,
      error: {
        error: 'Dud error message'
      },
    });
  });
});
