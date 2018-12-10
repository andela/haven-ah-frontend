import {
  LIKE_FAILURE,
  LIKE_REQUEST,
  LIKE_SUCCESS,
  LOVE_REQUEST,
  LOVE_SUCCESS,
  LOVE_FAILURE,
} from '../actionTypes/reactionActionTypes';

const initialState = {
  fetching: false,
  payload: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case LIKE_REQUEST:
    return { ...state, fetching: true, error: null };
  case LIKE_SUCCESS:
    return { ...state, fetching: false, payload: action.payload };
  case LIKE_FAILURE:
    return {
      ...state, fetching: false, payload: null, error: action.error,
    };
  case LOVE_REQUEST:
    return { ...state, fetching: true, error: null };
  case LOVE_SUCCESS:
    return { ...state, fetching: false, payload: action.payload };
  case LOVE_FAILURE:
    return {
      ...state, fetching: false, payload: null, error: action.error,
    };
  default:
    return state;
  }
};
