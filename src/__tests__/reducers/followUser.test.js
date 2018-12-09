import followUserReducer from '../../reducers/followUser';
import * as types from '../../actionTypes/followUserActionTypes';

describe('Follow user reducer', () => {
  it('should have a default state', () => {
    expect(followUserReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      fetching: false,
      payload: null,
      error: null,
    });
  });

  it('should update follow user state while loading', () => {
    expect(followUserReducer(undefined, {
      type: types.FOLLOW_USER_REQUEST
    })).toEqual({
      fetching: true,
      payload: null,
      error: null,
    });
  });

  it('should update follow user state', () => {
    expect(followUserReducer(undefined, {
      type: types.FOLLOW_USER_SUCCESS,
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
    expect(followUserReducer(undefined, {
      type: types.FOLLOW_USER_FAILURE,
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

describe('Unfollow user reducer', () => {
  it('should have a default state', () => {
    expect(followUserReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      fetching: false,
      payload: null,
      error: null,
    });
  });

  it('should update follow user state while loading', () => {
    expect(followUserReducer(undefined, {
      type: types.UNFOLLOW_USER_REQUEST
    })).toEqual({
      fetching: true,
      payload: null,
      error: null,
    });
  });

  it('should update follow user state', () => {
    expect(followUserReducer(undefined, {
      type: types.UNFOLLOW_USER_SUCCESS,
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
    expect(followUserReducer(undefined, {
      type: types.UNFOLLOW_USER_FAILURE,
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
