import {
  GET_COMMENT_HISTORY,
  COMMENT_HISTORY_SUCCESS,
  COMMENT_HISTORY_FAILURE
} from '../actionTypes/commentHistoryActionTypes';

const initialState = {
  fetching: false,
  error: '',
  commentHistory: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_COMMENT_HISTORY:
    return { ...state, fetching: true, commentHistory: null };
  case COMMENT_HISTORY_SUCCESS:
    return { ...state, commentHistory: action.payload, fetching: false, };
  case COMMENT_HISTORY_FAILURE:
    return {
      ...state, fetching: false, error: action.payload, commentHistory: null
    };
  default:
    return state;
  }
};
