import {
  FEATURED_AUTHOR_REQUEST,
  FEATURED_AUTHOR_SUCCESS,
  FEATURED_AUTHOR_FAILURE
} from '../actionTypes/featuredAuthorActionTypes';

const initialState = {
  fetching: false,
  data: {},
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case FEATURED_AUTHOR_REQUEST:
    return {
      ...state, fetching: true
    };
  case FEATURED_AUTHOR_SUCCESS:
    return {
      ...state, fetching: false, data: action.data
    };
  case FEATURED_AUTHOR_FAILURE:
    return {
      ...state, fetching: false, error: action.error
    };
  default:
    return { ...state };
  }
};

export default reducer;
