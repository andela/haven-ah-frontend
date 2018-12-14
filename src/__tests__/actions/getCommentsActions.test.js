import {
  getComments,
  getCommentsSuccess,
  getCommentsFailure
} from '../../actions/articleThread';

import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE
} from '../../actionTypes/articleThreadActionTypes';

describe('Get comments request action', () => {
  it('should return a request object', () => {
    expect(getComments('slug')).toEqual({
      type: GET_COMMENTS_REQUEST,
      payload: 'slug',
    });
  });
});

describe('Get comments success action', () => {
  it('should return an object with comments', () => {
    expect(getCommentsSuccess([])).toEqual({
      type: GET_COMMENTS_SUCCESS,
      payload: [],
    });
  });
});

describe('Get comments failure action', () => {
  it('should return an object with error', () => {
    expect(getCommentsFailure({ error: 'error' })).toEqual({
      type: GET_COMMENTS_FAILURE,
      payload: 'error',
    });
  });
});
