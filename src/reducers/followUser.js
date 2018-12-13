import {
  FOLLOW_USER_FAILURE,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_REQUEST,
  UNFOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_FAILURE,
} from '../actionTypes/followUserActionTypes';

const initialState = {
  fetching: false,
  payload: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case FOLLOW_USER_REQUEST:
    return { ...state, fetching: true, error: null };
  case FOLLOW_USER_SUCCESS:
    return { ...state, fetching: false, payload: action.payload };
  case FOLLOW_USER_FAILURE:
    return {
      ...state, fetching: false, payload: null, error: action.error,
    };
  case UNFOLLOW_USER_REQUEST:
    return { ...state, fetching: true, error: null };
  case UNFOLLOW_USER_SUCCESS:
    return { ...state, fetching: false, payload: action.payload };
  case UNFOLLOW_USER_FAILURE:
    return {
      ...state, fetching: false, payload: null, error: action.error,
    };
  default:
    return state;
  }
};
