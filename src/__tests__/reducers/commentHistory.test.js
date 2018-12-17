import {
  GET_COMMENT_HISTORY,
  COMMENT_HISTORY_SUCCESS,
  COMMENT_HISTORY_FAILURE
} from '../../actionTypes/commentHistoryActionTypes';
import reducer from '../../reducers/commentHistory';

describe('', () => {
  const state = {
    fetching: false,
    error: '',
    commentHistory: null,
  };

  it('should return default state', () => {
    expect(reducer(undefined, {
      type: 'non-existent type'
    })).toEqual(state);
  });

  it('should update fetching state to true on request', () => {
    expect(reducer(undefined, {
      type: GET_COMMENT_HISTORY
    })).toEqual({
      ...state,
      fetching: true
    });
  });

  it('should update fetching state to true on request', () => {
    expect(reducer(undefined, {
      type: COMMENT_HISTORY_SUCCESS,
      payload: []
    })).toEqual({
      ...state,
      commentHistory: []
    });
  });

  it('should update fetching state to true on request', () => {
    expect(reducer(undefined, {
      type: COMMENT_HISTORY_FAILURE,
      payload: 'Bad Request'
    })).toEqual({
      ...state,
      error: 'Bad Request'
    });
  });
});
